// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /base/api/BaStore/GetListByParm */
export async function BaStoreGetListByParm(
  body: API.BaStoreQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.BaStoreDtoListApiResult>('/base/api/BaStore/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【批量】根据编码获取Store数据 POST /base/api/BaStore/GetByCodes */
export async function BaStoreGetByCodes(body: string[], options?: { [key: string]: any }) {
  return request<API.BaStoreDtoListApiResult>('/base/api/BaStore/GetByCodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
