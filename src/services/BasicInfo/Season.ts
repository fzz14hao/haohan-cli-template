// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/Season/GetPageListByParm */
export async function SeasonGetPageListByParm(
  body: API.SeasonQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SeasonDtoListApiResult>('/base/api/Season/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询（不分页） POST /base/api/Season/GetListByParam */
export async function SeasonGetListByParam(
  body: API.SeasonQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SeasonDtoListApiResult>('/base/api/Season/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取全部的季节数据 GET /base/api/Season/GetAll */
export async function SeasonGetAll(options?: { [key: string]: any }) {
  return request<API.SeasonDtoListApiResult>('/base/api/Season/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 【批量】根据编码获取季节数据 POST /base/api/Season/GetByCodes */
export async function SeasonGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.SeasonDtoListApiResult>('/base/api/Season/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 / 更新 POST /base/api/Season/AddOrUpdate */
export async function SeasonAddOrUpdate(body: API.SeasonDto, options?: { [key: string]: any }) {
  return request<API.SeasonDtoApiResult>('/base/api/Season/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
