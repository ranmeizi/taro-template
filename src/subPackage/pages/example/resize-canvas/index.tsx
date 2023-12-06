import Page from '@/components/Page';
import ResizeCanvas, {
  ResizeCanvasRef,
  fitHeight,
} from '@/components/ResizeCanvas';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useRef, useState } from 'react';

/** 用于埋点的 pageId (必须) */
const PAGE_ID = 'example-resize-canvas';

definePageConfig({
  navigationBarTitleText: '缩图',
});

export default function () {
  const ref = useRef<ResizeCanvasRef>();
  const [dst, setDst] = useState('');

  async function upload() {
    let res = await Taro.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
    });

    let path = res.tempFiles[0].tempFilePath;

    let [dwidth, dheight] = await fitHeight(path, 500);

    let dst = await ref.current?.resize({
      templatePath: path,
      width: dwidth,
      height: dheight,
    });

    dst && setDst(dst);
  }

  async function download() {
    if (!dst) {
      Taro.showToast({
        title: '请先上传',
        icon: 'none',
      });
      return;
    }

    await Taro.saveImageToPhotosAlbum({
      filePath: dst,
    });
  }

  return (
    <Page pageId={PAGE_ID} style={{ background: '#f0f1f4' }}>
      <ResizeCanvas ref={ref} />
      <View onClick={upload}>上传</View>
      <View onClick={download}>下载</View>
    </Page>
  );
}
