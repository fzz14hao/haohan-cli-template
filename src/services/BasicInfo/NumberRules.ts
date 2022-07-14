// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返回所有信息 GET /base/api/NumberRules/GetAll */
export async function NumberRulesGetAll(options?: { [key: string]: any }) {
  return request<API.NumberRulesDtoListApiResult>('/base/api/NumberRules/GetAll', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据条件查询分页数据 POST /base/api/NumberRules/GetPageListByParm */
export async function NumberRulesGetPageListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.NumberRulesDtoListApiResult>('/base/api/NumberRules/GetPageListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /base/api/NumberRules/GetListByParm */
export async function NumberRulesGetListByParm(
  body: API.QueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.NumberRulesDtoListApiResult>('/base/api/NumberRules/GetListByParm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取详情 GET /base/api/NumberRules/GetById */
export async function NumberRulesGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NumberRulesGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.NumberRulesDtoApiResult>('/base/api/NumberRules/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或者保存 POST /base/api/NumberRules/AddOrUpdate */
export async function NumberRulesAddOrUpdate(
  body: API.NumberRulesDto,
  options?: { [key: string]: any },
) {
  return request<API.NumberRulesDtoApiResult>('/base/api/NumberRules/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /base/api/NumberRules/Delete */
export async function NumberRulesDelete(
  body: API.NumberRulesDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/NumberRules/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据SeqCode 查询详情 GET /base/api/NumberRules/GetBySeqCode */
export async function NumberRulesGetBySeqCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NumberRulesGetBySeqCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.NumberRulesDtoApiResult>('/base/api/NumberRules/GetBySeqCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
