// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据 id 获取详情 GET /base/api/BaCustomerFactorySetting/GetById/${param0} */
export async function BaCustomerFactorySettingGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerFactorySettingGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaCustomerFactorySettingDtoApiResult>(
    `/base/api/BaCustomerFactorySetting/GetById/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 根据条件查询 POST /base/api/BaCustomerFactorySetting/GetListByParam */
export async function BaCustomerFactorySettingGetListByParam(
  body: API.BaCustomerFactorySettingQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerFactorySettingDtoListApiResult>(
    '/base/api/BaCustomerFactorySetting/GetListByParam',
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

/** 根据条件查询分页数据 POST /base/api/BaCustomerFactorySetting/GetPageListByParm */
export async function BaCustomerFactorySettingGetPageListByParm(
  body: API.BaCustomerFactorySettingQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerFactorySettingDtoListApiResult>(
    '/base/api/BaCustomerFactorySetting/GetPageListByParm',
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

/** 新增 / 更新 POST /base/api/BaCustomerFactorySetting/Save */
export async function BaCustomerFactorySettingSave(
  body: API.BaCustomerFactorySettingDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/BaCustomerFactorySetting/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除原因 DELETE /base/api/BaCustomerFactorySetting/Delete */
export async function BaCustomerFactorySettingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerFactorySettingDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaCustomerFactorySetting/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
