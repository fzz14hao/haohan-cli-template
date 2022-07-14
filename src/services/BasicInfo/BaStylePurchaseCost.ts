// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/BaStylePurchaseCost/GetListPage */
export async function BaStylePurchaseCostGetPageListByParm(
  body: API.BaStylePurchaseCostQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostDtoListApiResult>(
    '/base/api/BaStylePurchaseCost/GetListPage',
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

/** 查询列表 POST /base/api/BaStylePurchaseCost/GetListByParm */
export async function BaStylePurchaseCostGetListByParm(
  body: API.BaStylePurchaseCostQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostDtoListApiResult>(
    '/base/api/BaStylePurchaseCost/GetListByParm',
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

/** 根据编码获取数据 GET /base/api/BaStylePurchaseCost/${param0} */
export async function BaStylePurchaseCostGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStylePurchaseCostGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaStylePurchaseCostDtoApiResult>(`/base/api/BaStylePurchaseCost/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前生效的采购成本 POST /base/api/BaStylePurchaseCost/BatchGetActiveData */
export async function BaStylePurchaseCostBatchGetActiveData(
  body: API.BaStylePurchaseCostBatchGetActiveRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostDetailDtoListApiResult>(
    '/base/api/BaStylePurchaseCost/BatchGetActiveData',
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

/** 新增或者更新信息 POST /base/api/BaStylePurchaseCost/Save */
export async function BaStylePurchaseCostSave(
  body: API.BaStylePurchaseCostDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaStylePurchaseCost/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交 POST /base/api/BaStylePurchaseCost/Apply */
export async function BaStylePurchaseCostApply(
  body: API.BaStylePurchaseCostBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostBatchOperateResponseDtoApiResult>(
    '/base/api/BaStylePurchaseCost/Apply',
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

/** 驳回 POST /base/api/BaStylePurchaseCost/Rejected */
export async function BaStylePurchaseCostRejected(
  body: API.BaStylePurchaseCostBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostBatchOperateResponseDtoApiResult>(
    '/base/api/BaStylePurchaseCost/Rejected',
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

/** 审批 POST /base/api/BaStylePurchaseCost/Approved */
export async function BaStylePurchaseCostApproved(
  body: API.BaStylePurchaseCostBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostBatchOperateResponseDtoApiResult>(
    '/base/api/BaStylePurchaseCost/Approved',
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

/** 撤审批 POST /base/api/BaStylePurchaseCost/CancelApproved */
export async function BaStylePurchaseCostCancelApproved(
  body: API.BaStylePurchaseCostBatchUpdateStatusRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostBatchOperateResponseDtoApiResult>(
    '/base/api/BaStylePurchaseCost/CancelApproved',
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

/** 根据工厂获取第一个供应商的采购成本 POST /base/api/BaStylePurchaseCost/GetFactoryPurchaseCostList */
export async function BaStylePurchaseCostGetFactoryPurchaseCostList(
  body: API.BaStylePurchaseCostRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStylePurchaseCostReturnDtoApiResult>(
    '/base/api/BaStylePurchaseCost/GetFactoryPurchaseCostList',
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
