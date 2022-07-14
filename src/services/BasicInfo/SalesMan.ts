// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/SalesMan/GetAll */
export async function SalesManGetAll(options?: { [key: string]: any }) {
  return request<API.SalesManDtoListApiResult>('/base/api/SalesMan/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/SalesMan/GetListByParm */
export async function SalesManGetListByParm(
  body: API.SalesManQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SalesManDtoListApiResult>('/base/api/SalesMan/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/SalesMan/GetPageListByParm */
export async function SalesManGetPageListByParm(
  body: API.SalesManQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SalesManDtoPageResultApiResult>('/base/api/SalesMan/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据销售团队id查询销售人列表 GET /base/api/SalesMan/GetListById */
export async function SalesManGetListById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SalesManGetListByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SalesManDtoListApiResult>('/base/api/SalesMan/GetListById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增 POST /base/api/SalesMan/Add */
export async function SalesManAdd(body: API.SalesManDto, options?: { [key: string]: any }) {
  return request<API.SalesManDtoApiResult>('/base/api/SalesMan/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/SalesMan/Update */
export async function SalesManUpdate(body: API.SalesManDto, options?: { [key: string]: any }) {
  return request<API.SalesManDtoApiResult>('/base/api/SalesMan/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/SalesMan/Delete */
export async function SalesManDelete(body: API.SalesManDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/SalesMan/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/SalesMan/GetByCodes */
export async function SalesManGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.SalesManDtoListApiResult>('/base/api/SalesMan/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
