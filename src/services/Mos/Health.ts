// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取状态信息 GET /mos/health */
export async function HealthGet(options?: { [key: string]: any }) {
  return request<any>('/mos/health', {
    method: 'GET',
    ...(options || {}),
  });
}
