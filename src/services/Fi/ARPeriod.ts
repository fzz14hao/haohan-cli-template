// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /fi/api/ARPeriod/GetListPage */
export async function ARPeriodGetListPage(
  body: API.ARPeriodCondition,
  options?: { [key: string]: any },
) {
  return request<API.ARPeriodDtoListApiResult>('/fi/api/ARPeriod/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询 POST /fi/api/ARPeriod/GetList */
export async function ARPeriodGetList(
  body: API.ARPeriodCondition,
  options?: { [key: string]: any },
) {
  return request<API.ARPeriodDtoListApiResult>('/fi/api/ARPeriod/GetList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加或更新账期数据 POST /fi/api/ARPeriod */
export async function ARPeriodAddOrUpdate(body: API.ARPeriodDto, options?: { [key: string]: any }) {
  return request<API.ARPeriodDtoApiResult>('/fi/api/ARPeriod', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /fi/api/ARPeriod/${param0} */
export async function ARPeriodGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ARPeriodDtoApiResult>(`/fi/api/ARPeriod/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除仓库数据 DELETE /fi/api/ARPeriod/${param0} */
export async function ARPeriodDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/fi/api/ARPeriod/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 关闭当前账期 PUT /fi/api/ARPeriod/${param0}/close */
export async function ARPeriodClosePeriod(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodClosePeriodParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/fi/api/ARPeriod/${param0}/close`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 打开最后一个账期 PUT /fi/api/ARPeriod/${param0}/open */
export async function ARPeriodOpenPeriod(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodOpenPeriodParams,
  options?: { [key: string]: any },
) {
  const { factoryId: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/fi/api/ARPeriod/${param0}/open`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 当前激活的账期 PUT /fi/api/ARPeriod/${param0}/current */
export async function ARPeriodCurrentPeriod(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodCurrentPeriodParams,
  options?: { [key: string]: any },
) {
  const { factoryId: param0, ...queryParams } = params;
  return request<API.ARPeriodDtoApiResult>(`/fi/api/ARPeriod/${param0}/current`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 当前已激活的账期 PUT /fi/api/ARPeriod/${param0}/CurrentActivat */
export async function ARPeriodCurrentActivat(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodCurrentActivatParams,
  options?: { [key: string]: any },
) {
  const { factoryId: param0, ...queryParams } = params;
  return request<API.ARPeriodDtoApiResult>(`/fi/api/ARPeriod/${param0}/CurrentActivat`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取账期类型 GET /fi/api/ARPeriod/GetPeriodType */
export async function ARPeriodPeriodType(options?: { [key: string]: any }) {
  return request<API.SysDictTypeRtoApiResult>('/fi/api/ARPeriod/GetPeriodType', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /fi/api/ARPeriod/${param0}/${param1} */
export async function ARPeriodGetByFinancialDate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ARPeriodGetByFinancialDateParams,
  options?: { [key: string]: any },
) {
  const { factoryId: param0, financialDate: param1, ...queryParams } = params;
  return request<API.ARPeriodDtoApiResult>(`/fi/api/ARPeriod/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
