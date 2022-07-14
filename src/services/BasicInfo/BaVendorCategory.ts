// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分页 POST /base/api/BaVendorCategory/GetListPage */
export async function BaVendorCategoryGetListPage(
  body: API.BaVendorCategoryQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorCategoryDtoListApiResult>('/base/api/BaVendorCategory/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /base/api/BaVendorCategory/GetListByParm */
export async function BaVendorCategoryGetListByParm(
  body: API.BaVendorCategoryQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorCategoryDtoListApiResult>('/base/api/BaVendorCategory/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /base/api/BaVendorCategory/${param0} */
export async function BaVendorCategoryGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaVendorCategoryGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaVendorCategoryDtoApiResult>(`/base/api/BaVendorCategory/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /base/api/BaVendorCategory/${param0} */
export async function BaVendorCategoryDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaVendorCategoryDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/base/api/BaVendorCategory/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建/修改 POST /base/api/BaVendorCategory */
export async function BaVendorCategoryCreate(
  body: API.BaVendorCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorCategoryDtoApiResult>('/base/api/BaVendorCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
