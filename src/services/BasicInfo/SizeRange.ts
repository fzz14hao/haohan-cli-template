// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/SizeRange/GetAll */
export async function SizeRangeGetAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SizeRangeGetAllParams,
  options?: { [key: string]: any },
) {
  return request<API.SizeRangeDtoListApiResult>('/base/api/SizeRange/GetAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/SizeRange/GetListByParam */
export async function SizeRangeGetListByParam(
  body: API.SizeRangeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SizeRangeDtoListApiResult>('/base/api/SizeRange/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/SizeRange/GetPageListByParam */
export async function SizeRangeGetPageListByParam(
  body: API.SizeRangeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SizeRangeDtoListApiResult>('/base/api/SizeRange/GetPageListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/SizeRange/GetById */
export async function SizeRangeGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SizeRangeGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SizeRangeDtoApiResult>('/base/api/SizeRange/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或编辑 POST /base/api/SizeRange/AddOrUpdate */
export async function SizeRangeAddOrUpdate(
  body: API.SizeRangeDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/SizeRange/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /base/api/SizeRange/BatchDelete */
export async function SizeRangeBatchDelete(
  body: API.SizeRangeBatchOperateRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.SizeRangeBatchOperateResponseDtoApiResult>('/base/api/SizeRange/BatchDelete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /base/api/SizeRange/CheckSizeRangeUsed */
export async function SizeRangeCheckSizeRangeUsed(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SizeRangeCheckSizeRangeUsedParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/SizeRange/CheckSizeRangeUsed', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
