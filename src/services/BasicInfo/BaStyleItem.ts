// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/BaStyleItem/GetListPage */
export async function BaStyleItemGetPageListByParm(
  body: API.StyleItemCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleItemDtoListApiResult>('/base/api/BaStyleItem/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询列表 POST /base/api/BaStyleItem/GetListByParm */
export async function BaStyleItemGetListByParm(
  body: API.StyleItemCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleItemDtoListApiResult>('/base/api/BaStyleItem/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据编码获取数据 GET /base/api/BaStyleItem/${param0} */
export async function BaStyleItemGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleItemGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaStyleItemDtoApiResult>(`/base/api/BaStyleItem/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据编码获取数据 GET /base/api/BaStyleItem/${param0}/items */
export async function BaStyleItemGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleItemGetByCodeParams,
  options?: { [key: string]: any },
) {
  const { styleCode: param0, ...queryParams } = params;
  return request<API.BaStyleItemDtoListApiResult>(`/base/api/BaStyleItem/${param0}/items`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
