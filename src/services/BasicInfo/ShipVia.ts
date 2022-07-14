// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/ShipVia/GetAll */
export async function ShipViaGetAll(options?: { [key: string]: any }) {
  return request<API.ShipViaDtoListApiResult>('/base/api/ShipVia/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/ShipVia/GetPageListByParm */
export async function ShipViaGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ShipViaDtoListApiResult>('/base/api/ShipVia/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/ShipVia/GetById */
export async function ShipViaGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ShipViaGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ShipViaDtoApiResult>('/base/api/ShipVia/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/ShipVia/GetListByParm */
export async function ShipViaGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ShipViaDtoListApiResult>('/base/api/ShipVia/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/ShipVia/AddOrUpdate */
export async function ShipViaAddOrUpdate(body: API.ShipViaDto, options?: { [key: string]: any }) {
  return request<API.ShipViaDtoApiResult>('/base/api/ShipVia/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/ShipVia/Delete */
export async function ShipViaDelete(body: API.ShipViaDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/ShipVia/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/ShipVia/GetByCodes */
export async function ShipViaGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.ShipViaDtoListApiResult>('/base/api/ShipVia/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
