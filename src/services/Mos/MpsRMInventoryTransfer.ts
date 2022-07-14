// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件获取物料信息 POST /mos/api/MpsRMInventoryTransfer/GetRMByParam */
export async function MpsRMInventoryTransferGetRMByParam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsRMInventoryTransferGetRMByParamParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMInventoryTransferDtoApiResult>(
    '/mos/api/MpsRMInventoryTransfer/GetRMByParam',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询分配库存 POST /mos/api/MpsRMInventoryTransfer/GetAllocateStockByParam */
export async function MpsRMInventoryTransferGetAllocateStockByParam(
  body: API.MpsStockQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMWHStockDtoListApiResult>(
    '/mos/api/MpsRMInventoryTransfer/GetAllocateStockByParam',
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

/** 分配库存 POST /mos/api/MpsRMInventoryTransfer/AllocateInventory */
export async function MpsRMInventoryTransferAllocateInventory(
  body: API.MpsStockLockDto[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMInventoryTransfer/AllocateInventory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /mos/api/MpsRMInventoryTransfer/GetPageListByParm */
export async function MpsRMInventoryTransferGetPageListByParm(
  body: API.MpsRMInventoryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMInventoryTransferDtoListApiResult>(
    '/mos/api/MpsRMInventoryTransfer/GetPageListByParm',
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

/** 批量确认前获取仓库信息 POST /mos/api/MpsRMInventoryTransfer/GetWHListById */
export async function MpsRMInventoryTransferGetWHListById(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.MpsRMInventoryTransferDtoListApiResult>(
    '/mos/api/MpsRMInventoryTransfer/GetWHListById',
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

/** 审核 POST /mos/api/MpsRMInventoryTransfer/Approve */
export async function MpsRMInventoryTransferApprove(
  body: API.MpsInventoryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMInventoryTransfer/Approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消 POST /mos/api/MpsRMInventoryTransfer/Cancel */
export async function MpsRMInventoryTransferCancel(
  body: API.MpsInventoryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMInventoryTransfer/Cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 确认分配 POST /mos/api/MpsRMInventoryTransfer/Confirm */
export async function MpsRMInventoryTransferConfirm(
  body: API.MpsRMStockParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMInventoryTransfer/Confirm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据MPS查询转入转出记录 GET /mos/api/MpsRMInventoryTransfer/GetListByMpsId */
export async function MpsRMInventoryTransferGetListByMpsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsRMInventoryTransferGetListByMpsIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMInventoryTransferDtoListApiResult>(
    '/mos/api/MpsRMInventoryTransfer/GetListByMpsId',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
