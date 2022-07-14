// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/DicDetail/GetPageListByParm */
export async function DicDetailGetPageListByParm(
  body: API.DicDetailQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.DicDetailDtoListApiResult>('/base/api/DicDetail/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询 POST /base/api/DicDetail/GetListByParm */
export async function DicDetailGetListByParm(
  body: API.DicDetailQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.DicDetailDtoListApiResult>('/base/api/DicDetail/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
