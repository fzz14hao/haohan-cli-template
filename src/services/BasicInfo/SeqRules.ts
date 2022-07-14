// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询 POST /base/api/SeqRules/GetPageListByParam */
export async function SeqRulesGetPageListByParam(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.SEQRulesDtoListApiResult>('/base/api/SeqRules/GetPageListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /base/api/SeqRules/GetListByParam */
export async function SeqRulesGetListByParam(
  body: API.QueryParam,
  options?: { [key: string]: any },
) {
  return request<API.SEQRulesDtoListApiResult>('/base/api/SeqRules/GetListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看详情 GET /base/api/SeqRules/GetById */
export async function SeqRulesGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SeqRulesGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SEQRulesDtoApiResult>('/base/api/SeqRules/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 默认规则 GET /base/api/SeqRules/GetSystemDefualt */
export async function SeqRulesGetSystemDefualt(options?: { [key: string]: any }) {
  return request<API.SEQRulesDtoApiResult>('/base/api/SeqRules/GetSystemDefualt', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除 GET /base/api/SeqRules/Delete */
export async function SeqRulesDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SeqRulesDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/base/api/SeqRules/Delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存，新增或者更新 POST /base/api/SeqRules/Save */
export async function SeqRulesSave(body: API.SEQRulesDto, options?: { [key: string]: any }) {
  return request<API.StringApiResult>('/base/api/SeqRules/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
