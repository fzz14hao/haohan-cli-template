// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /base/api/BaStyle/GetPageListByParm/${param0} */
export async function BaStyleGetPageListByParm(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleGetPageListByParmParams,
  body: API.BaStyleQueryCondition,
  options?: { [key: string]: any },
) {
  const { matTypeCode: param0, ...queryParams } = params;
  return request<API.BaStyleDetailDtoListApiResult>(
    `/base/api/BaStyle/GetPageListByParm/${param0}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** 根据 id 获取Style的详细信息 GET /base/api/BaStyle/GetDetail */
export async function BaStyleGetDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleGetDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleDetailDtoApiResult>('/base/api/BaStyle/GetDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据 id 获取Style的详细信息（物料编辑页面专用） GET /base/api/BaStyle/GetById/${param1}/${param0} */
export async function BaStyleGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleGetByIdParams,
  options?: { [key: string]: any },
) {
  const { matTypeCode: param0, id: param1, ...queryParams } = params;
  return request<API.BaStyleDetailDtoApiResult>(`/base/api/BaStyle/GetById/${param1}/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取款式的UPC模板 GET /base/api/BaStyle/GetUPC/${param0} */
export async function BaStyleGetUPC(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleGetUPCParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaStypeItemUPCDtoListApiResult>(`/base/api/BaStyle/GetUPC/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出UPC模板 GET /base/api/BaStyle/ExportUPCExcel */
export async function BaStyleExportUPCExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleExportUPCExcelParams,
  options?: { [key: string]: any },
) {
  return request<any>('/base/api/BaStyle/ExportUPCExcel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 检查 style item 是否在使用 POST /base/api/BaStyle/CheckStyleItemUsed */
export async function BaStyleCheckStyleItemUsed(
  body: API.CheckStyleItemUsedRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/base/api/BaStyle/CheckStyleItemUsed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询物料基础信息 POST /base/api/BaStyle/GetStyleBase */
export async function BaStyleGetStyleBase(
  body: API.GetStyleBaseRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleBaseInfoDtoApiResult>('/base/api/BaStyle/GetStyleBase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 选择框查询：style POST /base/api/BaStyle/GetStyleSelectListByParam */
export async function BaStyleGetStyleSelectListByParam(
  body: API.BaStyleSelectQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleSelectDtoListApiResult>('/base/api/BaStyle/GetStyleSelectListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 选择框查询：style color POST /base/api/BaStyle/GetStyleColorSelectListByParam */
export async function BaStyleGetStyleColorSelectListByParam(
  body: API.BaStyleColorSelectQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleColorSelectDtoListApiResult>(
    '/base/api/BaStyle/GetStyleColorSelectListByParam',
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

/** 选择框查询： style item POST /base/api/BaStyle/GetStyleItemSelectListByParam */
export async function BaStyleGetStyleItemSelectListByParam(
  body: API.BaStyleItemSelectQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleItemSelectDtoListApiResult>(
    '/base/api/BaStyle/GetStyleItemSelectListByParam',
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

/** 新增或编辑物料基础信息 POST /base/api/BaStyle/Save */
export async function BaStyleSave(
  body: API.BaStyleAddOrUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleSaveResponseDtoApiResult>('/base/api/BaStyle/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量查询款式信息（订单专用） POST /base/api/BaStyle/BatchGetStyleForOrder */
export async function BaStyleBatchGetStyleForOrder(
  body: API.BatchGetStyleForOrderRequestRto,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleForOrderRtoListApiResult>('/base/api/BaStyle/BatchGetStyleForOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 ODP 订单生成款式，已存在款式，直接返回款式 POST /base/api/BaStyle/AddOrGetFromOdpOrder */
export async function BaStyleAddOrGetFromOdpOrder(
  body: API.BaStyleAddFromOdpOrderRto,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleForOrderRtoListApiResult>('/base/api/BaStyle/AddOrGetFromOdpOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置 UPC/EAN 码 POST /base/api/BaStyle/SetUPC */
export async function BaStyleSetUPC(
  body: API.BaStyleItemSetUPCDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaStyle/SetUPC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上传UPC模板 POST /base/api/BaStyle/UploadUPC */
export async function BaStyleUploadUPC(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleUploadUPCParams & {
    // header
    styleId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.BaStypeItemUPCDtoListApiResult>('/base/api/BaStyle/UploadUPC', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
