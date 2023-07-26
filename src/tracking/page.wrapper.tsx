/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-25 01:23:30
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-26 12:27:01
 * @FilePath: /taro-template/src/tracking/page.wrapper.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import useConstant from '@/hooks/useConstants';
import { throttle } from '@/utils/delay';
import Taro, { useDidHide, useDidShow, useLoad, useUnload } from '@tarojs/taro';
import React from 'react';
import * as PageHistory from './LinkNode';
import agent from './index';

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
      agent.track({
        event: 'show',
        pageId: pageId,
      });
      agent.duration.groups['pageStay'].start({
        event: 'stay',
        pageId: pageId,
      });

      if (tabView) {
        tabIn(pageId);
      }
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
