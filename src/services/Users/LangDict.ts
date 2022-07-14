// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取所有语言字典 POST /user/api/LangDict/GetList */
export async function LangDictGetList(
  body: API.SysLangDictQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SysLangDictDtoListApiResult>('/user/api/LangDict/GetList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据语言类型获取语言字典 POST /user/api/LangDict/GetListByLang */
export async function LangDictGetListByLang(
  body: API.SysLangDictQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SysLangDictListApiResult>('/user/api/LangDict/GetListByLang', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取语言的版本信息 GET /user/api/LangDict/GetVersion */
export async function LangDictGetVersion(options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/user/api/LangDict/GetVersion', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 字典查询列表 POST /user/api/LangDict/GetListByParam */
export async function LangDictGetListByParam(
  body: API.SysLangDictQueryCondition,
  options?: { [key: string]: any },
) {
  return request<API.SysLangDictDtoListApiResult>('/user/api/LangDict/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取字典 GET /user/api/LangDict/Get */
export async function LangDictGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LangDictGetParams,
  options?: { [key: string]: any },
) {
  return request<API.SysLangDictApiResult>('/user/api/LangDict/Get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加字典 POST /user/api/LangDict/Add */
export async function LangDictAdd(body: API.SysLangDict, options?: { [key: string]: any }) {
  return request<API.SysLangDictApiResult>('/user/api/LangDict/Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加字典 POST /user/api/LangDict/AddList */
export async function LangDictAddList(body: API.SysLangDict[], options?: { [key: string]: any }) {
  return request<API.SysLangDictListApiResult>('/user/api/LangDict/AddList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改语言字典 POST /user/api/LangDict/Modify */
export async function LangDictModify(body: API.SysLangDict, options?: { [key: string]: any }) {
  return request<API.SysLangDictApiResult>('/user/api/LangDict/Modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改字典 POST /user/api/LangDict/ModifyList */
export async function LangDictModifyList(
  body: API.SysLangDict[],
  options?: { [key: string]: any },
) {
  return request<API.SysLangDictListApiResult>('/user/api/LangDict/ModifyList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量导入多语言 POST /user/api/LangDict/BatchAllList */
export async function LangDictBatchAllList(options?: { [key: string]: any }) {
  return request<API.ApiResult>('/user/api/LangDict/BatchAllList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除字典 POST /user/api/LangDict/DeleteList */
export async function LangDictDeleteList(body: string[], options?: { [key: string]: any }) {
  return request<API.ApiResult>('/user/api/LangDict/DeleteList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
