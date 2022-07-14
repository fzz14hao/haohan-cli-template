// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询列表 POST /base/api/BAFabricType/GetListByParm */
export async function BAFabricTypeGetListByParm(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.BaFabricTypeDtoListApiResult>('/base/api/BAFabricType/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
