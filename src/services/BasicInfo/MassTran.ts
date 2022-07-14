// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 测试订单创建 金额 > 100, orderId 以 A 开头都会被拒绝 POST /base/api/MassTran/create */
export async function MassTranNewOrder(body: API.NewOrderReqDto, options?: { [key: string]: any }) {
  return request<API.NewOrderRespDto>('/base/api/MassTran/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
