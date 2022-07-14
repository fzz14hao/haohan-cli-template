// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 菜单树 POST /user/api/Menu/${param0} */
export async function MenuGetMenuTree(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuGetMenuTreeParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<API.MenuDtoListApiResult>(`/user/api/Menu/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据id获取数据 GET /user/api/Menu/${param0} */
export async function MenuGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuGetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.MenuDtoApiResult>(`/user/api/Menu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /user/api/Menu/${param0} */
export async function MenuDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 移动排序 PUT /user/api/Menu/move */
export async function MenuMoveUp(body: API.MenuSort, options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/user/api/Menu/move', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存 POST /user/api/Menu */
export async function MenuAddOrUpdate(body: API.MenuDto, options?: { [key: string]: any }) {
  return request<API.Int64ApiResult>('/user/api/Menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 禁用/启用 PUT /user/api/Menu/${param0}/${param1} */
export async function MenuSetEnable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuSetEnableParams,
  options?: { [key: string]: any },
) {
  const { id: param0, isEnable: param1, ...queryParams } = params;
  return request<API.BooleanApiResult>(`/user/api/Menu/${param0}/${param1}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导入 POST /user/api/Menu/Import */
export async function MenuImport(
  body: {
    ContentType?: string;
    ContentDisposition?: string;
    Headers?: Record<string, any>;
    Length?: number;
    Name?: string;
    FileName?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BooleanApiResult>('/user/api/Menu/Import', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 导出 POST /user/api/Menu/${param0}/Export */
export async function MenuExport(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuExportParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<any>(`/user/api/Menu/${param0}/Export`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
