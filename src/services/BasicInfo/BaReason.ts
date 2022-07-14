// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据 id 获取原因 GET /base/api/BaReason/GetById/${param0} */
export async function BaReasonGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaReasonGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaReasonDtoApiResult>(`/base/api/BaReason/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前用户的默认初始值(新增时使用） GET /base/api/BaReason/GetDefault */
export async function BaReasonGetDefault(options?: { [key: string]: any }) {
  return request<API.BaReasonDtoApiResult>('/base/api/BaReason/GetDefault', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/BaReason/GetListByParam */
export async function BaReasonGetListByParam(
  body: API.BaReasonQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaReasonDtoListApiResult>('/base/api/BaReason/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/BaReason/GetPageListByParm */
export async function BaReasonGetPageListByParm(
  body: API.BaReasonQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaReasonDtoListApiResult>('/base/api/BaReason/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 / 更新原因 POST /base/api/BaReason/Save */
export async function BaReasonSave(body: API.BaReasonDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/BaReason/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除原因 DELETE /base/api/BaReason/Delete */
export async function BaReasonDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaReasonDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaReason/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
