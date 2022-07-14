// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /fi/api/BusinessArea/GetListPage */
export async function BusinessAreaGetListPage(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.BusinessAreaListApiResult>('/fi/api/BusinessArea/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加或更新 POST /fi/api/BusinessArea */
export async function BusinessAreaAddOrUpdate(
  body: API.BusinessArea,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/BusinessArea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /fi/api/BusinessArea/${param0} */
export async function BusinessAreaGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BusinessAreaGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BusinessAreaApiResult>(`/fi/api/BusinessArea/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除成数据 DELETE /fi/api/BusinessArea/Delete */
export async function BusinessAreaDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BusinessAreaDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/BusinessArea/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
