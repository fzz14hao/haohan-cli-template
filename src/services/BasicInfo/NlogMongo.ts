// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询 POST /base/api/NlogMongo/GetListByParm */
export async function NlogMongoGetListByParm(
  body: API.NlogQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.SysNloglogListApiResult>('/base/api/NlogMongo/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取明细 GET /base/api/NlogMongo/${param0} */
export async function NlogMongoGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NlogMongoGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SysNloglogApiResult>(`/base/api/NlogMongo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
