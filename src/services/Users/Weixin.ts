// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 微信后台验证地址（使用Get），微信后台的“接口配置信息”的Url填写如：http://sdk.weixin.senparc.com/weixin GET /user/api/Weixin */
export async function WeixinGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinGetParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【异步方法】用户发送消息后，微信平台自动Post一个请求到这里，并等待响应XML。 POST /user/api/Weixin */
export async function WeixinPost(body: API.PostModel, options?: { [key: string]: any }) {
  return request<any>('/user/api/Weixin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信网站登录appid信息 GET /user/api/Weixin/WechatInfo */
export async function WeixinWeChatApp(options?: { [key: string]: any }) {
  return request<API.WeChatAccountDtoApiResult>('/user/api/Weixin/WechatInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 1.微信登录 GET /user/api/Weixin/Login */
export async function WeixinLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinLoginParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/Login', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 地址授权 GET /user/api/Weixin/Oauth */
export async function WeixinOauth(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinOauthParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/Oauth', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 2.微信用户授权后执行 GET /user/api/Weixin/LoginCallback */
export async function WeixinLoginCallback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinLoginCallbackParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/LoginCallback', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** pc端微信授权登陆 例如：http://yourdomain/index GET /user/api/Weixin/WxPcOAuthHHOrderExternal */
export async function WeixinWxPcOAuthHHOrderExternal(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinWxPcOAuthHHOrderExternalParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/WxPcOAuthHHOrderExternal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** pc端微信授权登陆回调地址 GET /user/api/Weixin/WxPcOAuthHHOrderExternalBack */
export async function WeixinWxPcOAuthHHOrderExternalBack(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinWxPcOAuthHHOrderExternalBackParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/WxPcOAuthHHOrderExternalBack', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 3.绑定微信用户 POST /user/api/Weixin/BindWinXinUser */
export async function WeixinBindWinXinUser(
  body: API.WeiXinLoginDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/user/api/Weixin/BindWinXinUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 4.获取微信扫码后token GET /user/api/Weixin/wechatToken */
export async function WeixinWechatToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinWechatTokenParams,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/user/api/Weixin/wechatToken', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 1.微信绑定(已登录后扫码绑定微信)生成二维码 GET /user/api/Weixin/QRCode */
export async function WeixinBindWeiXin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinBindWeiXinParams,
  options?: { [key: string]: any },
) {
  return request<string>('/user/api/Weixin/QRCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 微信用户授权后执行 GET /user/api/Weixin/BindWeiXinInfo */
export async function WeixinBindWeiXinInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinBindWeiXinInfoParams,
  options?: { [key: string]: any },
) {
  return request<any>('/user/api/Weixin/BindWeiXinInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 微信小程序登录 GET /user/api/Weixin/${param0}/WeChatLogin */
export async function WeixinWeChatApplet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinWeChatAppletParams,
  options?: { [key: string]: any },
) {
  const { unionid: param0, ...queryParams } = params;
  return request<API.WeChatInfoMiniDtoApiResult>(`/user/api/Weixin/${param0}/WeChatLogin`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 微信登录时，验证用户手机号是否存在
存在则绑定，不存在则注册 GET /user/api/Weixin/CheckWeiXinLoginPhone */
export async function WeixinCheckWeiXinLoginPhone(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinCheckWeiXinLoginPhoneParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/Weixin/CheckWeiXinLoginPhone', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 检查用户信息 POST /user/api/Weixin/CheckWinXinUser */
export async function WeixinCheckWinXinUser(
  body: API.WeiXinLoginDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/user/api/Weixin/CheckWinXinUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增微信用户信息 POST /user/api/Weixin/AddWeixinUser */
export async function WeixinAddWeixinUser(
  body: API.AddWeixinUserDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/Weixin/AddWeixinUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
