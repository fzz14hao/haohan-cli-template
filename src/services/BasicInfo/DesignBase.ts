// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/DesignBase/GetAll */
export async function DesignBaseGetAll(options?: { [key: string]: any }) {
  return request<API.DesignBaseDtoListApiResult>('/base/api/DesignBase/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/DesignBase/GetPageListByParm */
export async function DesignBaseGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DesignBaseDtoListApiResult>('/base/api/DesignBase/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/DesignBase/GetListByParm */
export async function DesignBaseGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DesignBaseDtoListApiResult>('/base/api/DesignBase/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/DesignBase/Add */
export async function DesignBaseAdd(body: API.DesignBaseDto, options?: { [key: string]: any }) {
  return request<API.DesignBaseDtoApiResult>('/base/api/DesignBase/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /base/api/DesignBase/Update */
export async function DesignBaseUpdate(body: API.DesignBaseDto, options?: { [key: string]: any }) {
  return request<API.DesignBaseDtoApiResult>('/base/api/DesignBase/Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/DesignBase/Delete */
export async function DesignBaseDelete(body: API.DesignBaseDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/DesignBase/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
