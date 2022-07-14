// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 权限树 POST /user/api/Permission/${param0} */
export async function PermissionGetPermissionTree(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PermissionGetPermissionTreeParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<API.PermissionDtoListApiResult>(`/user/api/Permission/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据id获取数据 GET /user/api/Permission/${param0} */
export async function PermissionGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PermissionGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PermissionDtoApiResult>(`/user/api/Permission/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /user/api/Permission/${param0} */
export async function PermissionDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PermissionDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Permission/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存 POST /user/api/Permission */
export async function PermissionAddOrUpdate(
  body: API.PermissionDto,
  options?: { [key: string]: any },
) {
  return request<API.Int64ApiResult>('/user/api/Permission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色更新权限 POST /user/api/Permission/SetPermission */
export async function PermissionSetPermission(
  body: API.RolePermissionParamDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/Permission/SetPermission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
