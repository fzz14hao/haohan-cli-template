// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据集团Id查询和公司编号/名称匹配公司信息 POST /base/api/Company/${param0} */
export async function CompanyMatchCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CompanyMatchCompanyParams,
  body: API.CompanyQueryCondition,
  options?: { [key: string]: any },
) {
  const { groupId: param0, ...queryParams } = params;
  return request<API.CompanyDtoListApiResult>(`/base/api/Company/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
