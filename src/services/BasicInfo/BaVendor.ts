// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分页 POST /base/api/BaVendor/GetListPage */
export async function BaVendorGetListPage(
  body: API.BaVendorQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorDtoListApiResult>('/base/api/BaVendor/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据集团Id获取分页 POST /base/api/BaVendor/${param0} */
export async function BaVendorGetListByGroup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaVendorGetListByGroupParams,
  body: API.BaVendorQueryCondition,
  options?: { [key: string]: any },
) {
  const { groupId: param0, ...queryParams } = params;
  return request<API.BaVendorDtoListApiResult>(`/base/api/BaVendor/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/BaVendor/GetListByParm */
export async function BaVendorGetListByParm(
  body: API.BaVendorQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorDtoListApiResult>('/base/api/BaVendor/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /base/api/BaVendor/${param0} */
export async function BaVendorGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaVendorGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaVendorDtoApiResult>(`/base/api/BaVendor/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前用户的默认初始值(新增时使用） GET /base/api/BaVendor/GetDefault */
export async function BaVendorGetDefault(options?: { [key: string]: any }) {
  return request<API.BaVendorDtoApiResult>('/base/api/BaVendor/GetDefault', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建/修改 POST /base/api/BaVendor */
export async function BaVendorCreate(body: API.BaVendorDto, options?: { [key: string]: any }) {
  return request<API.BaVendorDtoApiResult>('/base/api/BaVendor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交 POST /base/api/BaVendor/Apply */
export async function BaVendorApply(
  body: API.BaVendorBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorBatchOperateResponseDtoApiResult>('/base/api/BaVendor/Apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回 POST /base/api/BaVendor/Rejected */
export async function BaVendorRejected(
  body: API.BaVendorBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorBatchOperateResponseDtoApiResult>('/base/api/BaVendor/Rejected', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审批 POST /base/api/BaVendor/Approved */
export async function BaVendorApproved(
  body: API.BaVendorBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorBatchOperateResponseDtoApiResult>('/base/api/BaVendor/Approved', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /base/api/BaVendor/CancelApproved */
export async function BaVendorCancelApproved(
  body: API.BaVendorBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaVendorBatchOperateResponseDtoApiResult>(
    '/base/api/BaVendor/CancelApproved',
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
