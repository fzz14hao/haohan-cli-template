// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取MPS Bom详情 GET /mos/api/MpsBom/GetListByParm */
export async function MpsBomGetListByParm(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomGetListByParmParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomDtoApiResult>('/mos/api/MpsBom/GetListByParm', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存BOM的物料用量信息 POST /mos/api/MpsBom/Save */
export async function MpsBomSave(body: API.MpsBomSaveDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据部位ID删除BOM明细 POST /mos/api/MpsBom/DeleteDetail */
export async function MpsBomDeleteDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomDeleteDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/DeleteDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据bomId获取报表数据 GET /mos/api/MpsBom/GetBomReportPrintById */
export async function MpsBomGetBomReportPrintById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomGetBomReportPrintByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BomReportPrintDtoApiResult>('/mos/api/MpsBom/GetBomReportPrintById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存部件 POST /mos/api/MpsBom/SaveComponent */
export async function MpsBomSaveComponent(
  body: API.MpsBomSaveCompDto,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomDtoApiResult>('/mos/api/MpsBom/SaveComponent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /mos/api/MpsBom/UpdateDetails */
export async function MpsBomUpdateDetails(
  body: API.BomDetailUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomDtoApiResult>('/mos/api/MpsBom/UpdateDetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据状态获取mpsbom明细数据 POST /mos/api/MpsBom/GetDetailsByStatus */
export async function MpsBomGetDetailsByStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomGetDetailsByStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomDetailDtoListApiResult>('/mos/api/MpsBom/GetDetailsByStatus', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** bom复制 POST /mos/api/MpsBom/CopyMpsBomDetail */
export async function MpsBomCopyMpsBomDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomCopyMpsBomDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/CopyMpsBomDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据mps和类型获取mpsbom信息 GET /mos/api/MpsBom/GetMpsBomCompQty */
export async function MpsBomGetMpsBomCompQty(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomGetMpsBomCompQtyParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsDetailBomDtoListApiResult>('/mos/api/MpsBom/GetMpsBomCompQty', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据部位删除物料信息 POST /mos/api/MpsBom/DeleteMpsBomComponent */
export async function MpsBomDeleteMpsBomComponent(
  body: API.MpsBomDelCompParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/DeleteMpsBomComponent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交 POST /mos/api/MpsBom/Submit */
export async function MpsBomSubmit(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/Submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回 POST /mos/api/MpsBom/Reject */
export async function MpsBomReject(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/Reject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /mos/api/MpsBom/Approve */
export async function MpsBomApprove(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/Approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /mos/api/MpsBom/DeApprove */
export async function MpsBomDeApprove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomDeApproveParams,
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsBom/DeApprove', {
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

/** 获取撤审原因列表 POST /mos/api/MpsBom/GetDeApproveReasonList */
export async function MpsBomGetDeApproveReasonList(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>('/mos/api/MpsBom/GetDeApproveReasonList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据Id获取操作日志 GET /mos/api/MpsBom/GetOperationLogById */
export async function MpsBomGetOperationLogById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MpsBomGetOperationLogByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MpsBomOperationLogDtoListApiResult>('/mos/api/MpsBom/GetOperationLogById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
