/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 18:06:55
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-24 23:50:14
 * @FilePath: /taro-template/src/components/CustomTabbar/context.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  PropsWithChildren,
  Component,
  PureComponent,
  ReactNode,
  createContext,
} from 'react';
import tabConfig, { TabBarItem } from '@/configs/tabConfig';

export interface ITabContext {
  tabs: TabBarItem[];
  current: number;
  setCurrent(v: number): void;
}

export const context = createContext<ITabContext>({
  tabs: tabConfig,
  current: 0,
  setCurrent: (v: number) => {},
});

export class Provider extends PureComponent<PropsWithChildren> {
  state = {
    tabs: tabConfig,
    current: 0,
  };

  setCurrent(current: number) {
    console.log('setCurrent', current);
    this.setState({ current });
  }

  render(): ReactNode {
    const { tabs, current } = this.state;
    const { children } = this.props;
    return (
      <context.Provider
        value={{
          tabs: tabs,
          current: current,
          setCurrent: this.setCurrent.bind(this),
        }}
      >
        {children}
      </context.Provider>
    );
  }
}
