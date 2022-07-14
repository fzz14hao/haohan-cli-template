// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/BaCustomer/GetAll */
export async function BaCustomerGetAll(options?: { [key: string]: any }) {
  return request<API.BaCustomerDtoListApiResult>('/base/api/BaCustomer/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /base/api/BaCustomer/${param0} */
export async function BaCustomerGetCurrentGroup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerGetCurrentGroupParams,
  body: API.BaCustomerQueryCondition,
  options?: { [key: string]: any },
) {
  const { groupId: param0, ...queryParams } = params;
  return request<API.BaCustomerDtoListApiResult>(`/base/api/BaCustomer/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/BaCustomer/GetListByParam */
export async function BaCustomerGetListByParam(
  body: API.BaCustomerQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerDtoListApiResult>('/base/api/BaCustomer/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/BaCustomer/GetPageListByParm */
export async function BaCustomerGetPageListByParm(
  body: API.BaCustomerQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerDtoListApiResult>('/base/api/BaCustomer/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/BaCustomer/GetById */
export async function BaCustomerGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerDtoApiResult>('/base/api/BaCustomer/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户的默认初始值(新增时使用） GET /base/api/BaCustomer/GetDefault */
export async function BaCustomerGetDefault(options?: { [key: string]: any }) {
  return request<API.BaCustomerDtoApiResult>('/base/api/BaCustomer/GetDefault', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据客户编码获取基本的客户信息 GET /base/api/BaCustomer/GetBaseByCode */
export async function BaCustomerGetBaseByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerGetBaseByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.CustomerBaseDtoApiResult>('/base/api/BaCustomer/GetBaseByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【批量】根据客户编码获取基本的客户信息 POST /base/api/BaCustomer/GetBaseByCodes */
export async function BaCustomerGetBaseByCodes(
  body: API.GetBaseByCodesRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.CustomerBaseDtoListApiResult>('/base/api/BaCustomer/GetBaseByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id批量获取客户信息 POST /base/api/BaCustomer/GetCustomerByIds */
export async function BaCustomerGetCustomerByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.BaCustomerDtoListApiResult>('/base/api/BaCustomer/GetCustomerByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增或编辑客户基础信息 POST /base/api/BaCustomer/AddOrUpdate */
export async function BaCustomerAddOrUpdate(
  body: API.BaCustomerDto,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerDtoApiResult>('/base/api/BaCustomer/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查 DCStore 是否在使用 POST /base/api/BaCustomer/CheckDCStoreUsed */
export async function BaCustomerCheckDCStoreUsed(
  body: API.CheckDCStoreUsedRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/base/api/BaCustomer/CheckDCStoreUsed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查 BillTo 是否在使用 POST /base/api/BaCustomer/CheckBillToUsed */
export async function BaCustomerCheckBillToUsed(
  body: API.CheckBillToUsedRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/base/api/BaCustomer/CheckBillToUsed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交 POST /base/api/BaCustomer/Apply */
export async function BaCustomerApply(
  body: API.BaCustomerBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerBatchOperateResponseDtoApiResult>('/base/api/BaCustomer/Apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回 POST /base/api/BaCustomer/Rejected */
export async function BaCustomerRejected(
  body: API.BaCustomerBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerBatchOperateResponseDtoApiResult>('/base/api/BaCustomer/Rejected', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审批 POST /base/api/BaCustomer/Approved */
export async function BaCustomerApproved(
  body: API.BaCustomerBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerBatchOperateResponseDtoApiResult>('/base/api/BaCustomer/Approved', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /base/api/BaCustomer/CancelApproved */
export async function BaCustomerCancelApproved(
  body: API.BaCustomerBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaCustomerBatchOperateResponseDtoApiResult>(
    '/base/api/BaCustomer/CancelApproved',
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
