import { View } from '@tarojs/components';
import React, {
  PropsWithChildren,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { AtActivityIndicator } from 'taro-ui';

enum EnumStatus {
  pending,
  fulfilled,
  rejected,
}

type AwaitProps = {
  resolve?: Promise<any>;
  fallback?: React.ReactNode;
  errorElement?: React.ReactNode;
};

/** 默认 pending 画面 */
function DefaultPendingView() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <AtActivityIndicator size={18} color="#707070"></AtActivityIndicator>
    </View>
  );
}

const context = createContext<any>({});

export function Await({
  children,
  resolve,
  fallback = <DefaultPendingView />,
  errorElement = null,
}: PropsWithChildren<AwaitProps>) {
  const [status, setStatus] = useState<EnumStatus>(EnumStatus.pending);
  const [value, setValue] = useState({
    fulfilledValue: undefined,
    rejectedValue: undefined,
  });

  useEffect(() => {
    if (resolve) {
      resolve
        .then((res) => {
          setValue({
            fulfilledValue: res,
            rejectedValue: undefined,
          });
          return EnumStatus.fulfilled;
        }) // 没有错误就显示
        .catch((err) => {
          setValue({
            fulfilledValue: undefined,
            rejectedValue: err,
          });
          return EnumStatus.rejected;
        }) // 有错误就显示空页面
        .then(setStatus);
    }
  }, [resolve]);

  if (status === EnumStatus.pending) {
    return <>{fallback}</>;
  }

  return (
    <context.Provider value={value}>
      {status === EnumStatus.fulfilled ? children : errorElement!}
    </context.Provider>
  );
}

// 获得值
export function useAsyncValue<T>(): T {
  const { fulfilledValue } = useContext(context);

  return fulfilledValue;
}

// 获得错误
export function useAsyncError<T>(): T {
  const { rejectedValue } = useContext(context);

  return rejectedValue;
}
