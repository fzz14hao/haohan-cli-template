// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据 id 获取详情 GET /base/api/BaTaxCode/GetById/${param0} */
export async function BaTaxCodeGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaTaxCodeGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaTaxCodeDtoApiResult>(`/base/api/BaTaxCode/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /base/api/BaTaxCode/${param0} */
export async function BaTaxCodeGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaTaxCodeGetByCodeParams,
  options?: { [key: string]: any },
) {
  const { taxCode: param0, ...queryParams } = params;
  return request<API.BaTaxCodeDtoApiResult>(`/base/api/BaTaxCode/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/BaTaxCode/GetListByParam */
export async function BaTaxCodeGetListByParam(
  body: API.BaTaxCodeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaTaxCodeDtoListApiResult>('/base/api/BaTaxCode/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/BaTaxCode/GetPageListByParm */
export async function BaTaxCodeGetPageListByParm(
  body: API.BaTaxCodeQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaTaxCodeDtoListApiResult>('/base/api/BaTaxCode/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 / 更新 POST /base/api/BaTaxCode/Save */
export async function BaTaxCodeSave(body: API.BaTaxCodeDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/BaTaxCode/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
