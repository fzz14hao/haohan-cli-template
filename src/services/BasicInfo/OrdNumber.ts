// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据工厂Id获取订单流水号 GET /base/api/OrdNumber/GetOrderNumber */
export async function OrdNumberGetOrderNumber(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.OrdNumberGetOrderNumberParams,
  options?: { [key: string]: any },
) {
  return request<API.OrderNumberDtoApiResult>('/base/api/OrdNumber/GetOrderNumber', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据规则获取流水号 GET /base/api/OrdNumber/GetNumber */
export async function OrdNumberGetNumber(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.OrdNumberGetNumberParams,
  options?: { [key: string]: any },
) {
  return request<API.OrderNumberDtoApiResult>('/base/api/OrdNumber/GetNumber', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
