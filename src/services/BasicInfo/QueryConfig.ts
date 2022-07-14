// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /base/api/QueryConfig/SysQueryConfig_Add */
export async function QueryConfigAdd(
  body: API.SysQueryConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.SysQueryConfigDtoApiResult>('/base/api/QueryConfig/SysQueryConfig_Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /base/api/QueryConfig/GetQueryListByUserId */
export async function QueryConfigGetQueryListByUserId(
  body: API.SysQueryConfigQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.SysQueryConfigDtoApiResult>('/base/api/QueryConfig/GetQueryListByUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
