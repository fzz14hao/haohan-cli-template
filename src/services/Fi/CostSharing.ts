// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据成本分摊条件查询 POST /fi/api/CostSharing/GetListPage */
export async function CostSharingGetListPage(
  body: API.CostExpenseCondition,
  options?: { [key: string]: any },
) {
  return request<API.CostSharingDtoListApiResult>('/fi/api/CostSharing/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询报工明细 POST /fi/api/CostSharing/GetDetail */
export async function CostSharingGetListByCostSharingDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSharingGetListByCostSharingDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.CostSharProdOrderCostDetailDtoListApiResult>('/fi/api/CostSharing/GetDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据报工记录查询报工明细 POST /fi/api/CostSharing/GetByProdOrderCostId */
export async function CostSharingGetByProdOrderCostId(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.CostSharProdOrderCostDetailDtoListApiResult>(
    '/fi/api/CostSharing/GetByProdOrderCostId',
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

/** 根据报工记录查询报工明细 POST /fi/api/CostSharing/GetByProdOrderId */
export async function CostSharingGetByProdOrderId(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.CostSharingDetailDtoListApiResult>('/fi/api/CostSharing/GetByProdOrderId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分摊 GET /fi/api/CostSharing/CostExpense */
export async function CostSharingCostExpense(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSharingCostExpenseParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/CostSharing/CostExpense', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消分摊 GET /fi/api/CostSharing/CancelExpense */
export async function CostSharingCancelCostExpense(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSharingCancelCostExpenseParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/CostSharing/CancelExpense', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加或更新成本分摊 POST /fi/api/CostSharing/SaveCostSharing */
export async function CostSharingSaveCostSharing(
  body: API.CostParamDto,
  options?: { [key: string]: any },
) {
  return request<API.CostSharingDtoApiResult>('/fi/api/CostSharing/SaveCostSharing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取成本分摊详情 GET /fi/api/CostSharing/${param0} */
export async function CostSharingGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSharingGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CostSharingDtoApiResult>(`/fi/api/CostSharing/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除成本分摊数据 DELETE /fi/api/CostSharing/Delete */
export async function CostSharingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CostSharingDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/fi/api/CostSharing/Delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
