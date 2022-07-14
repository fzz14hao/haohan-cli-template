// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 通过code获取微信用户管理信息 POST /user/api/WeixinUser/GetWeixinUserManageByCode */
export async function WeixinUserGetWeixinUserManageByCode(
  body: API.GetWeixinUserManageByCodeRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.WeixinUserManageDtoApiResult>(
    '/user/api/WeixinUser/GetWeixinUserManageByCode',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取微信用户管理信息（用于刷新）GetWeixinUserManage GET /user/api/WeixinUser/${param0}/${param1} */
export async function WeixinUserGetWeixinUserManage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinUserGetWeixinUserManageParams,
  options?: { [key: string]: any },
) {
  const { weixinUserId: param0, platform: param1, ...queryParams } = params;
  return request<API.WeixinUserManageDtoApiResult>(`/user/api/WeixinUser/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增微信用户管理信息 POST /user/api/WeixinUser/AddWeixinUserManage */
export async function WeixinUserAddWeixinUserManage(
  body: API.AddWeixinUserManageRequestVo,
  options?: { [key: string]: any },
) {
  return request<API.WeixinUserManageDtoApiResult>('/user/api/WeixinUser/AddWeixinUserManage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信公众号票据 GET /user/api/WeixinUser/GetAccessToken */
export async function WeixinUserGetAccessToken(options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/user/api/WeixinUser/GetAccessToken', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 微信用户列表 POST /user/api/WeixinUser/GetWeixinUserListByParam */
export async function WeixinUserGetWeixinUserListByParam(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.WeixinUserListApiResult>('/user/api/WeixinUser/GetWeixinUserListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 微信用户管理列表 POST /user/api/WeixinUser/GetWeixinUserManageListByParam */
export async function WeixinUserGetWeixinUserManageListByParam(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.WeixinUserManageListDtoListApiResult>(
    '/user/api/WeixinUser/GetWeixinUserManageListByParam',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取微信用户管理详情 GET /user/api/WeixinUser/GetWeixinUserManageDetail */
export async function WeixinUserGetWeixinUserManageDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WeixinUserGetWeixinUserManageDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.WeixinUserManageDetailDtoApiResult>(
    '/user/api/WeixinUser/GetWeixinUserManageDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改微信用户管理信息 POST /user/api/WeixinUser/UpdateWeixinUserManage */
export async function WeixinUserUpdateWeixinUserManage(
  body: API.SaveWeixinUserManageDto,
  options?: { [key: string]: any },
) {
  return request<API.ApiResult>('/user/api/WeixinUser/UpdateWeixinUserManage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 绑定微信 POST /user/api/WeixinUser/BindWx */
export async function WeixinUserBindWx(body: API.BindWxRequest, options?: { [key: string]: any }) {
  return request<API.WeixinUserManageDtoApiResult>('/user/api/WeixinUser/BindWx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
