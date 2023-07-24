/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 11:40:58
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-24 18:21:39
 * @FilePath: /taro-template/src/app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEstir
 */
import { Component, PropsWithChildren } from "react";
import "./app.less";
import { Provider as TabProvider } from "./components/CustomTabbar/context";

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <TabProvider>{this.props.children}</TabProvider>;
  }
}

export default App;
