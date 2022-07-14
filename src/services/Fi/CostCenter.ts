// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /fi/api/CostCenter/GetListPage */
export async function CostCenterGetListPage(
  body: API.CostCenterCondition,
  options?: { [key: string]: any },
) {
  return request<API.CostCenterListApiResult>('/fi/api/CostCenter/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加或更新成本中心 POST /fi/api/CostCenter */
export async function CostCenterAddOrUpdate(
  body: API.CostCenter,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/CostCenter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取成本中心详情 GET /fi/api/CostCenter/${param0} */
export async function CostCenterGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostCenterGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CostCenterApiResult>(`/fi/api/CostCenter/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除成本中心数据 DELETE /fi/api/CostCenter/${param0} */
export async function CostCenterDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostCenterDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/fi/api/CostCenter/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取成本中心详情 GET /fi/api/CostCenter/GetByCode */
export async function CostCenterGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostCenterGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.CostCenterApiResult>('/fi/api/CostCenter/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
