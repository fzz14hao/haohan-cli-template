// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 集团列表 POST /user/api/Group/GetPageListByParm */
export async function GroupGetPageListByParm(
  body: API.UserCondition,
  options?: { [key: string]: any },
) {
  return request<API.GroupListApiResult>('/user/api/Group/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取数据 GET /user/api/Group/${param0} */
export async function GroupGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GroupGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GroupApiResult>(`/user/api/Group/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /user/api/Group/${param0} */
export async function GroupDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GroupDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Group/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存 POST /user/api/Group */
export async function GroupAddOrUpdate(body: API.Group, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/user/api/Group', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据userid获取集团 GET /user/api/Group/${param0}/UserGroup */
export async function GroupGetByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GroupGetByUserIdParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.GroupListApiResult>(`/user/api/Group/${param0}/UserGroup`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
