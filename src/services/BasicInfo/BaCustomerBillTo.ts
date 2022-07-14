// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据Id获取详情 GET /base/api/BaCustomerBillTo/GetById */
export async function BaCustomerBillToGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaCustomerBillToGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaBillToDtoApiResult>('/base/api/BaCustomerBillTo/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询 POST /base/api/BaCustomerBillTo/GetPageListByParm */
export async function BaCustomerBillToGetPageListByParm(
  body: API.BaBillToQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaBillToDtoListApiResult>('/base/api/BaCustomerBillTo/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/BaCustomerBillTo/GetListByParm */
export async function BaCustomerBillToGetListByParm(
  body: API.BaBillToQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaBillToDtoListApiResult>('/base/api/BaCustomerBillTo/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
