/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-24 11:54:43
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-24 18:51:21
 * @FilePath: /taro-template/src/components/Page/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ScrollView, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useMemo } from "react";

type PageProps = {
  /** 是否为 tabview */
  tabView?: boolean;
};

export default function Page({
  tabView,
  children,
}: React.PropsWithChildren<PageProps>) {
  const { screenHeight } = Taro.getSystemInfoSync();

  const height = useMemo(() => {
    return tabView ? `calc(100% - 88px)` : "100%";
  }, [tabView]);

  return (
    <View
      style={{
        height: "100vh",
        paddingTop: "120px",
        paddingBottom: tabView ? "88px" : 0,
        boxSizing: "border-box",
      }}
    >
      <ScrollView
        enhanced
        scrollY
        className="tt-page"
        style={{ height: "100%" }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
