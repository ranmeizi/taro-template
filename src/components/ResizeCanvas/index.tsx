import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Canvas } from '@tarojs/components';
import Taro, { RenderingContext } from '@tarojs/taro';

type Options = { templatePath; height; width };

export interface ResizeCanvasRef {
  resize: (options: Options) => Promise<string>;
}

type Props = {};

const CANVAS_ID = 'resize-canvas';

export default forwardRef(function ResizeCanvas({}: Props, ref) {
  const canvas = useRef<any>();
  const ctx = useRef<RenderingContext>();

  useEffect(() => {
    const query = Taro.createSelectorQuery();
    query
      .select(`#${CANVAS_ID}`)
      .fields({ node: true, size: true })
      .exec((res) => {
        canvas.current = res[0].node;
        ctx.current = canvas.current.getContext('2d');
      });
  }, []);

  function change(width, height) {
    if (!ctx.current) return;
    canvas.current.width = width;
    canvas.current.height = height;
  }

  /** 挂载api */
  useImperativeHandle(ref, () => ({
    resize,
  }));

  async function resize({ templatePath, width, height }: Options) {
    change(width, height);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let img = canvas.current.createImage(templatePath);
        img.src = templatePath;
        img.onload = function () {
          // @ts-ignore
          ctx.current!.drawImage(img, 0, 0, width, height);

          Taro.canvasToTempFilePath({
            x: 0,
            y: 0,
            width,
            height,
            destWidth: width,
            destHeight: height,
            canvas: canvas.current,
            success: function (res) {
              console.log('成功', res);
              if (!res.tempFilePath) {
                throw 'ResizeCanvas:没有拿到tempFilePath';
              }

              resolve(res.tempFilePath);
            },
            fail: function (err) {
              console.log('失败', err);
              reject(err);
            },
          });
        };
        img.onerror = reject;
      }, 1000);
    });
  }

  return (
    <Canvas
      type="2d"
      id={CANVAS_ID}
      style={{
        position: 'absolute',
        top: '100vh',
        opacity: 0,
      }}
    />
  );
});

async function getImgRact(tempFilePath: string) {
  const res = await Taro.getImageInfo({ src: tempFilePath });
  if (!res.width || !res.height) {
    throw 'getImgRact,获取不到图片宽高';
  }

  return [res.width, res.height];
}

export async function fitWidth(tempFilePath: string, width: number) {
  const [imgWidth, imgHeight] = await getImgRact(tempFilePath);
  const scale = width / imgWidth;
  return [width, imgHeight * scale];
}

export async function fitHeight(tempFilePath: string, height: number) {
  const [imgWidth, imgHeight] = await getImgRact(tempFilePath);
  const scale = height / imgHeight;
  return [imgWidth * scale, height];
}
