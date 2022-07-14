// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据条件查询分页数据 POST /mos/api/ComponentDesignBase/GetPageListByParm */
export async function ComponentDesignBaseGetPageListByParm(
  body: API.CompoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDesignBaseDtoListApiResult>(
    '/mos/api/ComponentDesignBase/GetPageListByParm',
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

/** 根据Id获取详情 GET /mos/api/ComponentDesignBase/GetById */
export async function ComponentDesignBaseGetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ComponentDesignBaseGetByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDesignBaseDtoApiResult>('/mos/api/ComponentDesignBase/GetById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据条件获取数据 POST /mos/api/ComponentDesignBase/GetListByParm */
export async function ComponentDesignBaseGetListByParm(
  body: API.CompoQueryParamDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDesignBaseDtoListApiResult>(
    '/mos/api/ComponentDesignBase/GetListByParm',
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

/** 新增或更新 POST /mos/api/ComponentDesignBase/AddOrUpdate */
export async function ComponentDesignBaseAddOrUpdate(
  body: API.ComponentDesignBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ComponentDesignBaseDtoApiResult>('/mos/api/ComponentDesignBase/AddOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /mos/api/ComponentDesignBase/Delete */
export async function ComponentDesignBaseDelete(
  body: API.ComponentDesignBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.BooleanApiResult>('/mos/api/ComponentDesignBase/Delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
