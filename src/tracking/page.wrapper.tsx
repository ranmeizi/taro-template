import { throttle } from '@/utils/delay';
import { useDidHide, useDidShow, useLoad, useUnload } from '@tarojs/taro';
import agent from './index';
import * as PageHistory from './tool/LinkNode';

type ExpandProps = {
  pageId: string;
  extension?: Record<string, any>;
};

const wrapTrackingPage: HOC_Expand<ExpandProps> = (Component: any) => {
  return function (props: any) {
    const pageId = props.pageId;
    const tabView = props.tabView;

    useLoad(() => {
      // 页面加载时
      if (tabView) {
        tabIn(pageId);
      } else {
        PageHistory.push(pageId);
      }
    });

    useUnload(() => {
      PageHistory.pop();
    });

    useDidHide(() => {
      agent.duration.groups['pageStay'].end(props.extension);
    });

    useDidShow(() => {
      if (tabView) {
        tabIn(pageId);
      }

      agent.track({
        event: 'show',
        pageId: pageId,
      });
      agent.duration.groups['pageStay'].start({
        event: 'stay',
        pageId: pageId,
      });
    });

    return <Component {...props} />;
  };
};

const tabIn = throttle((pageId: string) => {
  if (PageHistory.Stack.curr) {
    PageHistory.replace(pageId);
  } else {
    PageHistory.push(pageId);
  }
}, 20);

(window as any).wx.test = function () {
  console.log(PageHistory.Stack.curr);
};

export default wrapTrackingPage;
