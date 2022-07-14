// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录/验证 POST /user/api/Account/Token */
export async function AccountToken(body: API.UserLoginDto, options?: { [key: string]: any }) {
  return request<any>('/user/api/Account/Token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取个人信息 GET /user/api/Account/GetUserProfile */
export async function AccountGetUserProfile(options?: { [key: string]: any }) {
  return request<API.UserNewProfileDtoApiResult>('/user/api/Account/GetUserProfile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户菜单 GET /user/api/Account/GetUserMenus */
export async function AccountGetUserMenus(options?: { [key: string]: any }) {
  return request<API.MenuDtoListApiResult>('/user/api/Account/GetUserMenus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 改变当前集团 POST /user/api/Account/ChangeGroup/${param0} */
export async function AccountChangeGroup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AccountChangeGroupParams,
  options?: { [key: string]: any },
) {
  const { groupId: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Account/ChangeGroup/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户所在功能模块APPID对应的菜单 GET /user/api/Account/GetUserAppMenus */
export async function AccountGetUserAppMenus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AccountGetUserAppMenusParams,
  options?: { [key: string]: any },
) {
  return request<API.MenuDtoListApiResult>('/user/api/Account/GetUserAppMenus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 注册 POST /user/api/Account/Register */
export async function AccountRegister(body: API.UserRegisterDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/user/api/Account/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重设密码 POST /user/api/Account/ForgetPW */
export async function AccountForgetPW(
  body: API.UpdatePassWordDto,
  options?: { [key: string]: any },
) {
  return request<API.ApiResult>('/user/api/Account/ForgetPW', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证账号是否存在 POST /user/api/Account/${param0}/verify */
export async function AccountExistAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AccountExistAccountParams,
  options?: { [key: string]: any },
) {
  const { account: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Account/${param0}/verify`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
