// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回带参列表 POST /base/api/TableConfig/GetListByParam */
export async function TableConfigGetListByParam(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.SysTableConfigDtoListApiResult>('/base/api/TableConfig/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取默认配置列表 POST /base/api/TableConfig/GetListByTableId */
export async function TableConfigGetListByTableId(
  body: API.SysTableConfigQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.SysTableConfigDtoApiResult>('/base/api/TableConfig/GetListByTableId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增表格配置 POST /base/api/TableConfig/SysTableConfig_Add */
export async function TableConfigAdd(
  body: API.SysTableConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.SysTableConfigDtoApiResult>('/base/api/TableConfig/SysTableConfig_Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置表格配置 POST /base/api/TableConfig/SysTableConfig_Reset */
export async function TableConfigReset(
  body: API.SysTableConfigQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.SysTableConfigDtoApiResult>('/base/api/TableConfig/SysTableConfig_Reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
