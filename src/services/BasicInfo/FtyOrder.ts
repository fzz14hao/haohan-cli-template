// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 计算预期出厂天数 POST /base/api/FtyOrder/CaculateExtPtyDate */
export async function FtyOrderCaculateExtPtyDate(
  body: API.BaCustomerFactoryDto,
  options?: { [key: string]: any },
) {
  return request<API.Int32ApiResult>('/base/api/FtyOrder/CaculateExtPtyDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取匹配的客户订单设置 POST /base/api/FtyOrder/MatchFactoryOrderScheme */
export async function FtyOrderMatchFactoryOrderScheme(
  body: API.BaFactoryOrderSchemeDto,
  options?: { [key: string]: any },
) {
  return request<API.BaFactoryOrderSchemeDtoApiResult>(
    '/base/api/FtyOrder/MatchFactoryOrderScheme',
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
