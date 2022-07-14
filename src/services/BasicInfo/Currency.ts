// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 GET /base/api/Currency/GetCurrenciesNoPermission */
export async function CurrencyGetCurrenciesNoPermission(options?: { [key: string]: any }) {
  return request<API.CurrencyDtoListApiResult>('/base/api/Currency/GetCurrenciesNoPermission', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增或者更新 POST /base/api/Currency/AddOrUpdate */
export async function CurrencyAddOrUpdate(body: API.CurrencyDto, options?: { [key: string]: any }) {
  return request<API.CurrencyDtoApiResult>('/base/api/Currency/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询 GET /base/api/Currency/GetById */
export async function CurrencyGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CurrencyGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.CurrencyDtoApiResult>('/base/api/Currency/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据code查询 GET /base/api/Currency/GetByCode */
export async function CurrencyGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CurrencyGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.CurrencyDtoApiResult>('/base/api/Currency/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除 GET /base/api/Currency/Delete */
export async function CurrencyDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CurrencyDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/Currency/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
