// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/BillNoRule/GetPageListByParam */
export async function BillNoRuleGetPageListByParam(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.BillNoRuleMappingDtoListApiResult>('/base/api/BillNoRule/GetPageListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /base/api/BillNoRule/GetListByParam */
export async function BillNoRuleGetListByParam(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.BillNoRuleMappingDtoListApiResult>('/base/api/BillNoRule/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 GET /base/api/BillNoRule/GetById */
export async function BillNoRuleGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BillNoRuleGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BillNoRuleMappingDtoApiResult>('/base/api/BillNoRule/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前单号 GET /base/api/BillNoRule/GetBillNo */
export async function BillNoRuleGetCurrentBillNo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BillNoRuleGetCurrentBillNoParams,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/BillNoRule/GetBillNo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取单据类型枚举 GET /base/api/BillNoRule/GetBillTypeList */
export async function BillNoRuleGetBillTypeList(options?: { [key: string]: any }) {
  return request<API.BillTypeDtoListApiResult>('/base/api/BillNoRule/GetBillTypeList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 保存 POST /base/api/BillNoRule/Save */
export async function BillNoRuleSave(
  body: API.BillNoRuleMappingDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/base/api/BillNoRule/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 GET /base/api/BillNoRule/Delete */
export async function BillNoRuleDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BillNoRuleDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BillNoRule/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
