/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 11:40:58
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 14:43:39
 * @FilePath: /taro-template/src/app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/mine/index'
  ],
  subPackages:[
    {
      root:'subPackage',
      pages:[
        'pages/form-example/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: "#545968",
    selectedColor: "#0051CC",
    backgroundColor: "white",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/tabbar-icons/buy-sell-signal.png",
        selectedIconPath: "./assets/tabbar-icons/buy-sell-signal-select.png",
      }, {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./assets/tabbar-icons/personal.png",
        selectedIconPath: "./assets/tabbar-icons/personal-select.png",
      },
    ],
  },
})
