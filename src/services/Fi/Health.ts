// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取状态信息 GET /fi/health */
export async function HealthGet(options?: { [key: string]: any }) {
  return request<any>('/fi/health', {
    method: 'GET',
    ...(options || {}),
  });
}
