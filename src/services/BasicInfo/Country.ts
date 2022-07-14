// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取国家列表 GET /base/api/Country/GetCountrList */
export async function CountryGetCountrList(options?: { [key: string]: any }) {
  return request<API.CountryDtoListApiResult>('/base/api/Country/GetCountrList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据
（支持多条件查询） POST /base/api/Country/GetPageListByParam */
export async function CountryGetPageListByParam(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.CountryDtoListApiResult>('/base/api/Country/GetPageListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id查询详情 GET /base/api/Country/GetById */
export async function CountryGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CountryGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.CountryDtoApiResult>('/base/api/Country/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加或者更新 POST /base/api/Country/AddOrUpdate */
export async function CountryAddOrUpdate(body: API.CountryDto, options?: { [key: string]: any }) {
  return request<API.CountryDtoApiResult>('/base/api/Country/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 GET /base/api/Country/Delete */
export async function CountryDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CountryDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/Country/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
