/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 18:45:41
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 19:14:46
 * @FilePath: /taro-template/src/components/CustomHeader/HomeHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import useConstant from '@/hooks/useConstants';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import { MenuLayout } from './MenuLayout';

export default function HomeHeader() {
  const menuRect = useConstant(Taro.getMenuButtonBoundingClientRect);
  return (
    <View
      id="home-header"
      className="f-c"
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        background: 'rgb(250,197,51)',
      }}
    >
      <MenuLayout
        debug
        menu={
          <View
            className="f-r j-center a-center full-height"
            style={{ boxSizing: 'border-box', padding: '4px' }}
          >
            <View
              className="f-r j-center a-center"
              style={{ width: '80px', color: '#fff', fontWeight: 600 }}
            >
              <View>北京</View>
              <AtIcon value="chevron-down" size={14} />
            </View>
            <View
              className="f-r j-center a-center"
              style={{
                width: '100%',
                height: `${menuRect.height}px`,
                lineHeight: `${menuRect.height}px`,
                borderRadius: `${menuRect.height}px`,
                background: '#fff',
              }}
            >
              <View style={{ marginRight: '8px' }}>搜索</View>
              <AtIcon value="search" size={18} />
            </View>
          </View>
        }
      />
      <View>你看我，是其余的部分哦</View>
      <View>你看我，是其余的部分哦</View>
      <View>你看我，是其余的部分哦</View>
      <View>你看我，是其余的部分哦</View>
    </View>
  );
}

function getHeight() {
  const query = Taro.createSelectorQuery();
  query.select('#home-header').boundingClientRect();
  query.selectViewport().scrollOffset();
  return new Promise((resolve) => {
    query.exec(function (res) {
      resolve(res[0].height);
    });
  });
}

export { getHeight };
