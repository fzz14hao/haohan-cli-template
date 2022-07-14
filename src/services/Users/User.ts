// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分页列表 POST /user/api/User/PageList */
export async function UserGetPageListByParm(
  body: API.UserCondition,
  options?: { [key: string]: any },
) {
  return request<API.UserDtoListApiResult>('/user/api/User/PageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取数据 GET /user/api/User/${param0} */
export async function UserGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserDtoApiResult>(`/user/api/User/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据logiName获取数据 GET /user/api/User/${param0}/GetSysUserByLoginName */
export async function UserGetSysUserByLoginName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserGetSysUserByLoginNameParams,
  options?: { [key: string]: any },
) {
  const { loginname: param0, ...queryParams } = params;
  return request<API.UserDtoApiResult>(`/user/api/User/${param0}/GetSysUserByLoginName`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存 POST /user/api/User */
export async function UserAddOrUpdate(body: API.UserDto, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/user/api/User', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /user/api/User */
export async function UserDelete(body: number[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/User', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冻结、启用 PUT /user/api/User/freeze */
export async function UserFreeze(body: API.UserChangeDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/User/freeze', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 PUT /user/api/User/password */
export async function UserChangePassword(
  body: API.UserChangeDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/User/password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分配集团 PUT /user/api/User/${param0}/groups */
export async function UserDistributionGroup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserDistributionGroupParams,
  body: number[],
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/User/${param0}/groups`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 分配角色/用户组 PUT /user/api/User/${param0}/roles */
export async function UserDistributionRoles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserDistributionRolesParams,
  body: number[],
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/User/${param0}/roles`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色获取用户 POST /user/api/User/GetRoleUsersList */
export async function UserGetUserByRole(body: API.UserCondition, options?: { [key: string]: any }) {
  return request<API.UserDtoListApiResult>('/user/api/User/GetRoleUsersList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色获取用户 GET /user/api/User/${param0}/userList */
export async function UserGetListByRoleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserGetListByRoleIdParams,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.UserDtoListApiResult>(`/user/api/User/${param0}/userList`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 接收用户查询 GET /user/api/User/${param0}/Query */
export async function UserQueryByLoginName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserQueryByLoginNameParams,
  options?: { [key: string]: any },
) {
  const { userName: param0, ...queryParams } = params;
  return request<API.UserDtoApiResult>(`/user/api/User/${param0}/Query`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 确定接收 PUT /user/api/User/${param0}/${param1} */
export async function UserAccept(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserAcceptParams,
  options?: { [key: string]: any },
) {
  const { id: param0, isAccept: param1, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/User/${param0}/${param1}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 注册 POST /user/api/User/Register */
export async function UserRegister(body: API.UserDto, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/user/api/User/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户集团 POST /user/api/User/UserGroup */
export async function UserUserGroupMap(body: API.UserDto, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/User/UserGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户当前权限 GET /user/api/User/${param0}/permissions */
export async function UserGetCurrenUserPermissions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserGetCurrenUserPermissionsParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.StringListApiResult>(`/user/api/User/${param0}/permissions`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
