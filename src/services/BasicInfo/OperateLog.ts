// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 记录日志 POST /base/api/OperateLog */
export async function OperateLogCreate(body: API.OperateLogDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/OperateLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 entity Id 获取日志列表 GET /base/api/OperateLog/GetByEntityId */
export async function OperateLogGetByEntityId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.OperateLogGetByEntityIdParams,
  options?: { [key: string]: any },
) {
  return request<API.OperateLogViewDtoListApiResult>('/base/api/OperateLog/GetByEntityId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/OperateLog/GetListByParam */
export async function OperateLogGetListByParam(
  body: API.OperateLogQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.OperateLogViewDtoListApiResult>('/base/api/OperateLog/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/OperateLog/GetPageListByParm */
export async function OperateLogGetPageListByParm(
  body: API.OperateLogQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.OperateLogViewDtoListApiResult>('/base/api/OperateLog/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
