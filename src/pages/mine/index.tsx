import Page from '@/components/Page';
import CustomTabbar from '@/components/CustomTabbar';
import React from 'react';

const PAGE_ID = 'mine';

definePageConfig({});

export default function () {
  return (
    <Page pageId={PAGE_ID} tabView>
      我的
      <CustomTabbar />
    </Page>
  );
}
