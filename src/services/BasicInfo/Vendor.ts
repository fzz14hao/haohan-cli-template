// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/Vendor/GetAll */
export async function VendorGetAll(options?: { [key: string]: any }) {
  return request<API.VendorDtoListApiResult>('/base/api/Vendor/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/Vendor/GetPageListByParm */
export async function VendorGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.VendorDtoListApiResult>('/base/api/Vendor/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/Vendor/GetById */
export async function VendorGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.VendorGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.VendorDtoApiResult>('/base/api/Vendor/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/Vendor/GetListByParm */
export async function VendorGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.VendorDtoListApiResult>('/base/api/Vendor/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/Vendor/AddOrUpdate */
export async function VendorAddOrUpdate(body: API.VendorDto, options?: { [key: string]: any }) {
  return request<API.VendorDtoApiResult>('/base/api/Vendor/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/Vendor/Delete */
export async function VendorDelete(body: API.VendorDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/Vendor/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
