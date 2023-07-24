import React, { useContext } from "react";

/** connect */
export function createConnect<Ctx>(Context: React.Context<Ctx>) {
  return function connect<T>(mapToProps: (state: any) => T): HOC<T> {
    return function (Component: any) {
      return (props: any) => {
        const context = useContext(Context);

        let inject: T = mapToProps(context);

        return <Component {...props} {...inject} />;
      };
    };
  };
}
