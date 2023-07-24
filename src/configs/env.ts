/*
 * @Author: lvyinling lvyinling@smartlink.com.cn
 * @Date: 2022-07-17 21:02:31
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-24 12:52:19
 * @FilePath: /react-vite-template/src/pages/p-cnpc/config/env.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const NETWORK_ENV = (process.env.NETWORK_ENV as Envs) || "localhost";

// 环境变量可选值
export type Envs = "test" | "pre" | "prod"

// 环境变量说明
type EnvConfigGuide = {
  server_base: '后台服务基础地址'
};

type ConfigList = Record<keyof EnvConfigGuide, string>;

export type EnvConfig = Record<Envs, ConfigList>;

const config: EnvConfig = {
  test: {
    server_base: 'http://assistant-api.yitao.mofanglicai.com.cn/'
  },
  pre: {
    server_base: 'https://assistant-api-kp1.licaimofang.com/'
  },
  prod: {
    server_base: 'https://assistant-api.licaimofang.com/'
  }
};

export default config[NETWORK_ENV];
