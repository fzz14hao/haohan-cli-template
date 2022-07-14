// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送短信 POST /user/api/Verify/SendCode */
export async function VerifySendCode(body: API.SendCodeDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/user/api/Verify/SendCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
