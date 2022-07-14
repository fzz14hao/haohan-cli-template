// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/MaterialSendApply/GetPageListByParm */
export async function MaterialSendApplyGetPageListByParm(
  body: API.ProdRMConsQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdRMConsumptionDtoListApiResult>(
    '/mos/api/MaterialSendApply/GetPageListByParm',
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

/** 根据Id获取详情 GET /mos/api/MaterialSendApply/GetById */
export async function MaterialSendApplyGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendApplyGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ProdRMConsumptionDtoApiResult>('/mos/api/MaterialSendApply/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /mos/api/MaterialSendApply/GetListByParm */
export async function MaterialSendApplyGetListByParm(
  body: API.ProdRMConsQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdRMConsumptionDtoListApiResult>(
    '/mos/api/MaterialSendApply/GetListByParm',
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

/** 新增 POST /mos/api/MaterialSendApply/AddOrUpdate */
export async function MaterialSendApplyAddOrUpdate(
  body: API.ProdRMConsumptionDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdRMConsumptionDtoApiResult>('/mos/api/MaterialSendApply/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存发料需求单明细 POST /mos/api/MaterialSendApply/SaveProdRMCinsDetail */
export async function MaterialSendApplySaveProdRMCinsDetail(
  body: API.ApplySaveParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/SaveProdRMCinsDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/MaterialSendApply/Delete */
export async function MaterialSendApplyDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendApplyDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/MaterialSendApply/DeleteDetail */
export async function MaterialSendApplyDeleteDetail(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/DeleteDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询部件 GET /mos/api/MaterialSendApply/GetCompById */
export async function MaterialSendApplyGetCompById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendApplyGetCompByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.PORMCompAndStyleDetailDtoApiResult>('/mos/api/MaterialSendApply/GetCompById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取申请单物料用量详情 POST /mos/api/MaterialSendApply/GetBomDetailByProdRMConsId */
export async function MaterialSendApplyGetBomDetailByProdRMConsId(
  body: API.PORMCompAndStyleDetailDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdRMConsItemDetailsDtoListApiResult>(
    '/mos/api/MaterialSendApply/GetBomDetailByProdRMConsId',
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

/** 根据Id获取操作日志 GET /mos/api/MaterialSendApply/GetOperationLogById */
export async function MaterialSendApplyGetOperationLogById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendApplyGetOperationLogByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendApplyOperationLogDtoListApiResult>(
    '/mos/api/MaterialSendApply/GetOperationLogById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 提交 POST /mos/api/MaterialSendApply/Submit */
export async function MaterialSendApplySubmit(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/Submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回 POST /mos/api/MaterialSendApply/Reject */
export async function MaterialSendApplyReject(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/Reject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /mos/api/MaterialSendApply/Approve */
export async function MaterialSendApplyApprove(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/Approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /mos/api/MaterialSendApply/DeApprove */
export async function MaterialSendApplyDeApprove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendApplyDeApproveParams,
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSendApply/DeApprove', {
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

/** 获取撤审原因列表 POST /mos/api/MaterialSendApply/GetDeApproveReasonList */
export async function MaterialSendApplyGetDeApproveReasonList(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>(
    '/mos/api/MaterialSendApply/GetDeApproveReasonList',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 打印报表数据 POST /mos/api/MaterialSendApply/BatchPrintReport */
export async function MaterialSendApplyBatchPrintReport(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendApplyPrintDtoListApiResult>(
    '/mos/api/MaterialSendApply/BatchPrintReport',
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
