import useConstant from '@/hooks/useConstant';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { PureComponent } from 'react';

type MenuLayoutProps = {
  status?: React.ReactNode;
  menu?: React.ReactNode;
  /** 调试模式，调试模式background有颜色 */
  debug?: boolean;
};

/** 这俩单位都是px */
const deviceInfo = Taro.getSystemInfoSync();
const menuRect = Taro.getMenuButtonBoundingClientRect();

/**
 * 在这里将头部切分为3个部分
 * 1. 状态栏 height:statusHeiht top:0
 * 2. 状态栏底部，到胶囊按钮底部加上外边距
 *    外边距 mg = menu.top - statusHeiht
 *    height = 2 * mg + menuHeight
 * 3. 其余部分 1，2以外的节点
 */
export class MenuLayout extends PureComponent<MenuLayoutProps> {
  componentDidMount(): void {
    console.log(deviceInfo, menuRect);
  }

  get statusStyle(): React.CSSProperties {
    console.log('statusStyle', deviceInfo.statusBarHeight);
    return {
      background: this.props.debug ? 'blue' : '',
      height: deviceInfo.statusBarHeight + 'px',
    };
  }

  get menuStyle(): React.CSSProperties {
    const mg = menuRect.top - deviceInfo.statusBarHeight!;
    const height = mg * 2 + menuRect.height;
    const width = menuRect.left;
    return {
      background: this.props.debug ? 'red' : '',
      height: height + 'px',
      width: width + 'px',
    };
  }

  render() {
    return (
      <View className="full-width">
        {/* 电池栏 */}
        <View className="full-width" style={this.statusStyle}>
          {this.props.status}
        </View>
        {/* 胶囊 */}
        <View style={this.menuStyle}>{this.props.menu}</View>
      </View>
    );
  }
}

let memoHeight;

export function getHeight() {
  if (memoHeight) {
    return memoHeight;
  }
  const mg = menuRect.top - deviceInfo.statusBarHeight!;
  memoHeight = deviceInfo.statusBarHeight! + mg * 2 + menuRect.height;

  return memoHeight;
}
