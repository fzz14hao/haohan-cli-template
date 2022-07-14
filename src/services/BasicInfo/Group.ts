// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/Group/GetListPage */
export async function GroupGetPageListByParm(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.GroupDtoListApiResult>('/base/api/Group/GetListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户所属的集团（下拉框专用） GET /base/api/Group/GetByCurrentUser */
export async function GroupGetByCurrentUser(options?: { [key: string]: any }) {
  return request<API.GroupInfoForDropDownListDtoListApiResult>('/base/api/Group/GetByCurrentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据Id获取数据 GET /base/api/Group/GetById */
export async function GroupGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GroupGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.GroupDtoApiResult>('/base/api/Group/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Code获取数据 GET /base/api/Group/GetByCode */
export async function GroupGetByCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GroupGetByCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.GroupDtoApiResult>('/base/api/Group/GetByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
