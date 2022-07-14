// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/Department/GetAll */
export async function DepartmentGetAll(options?: { [key: string]: any }) {
  return request<API.DepartmentDtoListApiResult>('/base/api/Department/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/Department/GetPageListByParm */
export async function DepartmentGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoListApiResult>('/base/api/Department/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/Department/GetById */
export async function DepartmentGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoApiResult>('/base/api/Department/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/Department/GetByCode */
export async function DepartmentGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoApiResult>('/base/api/Department/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/Department/GetListByParm */
export async function DepartmentGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoListApiResult>('/base/api/Department/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /base/api/Department/AddOrUpdate */
export async function DepartmentAddOrUpdate(
  body: API.DepartmentDto,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoApiResult>('/base/api/Department/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/Department/Delete */
export async function DepartmentDelete(body: API.DepartmentDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/Department/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据工厂Id获取部门数据 GET /base/api/Department/GetListByFactory */
export async function DepartmentGetListByFactory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentGetListByFactoryParams,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentDtoListApiResult>('/base/api/Department/GetListByFactory', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Id获取部门数据 POST /base/api/Department/GetListByIds */
export async function DepartmentGetListByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.DepartmentDtoListApiResult>('/base/api/Department/GetListByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
