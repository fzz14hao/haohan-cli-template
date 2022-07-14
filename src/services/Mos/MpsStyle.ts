// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 检查 style item 是否在用 POST /mos/api/MpsStyle/CheckStyleItemUsed */
export async function MpsStyleCheckStyleItemUsed(
  body: API.CheckStyleItemUsedRequestDto,
  options?: { [key: string]: any },
) {
  return request<API.StringListApiResult>('/mos/api/MpsStyle/CheckStyleItemUsed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
