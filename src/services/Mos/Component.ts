// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/Component/GetPageListByParm */
export async function ComponentGetPageListByParm(
  body: API.CompoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoListApiResult>('/mos/api/Component/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/Component/GetById */
export async function ComponentGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ComponentGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoApiResult>('/mos/api/Component/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /mos/api/Component/GetListByParm */
export async function ComponentGetListByParm(
  body: API.CompoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoListApiResult>('/mos/api/Component/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /mos/api/Component/AddOrUpdate */
export async function ComponentAddOrUpdate(
  body: API.ComponentDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoApiResult>('/mos/api/Component/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/Component/Delete */
export async function ComponentDelete(body: API.ComponentDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/Component/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据款型ID获取数据 GET /mos/api/Component/GetListByStyleId */
export async function ComponentGetListByStyleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ComponentGetListByStyleIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoListApiResult>('/mos/api/Component/GetListByStyleId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据编码获取数据 GET /mos/api/Component/GetByCode */
export async function ComponentGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ComponentGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoApiResult>('/mos/api/Component/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取部件数据 POST /mos/api/Component/GetCompListByParam */
export async function ComponentGetCompListByParam(
  body: API.CompoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDtoListApiResult>('/mos/api/Component/GetCompListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
