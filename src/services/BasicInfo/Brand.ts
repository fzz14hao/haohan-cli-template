// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增用户信息 GET /base/api/Brand/test */
export async function BrandTest(options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/Brand/test', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 返回品牌信息 GET /base/api/Brand/GetAll */
export async function BrandGetAll(options?: { [key: string]: any }) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 返回品牌商下的品牌信息 GET /base/api/Brand/GetModelByBrandShopId */
export async function BrandGetModelByBrandShopId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BrandGetModelByBrandShopIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/GetModelByBrandShopId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 返回品牌信息 POST /base/api/Brand/SearchBrand */
export async function BrandSearchBrand(
  body: API.SearchBrandRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/SearchBrand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过查询条件查询相应的品牌信息列表数据 POST /base/api/Brand/GetListByParm */
export async function BrandGetListByParm(
  body: API.QueryTermsParmDto[],
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过查询条件查询相应的品牌商信息列表数据
(支持多条件查询) POST /base/api/Brand/GetPageListByParm */
export async function BrandGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增品牌 POST /base/api/Brand/Add */
export async function BrandAdd(body: API.BrandDto, options?: { [key: string]: any }) {
  return request<API.BrandDtoApiResult>('/base/api/Brand/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改品牌信息 POST /base/api/Brand/Modify */
export async function BrandModify(body: API.BrandDto, options?: { [key: string]: any }) {
  return request<API.BrandDtoApiResult>('/base/api/Brand/Modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除品牌信息 POST /base/api/Brand/Delete */
export async function BrandDelete(body: API.BrandDto, options?: { [key: string]: any }) {
  return request<API.BrandDtoApiResult>('/base/api/Brand/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取品牌信息 GET /base/api/Brand/GetById */
export async function BrandGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BrandGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoApiResult>('/base/api/Brand/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据品牌编号获取品牌信息 GET /base/api/Brand/GetByCode */
export async function BrandGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BrandGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoApiResult>('/base/api/Brand/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【新版】品牌查询（不分页） POST /base/api/Brand/GetListByParam */
export async function BrandGetListByParam(
  body: API.BrandQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BrandDtoListApiResult>('/base/api/Brand/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
