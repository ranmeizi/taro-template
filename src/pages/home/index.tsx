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
