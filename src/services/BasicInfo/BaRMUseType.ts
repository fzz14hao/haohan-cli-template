// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据 id 获取详情 GET /base/api/BaRMUseType/GetById/${param0} */
export async function BaRMUseTypeGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaRMUseTypeGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaRMUseTypeDtoApiResult>(`/base/api/BaRMUseType/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前用户的默认初始值(新增时使用） GET /base/api/BaRMUseType/GetDefault */
export async function BaRMUseTypeGetDefault(options?: { [key: string]: any }) {
  return request<API.BaRMUseTypeDtoApiResult>('/base/api/BaRMUseType/GetDefault', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询列表 POST /base/api/BaRMUseType/GetListByParm */
export async function BaRMUseTypeGetListByParm(
  body: API.BaRMUseTypeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaRMUseTypeDtoListApiResult>('/base/api/BaRMUseType/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/BaRMUseType/GetPageListByParm */
export async function BaRMUseTypeGetPageListByParm(
  body: API.BaRMUseTypeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaRMUseTypeDtoListApiResult>('/base/api/BaRMUseType/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 / 更新原因 POST /base/api/BaRMUseType/Save */
export async function BaRMUseTypeSave(body: API.BaRMUseTypeDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/BaRMUseType/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /base/api/BaRMUseType/Delete */
export async function BaRMUseTypeDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaRMUseTypeDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaRMUseType/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
