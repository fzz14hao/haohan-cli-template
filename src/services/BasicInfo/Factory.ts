// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据当前用户获取关联工厂编码数据 POST /base/api/Factory/GetFactoryCodePermission */
export async function FactoryGetFactoryCodePermission(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FactoryGetFactoryCodePermissionParams,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/base/api/Factory/GetFactoryCodePermission', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据当前用户获取关联工厂数据 POST /base/api/Factory/GetPageListByParmNoPermission */
export async function FactoryGetPageListByParmNoPermission(
  body: API.FactoryQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.FactoryDtoListApiResult>('/base/api/Factory/GetPageListByParmNoPermission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ftycode、平台Id获取工厂 POST /base/api/Factory/GetEntityByCode */
export async function FactoryGetEntityByCode(
  body: API.FactoryByFtyCodeRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.FactoryByFtyCodeResponeDtoApiResult>('/base/api/Factory/GetEntityByCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ftycode、平台Id获取工厂 POST /base/api/Factory/GetListByCode */
export async function FactoryGetListByCode(
  body: API.FactoryByFtyCodeRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.FactoryByFtyCodeResponeDtoListApiResult>('/base/api/Factory/GetListByCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取数据 GET /base/api/Factory/GetById */
export async function FactoryGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FactoryGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.FactoryDtoApiResult>('/base/api/Factory/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据编码获取数据 GET /base/api/Factory/GetByCode */
export async function FactoryGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FactoryGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.FactoryDtoApiResult>('/base/api/Factory/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/Factory/GetByCodes */
export async function FactoryGetByCodes(
  body: API.GetFatoryByCodesRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.FactoryDtoListApiResult>('/base/api/Factory/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据工厂Id批量获取数据 POST /base/api/Factory/GetFactoryByIds */
export async function FactoryGetFactoryByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.FactoryDtoListApiResult>('/base/api/Factory/GetFactoryByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
