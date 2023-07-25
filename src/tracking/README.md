# 多种类埋点统一接口

统一了埋点的api

各家在 impls 中实现埋点

使用 agent 统一调用

## page.wrapper

包装 Page 组件 让page 在 show hide 时 发送 show / stay 埋点

## duretion

实现 停留时长的自动计算
