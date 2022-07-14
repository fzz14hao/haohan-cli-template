// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有【品牌商用户关联】列表数据 GET /base/api/BrandShopUser/GetList */
export async function BrandShopUserGetList(options?: { [key: string]: any }) {
  return request<API.BrandShopUserOutputDtoListApiResult>('/base/api/BrandShopUser/GetList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 返回带分页的【品牌商用户关联】数据
（支持多条件查询） POST /base/api/BrandShopUser/GetListPage */
export async function BrandShopUserGetListPage(
  body: API.BrandShopUserQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.BrandShopUserOutputDtoListApiResult>('/base/api/BrandShopUser/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增【品牌商用户关联】 POST /base/api/BrandShopUser/AddOrUpdate */
export async function BrandShopUserAddOrUpdate(
  body: API.BrandShopUserAddOrUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.ApiResult>('/base/api/BrandShopUser/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除【品牌商用户关联】 POST /base/api/BrandShopUser/DeleteBrandShopUser */
export async function BrandShopUserDeleteBrandShopUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BrandShopUserDeleteBrandShopUserParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResult>('/base/api/BrandShopUser/DeleteBrandShopUser', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
