import Taro from '@tarojs/taro';
import { PropsWithChildren, createContext, PureComponent } from 'react';

const PERSIST_KEY = 'app-persist';

export interface IAppContext {
  token: string;
  setToken(v: string): void;
  userInfo: {};
}

const defaultValue: IAppContext = {
  token: '',
  userInfo: {},
  setToken: () => undefined,
};

export const context = createContext(defaultValue);

export class Provider extends PureComponent<PropsWithChildren> {
  state = {
    token: '',
    userInfo: {},
  };

  componentDidMount() {
    Taro.getStorage({
      key: PERSIST_KEY,
      success: (result) => {
        console.log('init', result);
        this.setState({ ...result.data });
      },
    });

    Taro.onAppHide(() => {
      console.log('hide');
      Taro.setStorage({
        key: PERSIST_KEY,
        data: this.state,
      });
    });
  }

  setToken(token: string) {
    this.setState({ token });
  }

  render() {
    const { token, userInfo } = this.state;
    const { children } = this.props;
    return (
      <context.Provider
        value={{
          token,
          userInfo,
          setToken: this.setToken.bind(this),
        }}
      >
        {children}
      </context.Provider>
    );
  }
}
