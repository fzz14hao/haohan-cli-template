// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/ExchangeRate/GetAll */
export async function ExchangeRateGetAll(options?: { [key: string]: any }) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/ExchangeRate/GetPageListByParm */
export async function ExchangeRateGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取详情 GET /base/api/ExchangeRate/GetById */
export async function ExchangeRateGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoApiResult>('/base/api/ExchangeRate/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/ExchangeRate/GetListByParm */
export async function ExchangeRateGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取数据列表 POST /base/api/ExchangeRate/GetListById */
export async function ExchangeRateGetListById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetListByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/GetListById', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取币种对汇率 GET /base/api/ExchangeRate/${param0}/${param1} */
export async function ExchangeRateGetCurrencyPair(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetCurrencyPairParams,
  options?: { [key: string]: any },
) {
  const { sellCurrency: param0, buyCurrency: param1, ...queryParams } = params;
  return request<API.ExchangeRateDtoApiResult>(`/base/api/ExchangeRate/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增或者修改 POST /base/api/ExchangeRate/Save */
export async function ExchangeRateSave(
  body: API.ExchangeRateDto,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据本币和兑换币查询当前生效数据 POST /base/api/ExchangeRate/GetExchangeRateById */
export async function ExchangeRateGetExchangeRateById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetExchangeRateByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoApiResult>('/base/api/ExchangeRate/GetExchangeRateById', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取兑换币的有效汇率 POST /base/api/ExchangeRate/GetActiveExchangeRate */
export async function ExchangeRateGetActiveExchangeRate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetActiveExchangeRateParams,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>('/base/api/ExchangeRate/GetActiveExchangeRate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取本币的有效汇率 POST /base/api/ExchangeRate/GetActiveLocalExchangeRate */
export async function ExchangeRateGetActiveLocalExchangeRate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExchangeRateGetActiveLocalExchangeRateParams,
  options?: { [key: string]: any },
) {
  return request<API.ExchangeRateDtoListApiResult>(
    '/base/api/ExchangeRate/GetActiveLocalExchangeRate',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 删除 POST /base/api/ExchangeRate/Delete */
export async function ExchangeRateDelete(
  body: API.ExchangeRateDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/ExchangeRate/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 定时激活 POST /base/api/ExchangeRate/activation */
export async function ExchangeRateActivation(options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/base/api/ExchangeRate/activation', {
    method: 'POST',
    ...(options || {}),
  });
}
