// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/Waste/GetPageListByParm */
export async function WasteGetPageListByParm(
  body: API.WasteQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSWasteListApiResult>('/mos/api/Waste/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/Waste/GetById */
export async function WasteGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WasteGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSWasteApiResult>('/mos/api/Waste/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/Waste/Save */
export async function WasteSave(body: API.MOSWaste, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/Waste/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/Waste/Delete */
export async function WasteDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.WasteDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/Waste/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
