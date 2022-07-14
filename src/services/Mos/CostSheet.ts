// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/CostSheet/GetPageListByParm */
export async function CostSheetGetPageListByParm(
  body: API.CostSheetQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostSheetListApiResult>('/mos/api/CostSheet/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询款式分页数据 POST /mos/api/CostSheet/GetStylePageListByParm */
export async function CostSheetGetStylePageListByParm(
  body: API.CostShetGetStyleParamDto,
  options?: { [key: string]: any },
) {
  return request<API.CostShetGetStyleListDtoListApiResult>(
    '/mos/api/CostSheet/GetStylePageListByParm',
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

/** 根据Id获取详情 GET /mos/api/CostSheet/GetById */
export async function CostSheetGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSheetGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostSheetApiResult>('/mos/api/CostSheet/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/CostSheet/Save */
export async function CostSheetSave(body: API.MOSCostSheet, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/CostSheet/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 计算成本 POST /mos/api/CostSheet/${param0}/Calculate */
export async function CostSheetCalculate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSheetCalculateParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.StringApiResult>(`/mos/api/CostSheet/${param0}/Calculate`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/CostSheet/Delete */
export async function CostSheetDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSheetDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/CostSheet/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 激活标准成本 POST /mos/api/CostSheet/Activate */
export async function CostSheetActivate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSheetActivateParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/CostSheet/Activate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消激活标准成本 POST /mos/api/CostSheet/DeActivate */
export async function CostSheetDeActivate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSheetDeActivateParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/CostSheet/DeActivate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
