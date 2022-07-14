// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 通过查询条件查询相应的客户仓库列表数据 POST /base/api/CustWH/GetPageListByParm */
export async function CustWHGetPageListByParm(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.CustWHDtoListApiResult>('/base/api/CustWH/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询所有的客户仓库列表 GET /base/api/CustWH/GetAll */
export async function CustWHGetAll(options?: { [key: string]: any }) {
  return request<API.CustWHDtoListApiResult>('/base/api/CustWH/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 添加客户仓库记录 POST /base/api/CustWH/Add */
export async function CustWHAdd(body: API.CustWHDto, options?: { [key: string]: any }) {
  return request<API.CustWHDtoApiResult>('/base/api/CustWH/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改客户仓库信息 POST /base/api/CustWH/Modify */
export async function CustWHModify(body: API.CustWHDto, options?: { [key: string]: any }) {
  return request<API.CustWHDtoApiResult>('/base/api/CustWH/Modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除客户仓库信息 POST /base/api/CustWH/Delete */
export async function CustWHDelete(body: API.CustWHDto, options?: { [key: string]: any }) {
  return request<API.CustWHDtoApiResult>('/base/api/CustWH/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
