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
