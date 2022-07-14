// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /base/api/BaCustomerScheme/GetPageListByParm */
export async function BaCustomerSchemeGetPageListByParm(
  body: API.BaFactoryOrderSchemeCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaFactoryOrderSchemeDtoListApiResult>(
    '/base/api/BaCustomerScheme/GetPageListByParm',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 根据条件查询数据 POST /base/api/BaCustomerScheme/GetListByParm */
export async function BaCustomerSchemeGetListByParm(
  body: API.BaFactoryOrderSchemeCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaFactoryOrderSchemeDtoListApiResult>(
    '/base/api/BaCustomerScheme/GetListByParm',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 根据id查询数据 GET /base/api/BaCustomerScheme/GetById */
export async function BaCustomerSchemeGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerSchemeGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaFactoryOrderSchemeDtoApiResult>('/base/api/BaCustomerScheme/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或添加 POST /base/api/BaCustomerScheme/AddOrUpdate */
export async function BaCustomerSchemeAddOrUpdate(
  body: API.BaFactoryOrderSchemeDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/BaCustomerScheme/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id删除 GET /base/api/BaCustomerScheme/Delete */
export async function BaCustomerSchemeDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerSchemeDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaCustomerScheme/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
