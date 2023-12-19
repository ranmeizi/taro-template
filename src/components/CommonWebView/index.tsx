import Page from '@/components/Page';
import TA from '@/tracking';
import { rudelySetTitle } from '@/utils/setTitle';
import { WebView } from '@tarojs/components';
import { useEffect } from 'react';
import { AtActivityIndicator } from 'taro-ui';

type PageParams = {
  src: string;
  title: string;
  pageId: string;
};

type WebViewProps = {} & PageParams;

/**
 * 公共 webview
 * 用于 path 套壳 ，以及 utl -> webview src 的转换
 */
export default function ({ pageId, src, title }: WebViewProps) {
  // 暴力 set title
  useEffect(() => {
    title && rudelySetTitle(title);
  }, [title]);

  function onMessage(e) {
    console.log('onMessage', e);
    e.detail.data.forEach(messageHandler);
  }

  return (
    <Page pageId={pageId} style={{ position: 'relative' }}>
      {src ? (
        <WebView src={src} onMessage={onMessage} />
      ) : (
        <AtActivityIndicator mode="center" />
      )}
    </Page>
  );
}

export function getProps(params: Record<string, any>): PageParams {
  const { url, title, pageId } = params;

  return {
    src: decodeURIComponent(url),
    title: decodeURIComponent(title),
    pageId: decodeURIComponent(pageId),
  };
}

type StandardMessage = {
  type?: string;
  payload?: any;
};

function messageHandler(message: StandardMessage) {
  switch (message?.type) {
    case 'track':
      console.log('要埋了', message.payload);
      TA.track(message.payload);
      return;
    default:
      return;
  }
}
