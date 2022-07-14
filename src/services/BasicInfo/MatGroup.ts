// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询
请使用 /erpOdp/api/MatGroup/GetListByParm POST /base/api/MatGroup/GetListByParm */
export async function MatGroupGetListByParm(
  body: API.MatGroupQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.MatGroupDtoListApiResult>('/base/api/MatGroup/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
