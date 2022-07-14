// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/CostTemplet/GetPageListByParm */
export async function CostTempletGetPageListByParm(
  body: API.CostTempletQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostTempletListApiResult>('/mos/api/CostTemplet/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/CostTemplet/GetById */
export async function CostTempletGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostTempletGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSCostTempletApiResult>('/mos/api/CostTemplet/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/CostTemplet/Save */
export async function CostTempletSave(body: API.MOSCostTemplet, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/CostTemplet/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/CostTemplet/Delete */
export async function CostTempletDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostTempletDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/CostTemplet/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
