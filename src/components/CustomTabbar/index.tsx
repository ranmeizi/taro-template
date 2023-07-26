import { CoverView, CoverImage } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useContext } from 'react';
import { context } from './context';

// tabbar 文字颜色
const selectedColor = '#0051CC';
const color = '#545968';

export default function () {
  const { tabs, current, setCurrent } = useContext(context);

  function switchTab(index) {
    const pagePath = tabs[index].pagePath;
    setCurrent(index);
    Taro.switchTab({
      url: '/' + pagePath,
    });
  }

  return (
    <CoverView
      style={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: 10,
        display: 'flex',
        background: '#fff',
        borderTop: '1px solid #E9EAEF',
        fontSize: 0,
      }}
    >
      {tabs.map((item, index) => {
        return (
          <CoverView
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '88px',
            }}
            onClick={() => {
              switchTab(index);
            }}
            data-path={item.pagePath}
            key={item.text}
          >
            <CoverView
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
              }}
            >
              <CoverImage
                src={item.selectedIconPath}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: current === index ? 10 : 1,
                  width: '24px',
                  height: '24px',
                }}
              />
              <CoverImage
                src={item.iconPath}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: current === index ? 1 : 10,
                  width: '24px',
                  height: '24px',
                }}
              />
            </CoverView>

            <CoverView
              style={{
                color: current === index ? selectedColor : color,

                fontFamily: 'PingFang SC-Regular, PingFang SC',
                fontSize: '22rpx',
                fontWeight: 'normal',
                marginTop: '4rpx',
                lineHeight: '36rpx',
                textAlign: 'center',
              }}
            >
              {item.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
}
