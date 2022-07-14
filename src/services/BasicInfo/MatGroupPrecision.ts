// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /base/api/MatGroupPrecision/GetListByParm */
export async function MatGroupPrecisionGetListByParm(
  body: API.MatGroupPrecisionCondition,
  options?: { [key: string]: any },
) {
  return request<API.MatGroupPrecisionListApiResult>('/base/api/MatGroupPrecision/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取明细 GET /base/api/MatGroupPrecision/${param0} */
export async function MatGroupPrecisionGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MatGroupPrecisionGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.MatGroupPrecisionApiResult>(`/base/api/MatGroupPrecision/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增或者更新 POST /base/api/MatGroupPrecision */
export async function MatGroupPrecisionAddOrUpdate(
  body: API.MatGroupPrecision,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/MatGroupPrecision', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /base/api/MatGroupPrecision/Delete */
export async function MatGroupPrecisionDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MatGroupPrecisionDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/MatGroupPrecision/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件查询/base/api/MatGroupPrecision/GetMatGroupPrecisionList POST /base/api/MatGroupPrecision/GetMatGroupPrecisionList */
export async function MatGroupPrecisionGetMatGroupPrecisionListByParm(
  body: API.MatGroupPrecisionCondition,
  options?: { [key: string]: any },
) {
  return request<API.MatGroupPrecisionListApiResult>(
    '/base/api/MatGroupPrecision/GetMatGroupPrecisionList',
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
