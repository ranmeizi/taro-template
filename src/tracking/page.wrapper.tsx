/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-25 01:23:30
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 13:35:02
 * @FilePath: /taro-template/src/tracking/page.wrapper.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import useConstant from '@/hooks/useConstants';
import { useDidHide, useDidShow, useLoad } from '@tarojs/taro';
import React from 'react';
import agent from './index';

type ExpandProps = {
  pageId: string;
  extension?: Record<string, any>;
};

const wrapTrackingPage: HOC_Expand<ExpandProps> = (Component: any) => {
  return function (props: any) {
    const pageId = useConstant(() => props.pageId);

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
    });

    return <Component {...props} />;
  };
};

export default wrapTrackingPage;
