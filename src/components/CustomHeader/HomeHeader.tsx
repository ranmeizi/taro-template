/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 18:45:41
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 00:41:19
 * @FilePath: /taro-template/src/components/CustomHeader/HomeHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import React from 'react';

export default function HomeHeader() {
  return (
    <View
      className="f-r a-end"
      style={{
        width: '100%',
        height: '88px',
        position: 'fixed',
        top: 0,
        background: 'rgb(250,197,51)',
      }}
    >
      <View
        className="f-r j-center a-center"
        style={{
          height: '44px',
          flex: 1,
          paddingRight: '100px',
          color: '#777',
        }}
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
            height: '32px',
            lineHeight: '32px',
            borderRadius: '32px',
            background: '#fff',
          }}
        >
          <View style={{ marginRight: '8px' }}>搜索</View>
          <AtIcon value="search" size={18} />
        </View>
      </View>
    </View>
  );
}
