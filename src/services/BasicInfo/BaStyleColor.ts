// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批量设置款式的配色启用/禁用 POST /base/api/BaStyleColor/BatchSetActive */
export async function BaStyleColorBatchSetActive(
  body: API.BatchSetActiveDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/BaStyleColor/BatchSetActive', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
