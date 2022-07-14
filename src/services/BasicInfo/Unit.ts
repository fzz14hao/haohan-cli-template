// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页列表查询 POST /base/api/Unit/GetPageListByParm */
export async function UnitGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.UnitDtoListApiResult>('/base/api/Unit/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /base/api/Unit/GetListByParm */
export async function UnitGetListByParm(body: API.QueryParamDto, options?: { [key: string]: any }) {
  return request<API.UnitDtoListApiResult>('/base/api/Unit/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增或者保存 POST /base/api/Unit/AddOrUpdate */
export async function UnitAddOrUpdate(body: API.UnitDto, options?: { [key: string]: any }) {
  return request<API.UnitDtoApiResult>('/base/api/Unit/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看详情 GET /base/api/Unit/GetById */
export async function UnitGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UnitGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.UnitDtoApiResult>('/base/api/Unit/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看详情 GET /base/api/Unit/${param0} */
export async function UnitGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UnitGetByCodeParams,
  options?: { [key: string]: any },
) {
  const { code: param0, ...queryParams } = params;
  return request<API.UnitDtoApiResult>(`/base/api/Unit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 POST /base/api/Unit/Delete */
export async function UnitDelete(body: API.UnitDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/Unit/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
