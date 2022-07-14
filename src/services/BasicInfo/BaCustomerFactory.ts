// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据 id 获取详情 GET /base/api/BaCustomerFactory/GetById/${param0} */
export async function BaCustomerFactoryGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerFactoryGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaCustomerFactoryDtoApiResult>(
    `/base/api/BaCustomerFactory/GetById/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 根据条件查询 POST /base/api/BaCustomerFactory/GetListByParam */
export async function BaCustomerFactoryGetListByParam(
  body: API.BaCustomerFactoryQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerFactoryDtoListApiResult>(
    '/base/api/BaCustomerFactory/GetListByParam',
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

/** 根据条件查询分页数据 POST /base/api/BaCustomerFactory/GetPageListByParm */
export async function BaCustomerFactoryGetPageListByParm(
  body: API.BaCustomerFactoryQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerFactoryDtoListApiResult>(
    '/base/api/BaCustomerFactory/GetPageListByParm',
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

/** 新增 / 更新 POST /base/api/BaCustomerFactory/Save */
export async function BaCustomerFactorySave(
  body: API.BaCustomerFactoryDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/BaCustomerFactory/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除原因 DELETE /base/api/BaCustomerFactory/Delete */
export async function BaCustomerFactoryDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerFactoryDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaCustomerFactory/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
