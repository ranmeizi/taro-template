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
  }

  setToken(token: string) {
    this._setStorage({ token });
  }

  /**
   * 往 storage 里存一份
   */
  private _setStorage: typeof this.setState = (data: any) => {
    this.setState(data, () => {
      Taro.setStorageSync(PERSIST_KEY, this.state);
    });
  };

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
