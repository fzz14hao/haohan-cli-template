// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传图片 POST /base/api/BaStyleImage/UploadImage */
export async function BaStyleImageUploadImage(
  body: API.BaStyleImageUploadDto,
  options?: { [key: string]: any },
) {
  return request<API.BaStyleImageUploadDtoApiResult>('/base/api/BaStyleImage/UploadImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除图片 DELETE /base/api/BaStyleImage/${param0} */
export async function BaStyleImageDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BaStyleImageDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResult>(`/base/api/BaStyleImage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
