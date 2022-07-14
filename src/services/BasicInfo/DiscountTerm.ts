// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取所有数据 GET /base/api/DiscountTerm/GetAll */
export async function DiscountTermGetAll(options?: { [key: string]: any }) {
  return request<API.DiscountTermDtoListApiResult>('/base/api/DiscountTerm/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询分页数据 POST /base/api/DiscountTerm/GetPageListByParm */
export async function DiscountTermGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DiscountTermDtoListApiResult>('/base/api/DiscountTerm/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/DiscountTerm/GetListByParm */
export async function DiscountTermGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DiscountTermDtoListApiResult>('/base/api/DiscountTerm/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/DiscountTerm/Add */
export async function DiscountTermAdd(body: API.DiscountTermDto, options?: { [key: string]: any }) {
  return request<API.DiscountTermDtoApiResult>('/base/api/DiscountTerm/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/DiscountTerm/Update */
export async function DiscountTermUpdate(
  body: API.DiscountTermDto,
  options?: { [key: string]: any },
) {
  return request<API.DiscountTermDtoApiResult>('/base/api/DiscountTerm/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/DiscountTerm/Delete */
export async function DiscountTermDelete(
  body: API.DiscountTermDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/DiscountTerm/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
