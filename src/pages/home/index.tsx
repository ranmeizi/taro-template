/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 12:11:33
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 23:24:42
 * @FilePath: /taro-template/src/pages/home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HomeHeader, { getHeight } from '@/components/CustomHeader/HomeHeader';
import CustomTabbar from '@/components/CustomTabbar';
import Page from '@/components/Page';
import { View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { useState } from 'react';
import { AtAccordion, AtInput, AtList, AtListItem } from 'taro-ui';
import './style.less';

const PAGE_ID = 'home';

definePageConfig({
  navigationStyle: 'custom',
});

export default function () {
  const [paddingTop, setPaddingTop] = useState(0);
  function navToFormExample() {
    Taro.navigateTo({
      url: '/subPackage/pages/form-example/index',
    });
  }

  useLoad(() => {
    getHeight().then(setPaddingTop);
  });

  return (
    <Page pageId={PAGE_ID} tabView style={{ paddingTop: `${paddingTop}px` }}>
      <HomeHeader />
      <View>
        <View>首页</View>
        <View>收拾收拾</View>
        <AtInput
          name="value"
          title="标准五个字"
          type="text"
          placeholder="标准五个字"
          value="22"
        />

        <AtAccordion title="示例代码" open>
          <AtList hasBorder={false}>
            <AtListItem
              onClick={navToFormExample}
              title="表单页"
              arrow="right"
              thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            />
          </AtList>
        </AtAccordion>
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
