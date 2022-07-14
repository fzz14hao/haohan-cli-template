// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取数据 GET /base/api/SysDictData/GetList */
export async function SysDictDataGetList(options?: { [key: string]: any }) {
  return request<API.SysDictTypeDtoListApiResult>('/base/api/SysDictData/GetList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取数据 GET /base/api/SysDictData/GetByDictTypeCode */
export async function SysDictDataGetByDictTypeCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetByDictTypeCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.SysDictTypeDtoApiResult>('/base/api/SysDictData/GetByDictTypeCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取数据 GET /base/api/SysDictData/GetByDictTypeId */
export async function SysDictDataGetByDictTypeId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetByDictTypeIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SysDictTypeDtoApiResult>('/base/api/SysDictData/GetByDictTypeId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取数据 GET /base/api/SysDictData/GetDictDataByCode */
export async function SysDictDataGetDictDataByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetDictDataByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.SysDictDataDtoApiResult>('/base/api/SysDictData/GetDictDataByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据项Id获取数据 GET /base/api/SysDictData/GetDictDataById */
export async function SysDictDataGetDictDataById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetDictDataByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SysDictDataDtoApiResult>('/base/api/SysDictData/GetDictDataById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存数据 POST /base/api/SysDictData/Save */
export async function SysDictDataSave(body: API.SysDictTypeDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/SysDictData/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除分类数据 POST /base/api/SysDictData/DeleteDictType */
export async function SysDictDataDeleteDictType(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/SysDictData/DeleteDictType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除项数据 POST /base/api/SysDictData/DeleteDictData */
export async function SysDictDataDeleteDictData(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/SysDictData/DeleteDictData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
