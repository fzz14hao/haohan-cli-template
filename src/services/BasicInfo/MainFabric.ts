// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据登录用户信息获取面料信息 POST /base/api/MainFabric/GetPageListByParmNoPermission */
export async function MainFabricGetPageListByParmNoPermission(
  body: API.MainFabricQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.MainFabricOutputDtoListApiResult>(
    '/base/api/MainFabric/GetPageListByParmNoPermission',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
