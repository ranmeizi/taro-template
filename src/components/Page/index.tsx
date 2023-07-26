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
