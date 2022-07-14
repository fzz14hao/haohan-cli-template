// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/MasterProdSchedule/GetPageListByParm */
export async function MasterProdScheduleGetPageListByParm(
  body: API.MpsQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MasterProdScheduleDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetPageListByParm',
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

/** 根据Id获取详情 GET /mos/api/MasterProdSchedule/GetById */
export async function MasterProdScheduleGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MasterProdScheduleDtoApiResult>('/mos/api/MasterProdSchedule/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /mos/api/MasterProdSchedule/GetListByParm */
export async function MasterProdScheduleGetListByParm(
  body: API.MpsQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MasterProdScheduleDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetListByParm',
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

/** 新增 POST /mos/api/MasterProdSchedule/AddOrUpdate */
export async function MasterProdScheduleAddOrUpdate(
  body: API.MasterProdScheduleDto,
  options?: { [key: string]: any },
) {
  return request<API.MasterProdScheduleDtoApiResult>('/mos/api/MasterProdSchedule/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/MasterProdSchedule/Delete */
export async function MasterProdScheduleDelete(
  body: API.MasterProdScheduleDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /mos/api/MasterProdSchedule/Check */
export async function MasterProdScheduleCheck(
  body: API.MPSCheckParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/Check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交审核 POST /mos/api/MasterProdSchedule/Submit */
export async function MasterProdScheduleSubmit(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/Submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回操作 POST /mos/api/MasterProdSchedule/Reject */
export async function MasterProdScheduleReject(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/Reject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核操作 POST /mos/api/MasterProdSchedule/Approve */
export async function MasterProdScheduleApprove(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/Approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 反审核操作 POST /mos/api/MasterProdSchedule/DeApprove */
export async function MasterProdScheduleDeApprove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleDeApproveParams,
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/DeApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 同步更新factoryorder数据 POST /mos/api/MasterProdSchedule/SynchronizationUpdateMps */
export async function MasterProdScheduleSynchronizationUpdateMps(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/MasterProdSchedule/SynchronizationUpdateMps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取生成的PR订单需求明细 2022/04/14 GET /mos/api/MasterProdSchedule/GetPROrderDemand */
export async function MasterProdScheduleGetPROrderDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetPROrderDemandParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMStatusDtoListApiResult>('/mos/api/MasterProdSchedule/GetPROrderDemand', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Id获取操作日志 GET /mos/api/MasterProdSchedule/GetOperationLogById */
export async function MasterProdScheduleGetOperationLogById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetOperationLogByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomOperationLogDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetOperationLogById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 跟据MPSID获取bom的总需求量 GET /mos/api/MasterProdSchedule/GetMpsTotalDemand */
export async function MasterProdScheduleGetMpsTotalDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetMpsTotalDemandParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMStatusDtoListApiResult>('/mos/api/MasterProdSchedule/GetMpsTotalDemand', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 确认生成pr订单 POST /mos/api/MasterProdSchedule/UpdateOrAddPROrder */
export async function MasterProdScheduleUpdateOrAddPROrder(
  body: API.PROrderDemandDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/MasterProdSchedule/UpdateOrAddPROrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据mpsId和itemskuid查询明细 GET /mos/api/MasterProdSchedule/GetMpsRMDemandDetail */
export async function MasterProdScheduleGetMpsRMDemandDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetMpsRMDemandDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMStatusDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetMpsRMDemandDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 更新mps物料需求 POST /mos/api/MasterProdSchedule/RefreshMpsRMDemandDetail */
export async function MasterProdScheduleRefreshMpsRMDemandDetail(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/MasterProdSchedule/RefreshMpsRMDemandDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新MPS明细 POST /mos/api/MasterProdSchedule/AddOrders */
export async function MasterProdScheduleAddOrders(
  body: API.MpsDetailUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/AddOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除明细 POST /mos/api/MasterProdSchedule/DeleteMpsDetail */
export async function MasterProdScheduleDeleteMpsDetail(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/DeleteMpsDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id列表获取报表打印数据 POST /mos/api/MasterProdSchedule/GetPrintListById */
export async function MasterProdScheduleGetPrintListById(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.MpsReportPrintDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetPrintListById',
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

/** 获取mps物料采购成本 GET /mos/api/MasterProdSchedule/GetMpsItemPurchaseCost */
export async function MasterProdScheduleGetMpsItemPurchaseCost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleGetMpsItemPurchaseCostParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsItemPurchaseCostDtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetMpsItemPurchaseCost',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取撤审原因列表 GET /mos/api/MasterProdSchedule/GetDeApproveReasonList */
export async function MasterProdScheduleGetDeApproveReasonList(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetDeApproveReasonList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取撤审原因列表 GET /mos/api/MasterProdSchedule/GetUnlockingReason */
export async function MasterProdScheduleGetUnlockingReason(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>(
    '/mos/api/MasterProdSchedule/GetUnlockingReason',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** mps解锁 POST /mos/api/MasterProdSchedule/MpsUnlocking */
export async function MasterProdScheduleMpsUnlocking(
  body: API.MpsUnlockingParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MasterProdSchedule/MpsUnlocking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** mps锁定 GET /mos/api/MasterProdSchedule/Mpslocking */
export async function MasterProdScheduleMpslocking(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MasterProdScheduleMpslockingParams,
  options?: { [key: string]: any },
) {
  return request<API.MpslockDtoListApiResult>('/mos/api/MasterProdSchedule/Mpslocking', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** mps保存锁定 POST /mos/api/MasterProdSchedule/SubmitLocking */
export async function MasterProdScheduleSubmitLocking(
  body: API.SaveMpslockDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/MasterProdSchedule/SubmitLocking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取其他mps多余库存明细 POST /mos/api/MasterProdSchedule/GetOtherMpsQtyDetails */
export async function MasterProdScheduleGetOtherMpsQtyDetails(
  body: API.ItemOtherMpsQtyParam,
  options?: { [key: string]: any },
) {
  return request<API.MpsItemVoListApiResult>('/mos/api/MasterProdSchedule/GetOtherMpsQtyDetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
