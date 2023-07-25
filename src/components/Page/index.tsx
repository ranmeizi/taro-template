/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 11:54:43
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 13:26:10
 * @FilePath: /taro-template/src/components/Page/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ScrollView, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { CSSProperties, useMemo } from 'react';
import wrapTrackingPage from '@/tracking/page.wrapper';

type PageProps = {
  /** 是否为 tabview */
  tabView?: boolean;
  style?: CSSProperties;
};

function Page({
  tabView,
  style = {},
  children,
}: React.PropsWithChildren<PageProps>) {
  return (
    <View
      style={{
        height: '100vh',
        paddingBottom: tabView ? '88px' : 0,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <ScrollView
        enhanced
        scrollY
        className="tt-page"
        style={{ height: '100%' }}
      >
        {children}
      </ScrollView>
    </View>
  );
}

export default wrapTrackingPage(Page);
