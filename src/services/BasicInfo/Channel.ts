// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回品牌商下的品 GET /base/api/Channel/GetBannerListByLoginName */
export async function ChannelGetBannerListByLoginName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ChannelGetBannerListByLoginNameParams,
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetBannerListByLoginName', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /base/api/Channel/GetAll */
export async function ChannelGetAll(options?: { [key: string]: any }) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 通过查询条件查询相应的客户信息列表数据 POST /base/api/Channel/GetListByParm */
export async function ChannelGetListByParm(
  body: API.QueryTermsParmDto[],
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过查询条件查询相应的客户信息列表数据 POST /base/api/Channel/GetListByParmByLoginName */
export async function ChannelGetListByParmByLoginName(
  body: API.QueryTermsParmDto[],
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetListByParmByLoginName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过查询条件查询相应的客户用户信息列表数据 POST /base/api/Channel/GetPageListByParm */
export async function ChannelGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前登录用户所有的客户信息 GET /base/api/Channel/GetChannelByLoginName */
export async function ChannelGetChannelByLoginName(options?: { [key: string]: any }) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetChannelByLoginName', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前登录用户所有的客户信息 GET /base/api/Channel/GetOrderChannelByLoginName */
export async function ChannelGetOrderChannelByLoginName(options?: { [key: string]: any }) {
  return request<API.ChannelDtoListApiResult>('/base/api/Channel/GetOrderChannelByLoginName', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增客户 POST /base/api/Channel/Add */
export async function ChannelAdd(body: API.ChannelDto, options?: { [key: string]: any }) {
  return request<API.ChannelDtoApiResult>('/base/api/Channel/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改客户信息 POST /base/api/Channel/Modify */
export async function ChannelModify(body: API.ChannelDto, options?: { [key: string]: any }) {
  return request<API.ChannelDtoApiResult>('/base/api/Channel/Modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除客户信息 POST /base/api/Channel/Delete */
export async function ChannelDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ChannelDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoApiResult>('/base/api/Channel/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID返回客户信息 GET /base/api/Channel/GetById */
export async function ChannelGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ChannelGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ChannelDtoApiResult>('/base/api/Channel/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID返回客户信息 GET /base/api/Channel/GetChannelAlias */
export async function ChannelGetChannelAlias(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ChannelGetChannelAliasParams,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/base/api/Channel/GetChannelAlias', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
