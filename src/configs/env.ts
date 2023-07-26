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
