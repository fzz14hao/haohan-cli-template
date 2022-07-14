// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据用户获取工厂数据权限包括仓库和部门 POST /user/api/DataPermission/GetFactoryMappingData */
export async function DataPermissionGetFactoryDataListByUserId(
  body: API.FactoryDataQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.UserFactoryDataMappingDtoListApiResult>(
    '/user/api/DataPermission/GetFactoryMappingData',
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

/** 根据用户和工厂获取客户数据权限 GET /user/api/DataPermission/GetCustomerMappingData */
export async function DataPermissionGetCustomerDataListByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionGetCustomerDataListByUserIdParams,
  options?: { [key: string]: any },
) {
  return request<API.UserCustomerDataMappingDtoListApiResult>(
    '/user/api/DataPermission/GetCustomerMappingData',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 更新工厂、与部门和仓库的信息 POST /user/api/DataPermission/SaveFactoryMapping */
export async function DataPermissionSaveFactoryMapping(
  body: API.UserFactoryDataMappingDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/SaveFactoryMapping', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新工厂、与客户的映射信息 POST /user/api/DataPermission/SaveCustomerMapping */
export async function DataPermissionSaveCustomerMapping(
  body: API.UserCustomerDataMappingDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/SaveCustomerMapping', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除工厂、仓库、部门的映射数据 GET /user/api/DataPermission/DeleteFactoryMapping */
export async function DataPermissionDeleteFactoryMapping(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionDeleteFactoryMappingParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/DeleteFactoryMapping', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除工厂、仓库、部门的映射数据 GET /user/api/DataPermission/DeleteCustomerMapping */
export async function DataPermissionDeleteCustomerMapping(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionDeleteCustomerMappingParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/DeleteCustomerMapping', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除指定用户的工厂、仓库、部门映射数据 GET /user/api/DataPermission/DeleteFactoryAll */
export async function DataPermissionDeleteFactoryMappingAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionDeleteFactoryMappingAllParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/DeleteFactoryAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除指定用户所有客户映射数据 GET /user/api/DataPermission/DeleteCustomerAll */
export async function DataPermissionDeleteCustomerMappingAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionDeleteCustomerMappingAllParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/user/api/DataPermission/DeleteCustomerAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户ID和APPID获取数据权限 GET /user/api/DataPermission/GetPermission */
export async function DataPermissionGetPermissionByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DataPermissionGetPermissionByUserIdParams,
  options?: { [key: string]: any },
) {
  return request<API.UserPermissionDataDtoApiResult>('/user/api/DataPermission/GetPermission', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
