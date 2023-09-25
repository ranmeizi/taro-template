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

/**
 * 在这里将头部切分为3个部分
 * 1. 状态栏 height:statusHeiht top:0
 * 2. 状态栏底部，到胶囊按钮底部加上外边距
 *    外边距 mg = menu.top - statusHeiht
 *    height = 2 * mg + menuHeight
 * 3. 其余部分 1，2以外的节点
 */
export class MenuLayout extends PureComponent<MenuLayoutProps> {
  /** 这俩单位都是px */
  deviceInfo = Taro.getSystemInfoSync();
  menuRect = Taro.getMenuButtonBoundingClientRect();

  componentDidMount(): void {
    console.log(this.deviceInfo, this.menuRect);
  }

  get statusStyle(): React.CSSProperties {
    return {
      background: this.props.debug ? 'blue' : '',
      height: this.deviceInfo.statusBarHeight + 'px',
    };
  }

  get menuStyle(): React.CSSProperties {
    const mg = this.menuRect.top - this.deviceInfo.statusBarHeight!;
    const height = mg * 2 + this.menuRect.height;
    const width = this.menuRect.left;
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
