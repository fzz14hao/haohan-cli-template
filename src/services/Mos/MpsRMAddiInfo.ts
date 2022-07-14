// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件获取数据 POST /mos/api/MpsRMAddiInfo/GetListByParamList */
export async function MpsRMAddiInfoGetListByParamList(
  body: API.MpsRMAddiInfoQueryParam,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMAddiInfoDtoListApiResult>('/mos/api/MpsRMAddiInfo/GetListByParamList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加一条 POST /mos/api/MpsRMAddiInfo/AddOnQty */
export async function MpsRMAddiInfoAddOnQty(
  body: API.MpsRMAddiInfoSaveDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMAddiInfo/AddOnQty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 支持更新额外量（保存+更新） POST /mos/api/MpsRMAddiInfo/SaveAddOnQty */
export async function MpsRMAddiInfoSaveAddOnQty(
  body: API.MpsRMAddOnQtyDto[],
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/MpsRMAddiInfo/SaveAddOnQty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取列表数据（前端查询用） POST /mos/api/MpsRMAddiInfo/GetListByParam */
export async function MpsRMAddiInfoGetListByParam(
  body: API.RMAddiInfoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.MpsRMDetailDtoListApiResult>('/mos/api/MpsRMAddiInfo/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
