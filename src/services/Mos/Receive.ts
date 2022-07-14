// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/Receive/GetPageListByParm */
export async function ReceiveGetPageListByParm(
  body: API.ReceiveQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MOSReceiveListApiResult>('/mos/api/Receive/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/Receive/GetById */
export async function ReceiveGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ReceiveGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MOSReceiveApiResult>('/mos/api/Receive/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/Receive/Save */
export async function ReceiveSave(body: API.MOSReceive, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/mos/api/Receive/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/Receive/Delete */
export async function ReceiveDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ReceiveDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/Receive/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据pickId Id获取收货明细 GET /mos/api/Receive/GetReceiveDetailByPickId */
export async function ReceiveGetReceiveDetailByPickId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ReceiveGetReceiveDetailByPickIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ReceiveDetailDtoListApiResult>('/mos/api/Receive/GetReceiveDetailByPickId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
