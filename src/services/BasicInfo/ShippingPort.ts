// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/ShippingPort/GetAll */
export async function ShippingPortGetAll(options?: { [key: string]: any }) {
  return request<API.ShippingPortDtoListApiResult>('/base/api/ShippingPort/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/ShippingPort/GetPageListByParm */
export async function ShippingPortGetPageListByParm(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.ShippingPortDtoListApiResult>('/base/api/ShippingPort/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/ShippingPort/GetById */
export async function ShippingPortGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ShippingPortGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ShippingPortDtoApiResult>('/base/api/ShippingPort/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/ShippingPort/GetListByParm */
export async function ShippingPortGetListByParm(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.ShippingPortDtoListApiResult>('/base/api/ShippingPort/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增或者修改 POST /base/api/ShippingPort/AddOrUpdate */
export async function ShippingPortAddOrUpdate(
  body: API.ShippingPortDto,
  options?: { [key: string]: any },
) {
  return request<API.ShippingPortDtoApiResult>('/base/api/ShippingPort/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/ShippingPort/Delete */
export async function ShippingPortDelete(
  body: API.ShippingPortDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/ShippingPort/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
