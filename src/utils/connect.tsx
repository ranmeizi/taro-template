/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 18:11:59
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 13:28:18
 * @FilePath: /taro-template/src/utils/connect.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useContext } from 'react';

/** connect */
export function createConnect<Ctx>(Context: React.Context<Ctx>) {
  return function connect<T>(mapToProps: (state: any) => T): HOC_Inject<T> {
    return function (Component: any) {
      return (props: any) => {
        const context = useContext(Context);

        let inject: T = mapToProps(context);

        return <Component {...props} {...inject} />;
      };
    };
  };
}
