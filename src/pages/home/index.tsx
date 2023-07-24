/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 12:11:33
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 00:22:42
 * @FilePath: /taro-template/src/pages/home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Page from '@/components/Page';
import CustomTabbar from '@/components/CustomTabbar';
import React from 'react';
import { View } from '@tarojs/components';
import HomeHeader from '@/components/CustomHeader/HomeHeader';

const PAGE_ID = 'home';

definePageConfig({
  navigationStyle: 'custom',
});

export default function () {
  return (
    <Page pageId={PAGE_ID} style={{ paddingTop: '88px' }}>
      <HomeHeader />
      <View>
        <View>首页</View>
        <View>收拾收拾</View>
        {Array(100)
          .fill(1)
          .map((item, index) => {
            return <View>我是第{index}行</View>;
          })}
      </View>
      <CustomTabbar />
    </Page>
  );
}
