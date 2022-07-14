// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 报工列表查询 POST /mos/api/ProdOrderCost/GetPageListByParam */
export async function ProdOrderCostGetPageListByParam(
  body: API.ProdOrderCostParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderCostDetailsDtoListApiResult>(
    '/mos/api/ProdOrderCost/GetPageListByParam',
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

/** 报工列表查询 POST /mos/api/ProdOrderCost/GetListByParam */
export async function ProdOrderCostGetListByParam(
  body: API.ProdOrderCostParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ProdOrderCostDetailsDtoListApiResult>(
    '/mos/api/ProdOrderCost/GetListByParam',
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

/** 上传报工文件 POST /mos/api/ProdOrderCost/UploadFile */
export async function ProdOrderCostUploadFile(
  body: {
    file?: string;
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

  return request<API.ProdOrderCostDtoApiResult>('/mos/api/ProdOrderCost/UploadFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 保存报工数据 POST /mos/api/ProdOrderCost/Save */
export async function ProdOrderCostSave(
  body: API.ProdOrderCostDetailsDto[],
  options?: { [key: string]: any },
) {
  return request<API.StringApiResult>('/mos/api/ProdOrderCost/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下载报工模板 GET /mos/api/ProdOrderCost/DownloadTemplate */
export async function ProdOrderCostDownloadTemplate(options?: { [key: string]: any }) {
  return request<any>('/mos/api/ProdOrderCost/DownloadTemplate', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/ProdOrderCost/Delete */
export async function ProdOrderCostDelete(body: string[], options?: { [key: string]: any }) {
  return request<API.BooleanApiResult>('/mos/api/ProdOrderCost/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
