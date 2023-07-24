import Page from "@/components/Page";
import CustomTabbar from "@/components/CustomTabbar";
import React from "react";

definePageConfig({});

export default function () {
  return (
    <Page>
      我的
      <CustomTabbar />
    </Page>
  );
}
