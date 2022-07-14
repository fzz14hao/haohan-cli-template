// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/MaterialSend/GetPageListByParm */
export async function MaterialSendGetPageListByParm(
  body: API.MaterialSendQueryParam,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendDtoListApiResult>('/mos/api/MaterialSend/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询数据 POST /mos/api/MaterialSend/GetListByParm */
export async function MaterialSendGetListByParm(
  body: API.MaterialSendQueryParam,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendDtoListApiResult>('/mos/api/MaterialSend/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /mos/api/MaterialSend/GetById */
export async function MaterialSendGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendDtoApiResult>('/mos/api/MaterialSend/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /mos/api/MaterialSend/Save */
export async function MaterialSendSave(
  body: API.MaterialSendSaveDto,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendDtoApiResult>('/mos/api/MaterialSend/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取操作日志 GET /mos/api/MaterialSend/GetOperationLogById */
export async function MaterialSendGetOperationLogById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendGetOperationLogByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.MaterialSendOperationLogDtoListApiResult>(
    '/mos/api/MaterialSend/GetOperationLogById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 报表打印 POST /mos/api/MaterialSend/GetPrintList */
export async function MaterialSendGetPrintList(body: string[], options?: { [key: string]: any }) {
  return request<API.MaterialSendApplyPrintDtoListApiResult>('/mos/api/MaterialSend/GetPrintList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发料冲消 GET /mos/api/MaterialSend/Offset */
export async function MaterialSendOffset(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendOffsetParams,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/MaterialSend/Offset', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除 GET /mos/api/MaterialSend/Delete */
export async function MaterialSendDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MaterialSendDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MaterialSend/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
