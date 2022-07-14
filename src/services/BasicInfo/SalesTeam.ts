// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/SalesTeam/GetAll */
export async function SalesTeamGetAll(options?: { [key: string]: any }) {
  return request<API.SalesTeamDtoListApiResult>('/base/api/SalesTeam/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/SalesTeam/GetListByParm */
export async function SalesTeamGetListByParm(
  body: API.SalesTeamQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SalesTeamDtoListApiResult>('/base/api/SalesTeam/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/SalesTeam/GetPageListByParm */
export async function SalesTeamGetPageListByParm(
  body: API.SalesTeamQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SalesTeamDtoPageResultApiResult>('/base/api/SalesTeam/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取销售团队信息 GET /base/api/SalesTeam/GetById */
export async function SalesTeamGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SalesTeamGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SalesTeamDtoApiResult>('/base/api/SalesTeam/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增 POST /base/api/SalesTeam/Add */
export async function SalesTeamAdd(body: API.SalesTeamDto, options?: { [key: string]: any }) {
  return request<API.SalesTeamDtoApiResult>('/base/api/SalesTeam/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/SalesTeam/Update */
export async function SalesTeamUpdate(body: API.SalesTeamDto, options?: { [key: string]: any }) {
  return request<API.SalesTeamDtoApiResult>('/base/api/SalesTeam/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/SalesTeam/Delete */
export async function SalesTeamDelete(body: API.SalesTeamDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/SalesTeam/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取数据 POST /base/api/SalesTeam/GetByCodes */
export async function SalesTeamGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.SalesTeamDtoListApiResult>('/base/api/SalesTeam/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
