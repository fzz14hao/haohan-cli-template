// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/CostItem/GetPageListByParm */
export async function CostItemGetPageListByParm(
  body: API.CostItemQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostItemListApiResult>('/mos/api/CostItem/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/CostItem/GetById */
export async function CostItemGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostItemGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostItemApiResult>('/mos/api/CostItem/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/CostItem/Save */
export async function CostItemSave(body: API.MOSCostItem, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/CostItem/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/CostItem/Delete */
export async function CostItemDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostItemDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/CostItem/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取分类列表 GET /mos/api/CostItem/GetCostCategories */
export async function CostItemGetCostCategories(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>('/mos/api/CostItem/GetCostCategories', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取Cal Source列表 GET /mos/api/CostItem/GetCostCalSources */
export async function CostItemGetCostCalSources(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>('/mos/api/CostItem/GetCostCalSources', {
    method: 'GET',
    ...(options || {}),
  });
}
