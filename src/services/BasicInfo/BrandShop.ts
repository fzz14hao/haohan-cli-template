// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 通过查询条件查询相应的品牌商信息列表数据
(支持多条件查询) POST /base/api/BrandShop/GetPageListByParm */
export async function BrandShopGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BrandShopDtoListApiResult>('/base/api/BrandShop/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据登录用户信息获取品牌商信息列表数据 POST /base/api/BrandShop/GetPageListByParmNoPermission */
export async function BrandShopGetPageListByParmNoPermission(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BrandShopDtoListApiResult>(
    '/base/api/BrandShop/GetPageListByParmNoPermission',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取品牌商信息 POST /base/api/BrandShop/GetById */
export async function BrandShopGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BrandShopGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BrandShopDtoApiResult>('/base/api/BrandShop/GetById', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增品牌商 POST /base/api/BrandShop/Add */
export async function BrandShopAdd(body: API.BrandShopDto, options?: { [key: string]: any }) {
  return request<API.BrandShopDtoApiResult>('/base/api/BrandShop/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改品牌商信息 POST /base/api/BrandShop/Modify */
export async function BrandShopModify(body: API.BrandShopDto, options?: { [key: string]: any }) {
  return request<API.BrandShopDtoApiResult>('/base/api/BrandShop/Modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除品牌商信息 POST /base/api/BrandShop/Delete */
export async function BrandShopDelete(body: API.BrandShopDto, options?: { [key: string]: any }) {
  return request<API.BrandShopDtoApiResult>('/base/api/BrandShop/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前登录用户所有的品牌商信息 GET /base/api/BrandShop/GetBrandShopByLoginName */
export async function BrandShopGetBrandShopByLoginName(options?: { [key: string]: any }) {
  return request<API.BrandShopDtoListApiResult>('/base/api/BrandShop/GetBrandShopByLoginName', {
    method: 'GET',
    ...(options || {}),
  });
}
