// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/DeliveryTerm/GetAll */
export async function DeliveryTermGetAll(options?: { [key: string]: any }) {
  return request<API.DeliveryTermDtoListApiResult>('/base/api/DeliveryTerm/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/DeliveryTerm/GetPageListByParm */
export async function DeliveryTermGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DeliveryTermDtoListApiResult>('/base/api/DeliveryTerm/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/DeliveryTerm/GetListByParm */
export async function DeliveryTermGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DeliveryTermDtoListApiResult>('/base/api/DeliveryTerm/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/DeliveryTerm/Add */
export async function DeliveryTermAdd(body: API.DeliveryTermDto, options?: { [key: string]: any }) {
  return request<API.DeliveryTermDtoApiResult>('/base/api/DeliveryTerm/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/DeliveryTerm/Update */
export async function DeliveryTermUpdate(
  body: API.DeliveryTermDto,
  options?: { [key: string]: any },
) {
  return request<API.DeliveryTermDtoApiResult>('/base/api/DeliveryTerm/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/DeliveryTerm/Delete */
export async function DeliveryTermDelete(
  body: API.DeliveryTermDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/DeliveryTerm/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/DeliveryTerm/GetByCodes */
export async function DeliveryTermGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.DeliveryTermDtoListApiResult>('/base/api/DeliveryTerm/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
