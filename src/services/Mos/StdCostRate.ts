// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/StdCostRate/GetPageListByParm */
export async function StdCostRateGetPageListByParm(
  body: API.StdCostRateQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSStdCostRateListApiResult>('/mos/api/StdCostRate/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/StdCostRate/GetById */
export async function StdCostRateGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StdCostRateGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSStdCostRateApiResult>('/mos/api/StdCostRate/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/StdCostRate/Save */
export async function StdCostRateSave(body: API.MOSStdCostRate, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/StdCostRate/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/StdCostRate/Delete */
export async function StdCostRateDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StdCostRateDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/StdCostRate/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取成本类型列表 GET /mos/api/StdCostRate/GetCostTypeList */
export async function StdCostRateGetCostTypeList(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>('/mos/api/StdCostRate/GetCostTypeList', {
    method: 'GET',
    ...(options || {}),
  });
}
