import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import routes from '@/systemConfig/routes.json';
import routeI18next from '@/systemConfig/routeI18next.json';
import {
  hhI18next,
  commonQiankun,
  getCommonRequest,
  getCommonLayout,
  commonGetInitialState,
} from '@haohan/utils';

import 'antd/dist/antd.less';
import '@/css/common.less';
import '@/css/globalBig.less';
import '@/css/globalDefault.less';
import '@/css/globalSmall.less';

const PACHAGE = require('../package.json');

hhI18next.renderNode({ routes, platform: PACHAGE.platform });

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  return await commonGetInitialState();
}

export const request: RequestConfig = {
  ...getCommonRequest({ authHeaderProps: { routes, platform: PACHAGE.platform } }),
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  console.log('initialState', initialState);
  return {
    rightContentRender: () => <RightContent />,

    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },

    footerRender: () => <Footer />,

    ...getCommonLayout({
      layoutConfigProps: { initialState },
      ui: PACHAGE.name,
      routes,
      routeI18next,
      platform: PACHAGE.platform,
    }),
    ...initialState?.settings,
  };
};

// qiankun
export const qiankun = commonQiankun;
