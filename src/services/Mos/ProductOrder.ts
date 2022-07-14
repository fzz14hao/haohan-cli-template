// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/ProductOrder/GetPageListByParm */
export async function ProductOrderGetPageListByParm(
  body: API.POQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderHeaderCloudDtoListApiResult>(
    '/mos/api/ProductOrder/GetPageListByParm',
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

/** 根据工单id或者工单号进行查询 POST /mos/api/ProductOrder/GetListByIdOrProductNo */
export async function ProductOrderGetListByIdOrProductNo(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderHeaderCloudDtoListApiResult>(
    '/mos/api/ProductOrder/GetListByIdOrProductNo',
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

/** 根据Id获取详情 GET /mos/api/ProductOrder/GetById */
export async function ProductOrderGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderHeaderCloudDtoApiResult>('/mos/api/ProductOrder/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 在制品收付存报表 POST /mos/api/ProductOrder/ProdOrderWIPReport */
export async function ProductOrderProdOrderWIPReport(
  body: API.ProdOrderWIPParamDto,
  options?: { [key: string]: any },
) {
  return request<API.WIPCostMovingInquiryReportDtoListApiResult>(
    '/mos/api/ProductOrder/ProdOrderWIPReport',
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

/** 获取工单明细（收货时） GET /mos/api/ProductOrder/GetReceiveByProdId */
export async function ProductOrderGetReceiveByProdId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderGetReceiveByProdIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SPProdOrderHeaderCloudApiResult>('/mos/api/ProductOrder/GetReceiveByProdId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /mos/api/ProductOrder/GetListByParm */
export async function ProductOrderGetListByParm(
  body: API.POQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderHeaderCloudDtoListApiResult>('/mos/api/ProductOrder/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /mos/api/ProductOrder/Add */
export async function ProductOrderAdd(
  body: API.ProdOrderAddParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderHeaderCloudDtoApiResult>('/mos/api/ProductOrder/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据工单Id获取发料明细信息 GET /mos/api/ProductOrder/GetProdOrdMaterSendDtlById */
export async function ProductOrderGetProdOrdMaterSendDtlById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderGetProdOrdMaterSendDtlByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrdMaterSendDtlDtoListApiResult>(
    '/mos/api/ProductOrder/GetProdOrdMaterSendDtlById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据工单Id获取成品入库明细信息 GET /mos/api/ProductOrder/GetReceiveDetailById */
export async function ProductOrderGetReceiveDetailById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderGetReceiveDetailByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderReceiveDetailDtoListApiResult>(
    '/mos/api/ProductOrder/GetReceiveDetailById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 计算工单成本 POST /mos/api/ProductOrder/GetProdOrderProductionCost */
export async function ProductOrderGetProdOrderProductionCost(
  body: API.ProdOrderProductionCostParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProductionCostDtoListApiResult>(
    '/mos/api/ProductOrder/GetProdOrderProductionCost',
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

/** 生成外协采购订单 POST /mos/api/ProductOrder/CreateOSPurchaseOrder */
export async function ProductOrderCreateOSPurchaseOrder(
  body: API.OSPurchaseOrderParamDto,
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/ProductOrder/CreateOSPurchaseOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /mos/api/ProductOrder/Delete */
export async function ProductOrderDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/Delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除 GET /mos/api/ProductOrder/DeleteDetail */
export async function ProductOrderDeleteDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderDeleteDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/DeleteDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 工单发布 POST /mos/api/ProductOrder/Published */
export async function ProductOrderPublished(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/Published', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发布撤回 POST /mos/api/ProductOrder/DeApprove */
export async function ProductOrderDeApprove(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/DeApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 工厂关闭 POST /mos/api/ProductOrder/FactoryClose */
export async function ProductOrderFactoryClose(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/FactoryClose', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 财务关闭 POST /mos/api/ProductOrder/FinanceClose */
export async function ProductOrderFinanceClose(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/ProductOrder/FinanceClose', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 工单打印 POST /mos/api/ProductOrder/GetPrintListById */
export async function ProductOrderGetPrintListById(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderPrintDtoListApiResult>('/mos/api/ProductOrder/GetPrintListById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取撤审原因列表 POST /mos/api/ProductOrder/GetDeApproveReasonList */
export async function ProductOrderGetDeApproveReasonList(options?: { [key: string]: any }) {
  return request<API.SysDictDataRtoListApiResult>('/mos/api/ProductOrder/GetDeApproveReasonList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取os外协采购订单 GET /mos/api/ProductOrder/GetOSPurchaseOrder */
export async function ProductOrderGetOSPurchaseOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductOrderGetOSPurchaseOrderParams,
  options?: { [key: string]: any },
) {
  return request<API.OSPurchaseOrderDtoListApiResult>('/mos/api/ProductOrder/GetOSPurchaseOrder', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
