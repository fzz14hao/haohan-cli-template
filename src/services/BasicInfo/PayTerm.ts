// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/PayTerm/GetAll */
export async function PayTermGetAll(options?: { [key: string]: any }) {
  return request<API.PayTermDtoListApiResult>('/base/api/PayTerm/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/PayTerm/GetPageListByParm */
export async function PayTermGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.PayTermDtoListApiResult>('/base/api/PayTerm/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/PayTerm/GetListByParm */
export async function PayTermGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.PayTermDtoListApiResult>('/base/api/PayTerm/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/PayTerm/Add */
export async function PayTermAdd(body: API.PayTermDto, options?: { [key: string]: any }) {
  return request<API.PayTermDtoApiResult>('/base/api/PayTerm/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/PayTerm/Update */
export async function PayTermUpdate(body: API.PayTermDto, options?: { [key: string]: any }) {
  return request<API.PayTermDtoApiResult>('/base/api/PayTerm/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/PayTerm/Delete */
export async function PayTermDelete(body: API.PayTermDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/PayTerm/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/PayTerm/GetByCodes */
export async function PayTermGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.PayTermDtoListApiResult>('/base/api/PayTerm/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
