import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { AccountGetUserProfile } from '@/services/Users/Account';
import { setLocale } from 'umi';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { storage, getLang, errorHandler, microActions } from '@haohan/utils';

import 'antd/dist/antd.less';
import '@/css/common.less';
import '@/css/globalBig.less';
import '@/css/globalDefault.less';
import '@/css/globalSmall.less';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const tokenstr = storage.getLocal('token') || '';
  const authHeader = { Authorization: `${tokenstr}` };

  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

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
  const fetchUserInfo = async () => {
    try {
      // const currentUser = await queryCurrentUser();
      const respdata = await AccountGetUserProfile({});
      if (respdata.statusCode === 1) {
        const userdata = respdata.data;
        const currentUser: API.CurrentUser = {
          name: userdata?.loginName,
          avatar: userdata?.avatar,
          userid: userdata?.id,
          email: '',
          signature: '',
          title: userdata?.displayName,
          group: '',
          tags: [],
          notifyCount: 0,
          unreadCount: 0,
          country: '',
          access: userdata?.loginName,
          geographic: {
            province: {},
            city: {},
          },
          address: '',
          phone: '',
          roleCodes: userdata?.roleCodes,
          permissionCodes: userdata?.permissionCodes,
          userType: userdata?.userType,
          status: userdata?.status,
          description: userdata?.description,
          clientId: userdata?.clientId,
        };
        storage.setSession('USER_PROFILE', respdata.data);
        return currentUser;
      }
      throw new Error('获取用户失败');
    } catch (error) {
      if (microActions.actions && microActions.actions.goLoginPage) {
        microActions.actions.goLoginPage();
      } else {
        history.push(loginPath);
      }
    }
    return undefined;
  };

  // 注册国际化
  const { zhCN, zhTW, enUS, viVN } = await getLang();
  const umiLocale = localStorage.getItem('umi_locale');
  i18next
    .use(LanguageDetector) // 嗅探当前浏览器语言
    .use(initReactI18next) // init i18next
    .init({
      // 引入资源文件
      resources: {
        'en-US': {
          translation: enUS,
        },
        'zh-CN': {
          translation: zhCN,
        },
        'zh-TW': {
          translation: zhTW,
        },
        'vi-VN': {
          translation: viVN,
        },
      },
      // 选择默认语言，选择内容为上述配置中的key，即en/zh
      fallbackLng: umiLocale || 'zh-CN',
      debug: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });

  if (umiLocale) {
    i18next.changeLanguage(umiLocale);
  }

  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  return {
    fetchUserInfo,
    settings: {},
  };
}
/**
 * 异常处理程序
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请求方法不被允许。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
 //-----English
    200: The server successfully returned the requested data. ',
    201: New or modified data is successful. ',
    202: A request has entered the background queue (asynchronous task). ',
    204: Data deleted successfully. ',
    400: 'There was an error in the request sent, and the server did not create or modify data. ',
    401: The user does not have permission (token, username, password error). ',
    403: The user is authorized, but access is forbidden. ',
    404: The request sent was for a record that did not exist. ',
    405: The request method is not allowed. ',
    406: The requested format is not available. ',
    410':
        'The requested resource is permanently deleted and will no longer be available. ',
    422: When creating an object, a validation error occurred. ',
    500: An error occurred on the server, please check the server. ',
    502: Gateway error. ',
    503: The service is unavailable. ',
    504: The gateway timed out. ',
 * @see https://beta-pro.ant.design/docs/request-cn
 */
export const request: RequestConfig = {
  errorHandler: errorHandler,
  requestInterceptors: [authHeaderInterceptor],
};

console.log(process.env);
console.log('是否在qiankun环境', window.__POWERED_BY_QIANKUN__);

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  console.log('initialState', initialState);
  return {
    // title: '浩汉智能平台', // 重载配置
    // 优先级比下面 rightRender 更高可以修改RightContent 内容
    rightContentRender: () => <RightContent />,
    // rightRender: (initState :any, setInitState:any) => {
    //   console.log("rightRender")
    //   return (<div style={{color:"white"}}>自定义</div>)
    // },
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        if (microActions.actions && microActions.actions.goLoginPage) {
          microActions.actions.goLoginPage();
        } else {
          history.push(loginPath);
        }
      }
    },

    // logout: ()=> {
    //    console.log("you logout !");
    // },
    links: isDev ? [] : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    props.onGlobalStateChange((state: any, prev: any) => {
      console.log('app=>state', state);
      if (state.token) {
        storage.setLocal('token', state.token);
      }

      // 切换语言
      if (state.lang !== prev.lang) {
        i18next.changeLanguage(state.lang);
        // 不刷新页面
        setLocale(state.lang, true);
      }
      // 如果token 跳转到登录页面
      // props.goLoginPage()
    }, true);

    if (props) {
      // 注入 actions 实例
      microActions.setActions(props);
    }
    console.log('app mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app unmount', props);
  },
};
