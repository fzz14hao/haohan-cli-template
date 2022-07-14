
import { request } from 'umi';

/**
 * 获取所有语言字典
 * /user/api/LangDict/GetList
*/
export async function getLangDict(
  params: {
    // path
  },
  options?: { [key: string]: any },
) {
  const { ...queryParams } = params;
  return request<any>('/user/api/LangDict/GetList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data:{ ...queryParams },
    ...(options || {}),
  });
}





