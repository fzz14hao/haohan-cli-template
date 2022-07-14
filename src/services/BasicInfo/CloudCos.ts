// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取腾讯云 cos 令牌 GET /base/api/CloudCos */
export async function CloudCosGetToken(options?: { [key: string]: any }) {
  return request<API.CloudCosDtoApiResult>('/base/api/CloudCos', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 上传 POST /base/api/CloudCos */
export async function CloudCosUpload(options?: { [key: string]: any }) {
  return request<API.ObjectApiResult>('/base/api/CloudCos', {
    method: 'POST',
    ...(options || {}),
  });
}
