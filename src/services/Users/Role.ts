// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分页列表 POST /user/api/Role/PageList */
export async function RoleGetPageListByParm(
  body: API.UserCondition,
  options?: { [key: string]: any },
) {
  return request<API.RoleDtoListApiResult>('/user/api/Role/PageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取数据 GET /user/api/Role/${param0} */
export async function RoleGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RoleDtoApiResult>(`/user/api/Role/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存 POST /user/api/Role */
export async function RoleAddOrUpdate(body: API.RoleDto, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/user/api/Role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /user/api/Role */
export async function RoleDelete(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/Role', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取指定用户的角色列表 GET /user/api/Role/${param0}/roles/${param1} */
export async function RoleFindListByUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleFindListByUserParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, appId: param1, ...queryParams } = params;
  return request<API.FindListByUserDtoApiResult>(`/user/api/Role/${param0}/roles/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 关联用户 PUT /user/api/Role/${param0}/user */
export async function RoleMapUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleMapUsersParams,
  body: number[],
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Role/${param0}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据应用类型获取角色列表user/acc GET /user/api/Role/appId/${param0} */
export async function RoleGetListByAppId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleGetListByAppIdParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<API.RoleDtoListApiResult>(`/user/api/Role/appId/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 复制新增角色 POST /user/api/Role/CopyRole */
export async function RoleCopyRole(body: API.CopyRoleParamDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/Role/CopyRole', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色获取权限信息 GET /user/api/Role/GetPermissionTree */
export async function RoleGetPermissionTree(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleGetPermissionTreeParams,
  options?: { [key: string]: any },
) {
  return request<API.PermissionMenuDtoApiResult>('/user/api/Role/GetPermissionTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
