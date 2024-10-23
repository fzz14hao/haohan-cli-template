import { SetStateAction, useEffect, useRef, useState } from 'react';

import { Form } from 'antd';


//@ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { onTableDelete, useHhRequest, useLatest, useValidateFields } from '@haohan/hooks';


interface UserTableProps<T> {
  initData?: T[]; //初始化数据
  initTotal?: number; // 初始化总数
  initPage?: number; //  初始化page
  initSize?: number; // 初始化size
  callbackFun?: Function; // 删除更新 回调函数
  editable?: boolean; // 是否可编辑
  primaryKey?: string; // 主键 editable为true的时候必须 默认为id
}

interface DelProps {
  record: any; // 行数
  index: number; // index
  deleteFn: (re: any) => Promise<any>; // 删除函数
  onOk?: () => void;
  onCancel?: () => void;
  title?: string;
  okText?: string;
  cancelText?: string;
  // removeIndex?:(n:number)=>void;
  showLoading?: boolean; //是否展示全局loading
}

interface OtherProps {
  prohibit?: boolean; //禁用默认setDataSource
  showLoading?: boolean; //是否展示全局loading
  showError?: boolean; // 是否显示错误信息
  isMask?: boolean; //是否展示全局loading
  showMsg?: boolean; //是否显示错误信息
  returnAllData?: boolean; // 是否返回完整data
  [key: string]: any;
}

export const useInitTable = <T>(props?: UserTableProps<T>) => {
  const { initData, initPage = 1, initSize = 100 } = props || {};

  const [dataSource, setDataSource] = useState(initData || []);
  const [pageIndex, setPageIndex] = useState<number>(initPage);
  const [pageSize, setPageSize] = useState<number>(initSize);
  const lastDataSourceRef = useLatest(dataSource);

  /**
   *
   * @param page  当前页码
   * @param pageSize  当前页码数量
   */
  const onChange = (page: SetStateAction<number>, pageSize: any) => {
    setPageIndex(page);
  };

  /**
   *
   * @param current
   * @param size
   */
  const onShowSizeChange = (current: any, size: SetStateAction<number>) => {
    setPageSize(size);
  };

  return {
    dataSource,
    setDataSource,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    onChange,
    onShowSizeChange,
    lastDataSourceRef,
  };
};

/**
 * 表格自定义hooks
 * @param props {}
 * @props initData 初始化数据;
 * @props initTotal 默认总数;
 * @props initPage 初始化page;
 * @props initSize 初始化size;
 * @props callbackFun 回调函数;
 * @props editable;  是否可编辑
 * @props primaryKey  主键 editable为true的时候必须 默认为id
 * @returns  dataSource 数据来源
 * @returns   setDataSource 设置数据来源
 * @returns   addDataSource 累加数据来源
 * @returns   getTableData  获取table数据函数
 * @returns   isLoading loding状态
 * @returns   setIsLoading 设置loading状态
 * @returns   pageIndex 当前页码
 * @returns   setPageIndex 设置页码
 * @returns   pageSize 分页数量
 * @returns   total 总数
 * @returns   setTotal 设置总数
 * @returns   setPageSize 设置分页数量
 * @returns   clearDataSource 清除数据源
 * @returns   removeIndex 删除第几个数据
 * @returns   updatedIndex 更新第几个数据
 * @returns   onLoadMore 加载更多函数
 * @returns   onLoadAll 加载所有
 * @returns   onChange 监听分页函数
 * @returns   onShowSizeChange 监听修改size函数
 * @returns   onTableDelete 删除表格数据函数
 * @returns   firstLoad 是否首次加载
 * @returns   setFirstLoad 设置是否首次加载
 * @returns   lastDataSourceRef 返回最后数据源Ref
 * @returns    tableForm 表格表单
 * @returns    getTableFormDataSource 获取表格表单数据源
 * @returns    setDataSourceOnlyHhId 设置数据源唯一key hhid
 * @returns    runTableValidateFields 校验表格函数
 *
 *
 */
const useHhTable = <T>(props: UserTableProps<T>) => {
  const { callbackFun, initData, editable, primaryKey = 'id' } = props || {};

  const [tableForm] = Form.useForm();
  const tableFormDataSourceRef = useRef<any>({});
  const { runValidateFields } = useValidateFields();

  const {
    dataSource,
    setDataSource,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    onChange,
    onShowSizeChange,
    lastDataSourceRef,
  } = useInitTable(props);

  const { isLoading, setIsLoading, runRequest, total, setTotal } =
    useHhRequest();

  /**是否首次加载 */
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const dataSourceRef = useRef(initData || []);

  const latestDataSource = useLatest(dataSource);

  /**
   * 追加数据
   * @param item
   */
  const addDataSource = (item: T[]) => {
    if (pageIndex === 1) {
      setDataSourceAll([]);
      setDataSourceAll(item);
      dataSourceRef.current = item;
    } else {
      const d = [...latestDataSource.current, ...item];
      setDataSourceAll(d);
      dataSourceRef.current = d;
    }
  };

  /**
   * 清除数据
   */
  const clearDataSource = () => {
    setDataSourceAll([]);
    dataSourceRef.current = [];
  };

  /**
   * 删除 第index个
   * @param index
   */
  const removeIndex = (index: number) => {
    const copy = [...latestDataSource.current];
    copy.splice(index, 1);
    setDataSourceAll(copy);
    dataSourceRef.current = copy;
    callbackFun && callbackFun();
  };

  /**
   * 更新index个
   * @param index
   * @param newItem
   */
  const updatedIndex = (index: number, newItem: any) => {
    const copy = [...latestDataSource.current];
    copy.splice(index, 1, newItem);
    setDataSourceAll(copy);
    dataSourceRef.current = copy;
    callbackFun && callbackFun();
  };

  /**
   * 加载更多
   * @param p 页码
   */
  const onLoadMore = (p: number) => {
    setPageIndex(p);
  };

  /**
   * 加载所有数据
   * @returns
   */
  const onLoadAll = () => {
    setPageIndex(1);
    if (total) {
      setPageSize(total);
      return;
    }
    setPageSize(1000);
  };

  /**
   * 获取表格数据，自动设置setDataSource，返回promise
   * @param fn 获取详情函数
   * @param other {}
   * @param other prohibit 禁用默认setDataSource
   * @returns Promise
   */
  const getTableData = async <R, D>(fn: any, other?: OtherProps) => {
    const { prohibit } = other || {};

    return runRequest<R, D>(fn, other).then((res: any) => {
      setFirstLoad(false);
      if (prohibit) {
        return res;
      }

      if (res) {
        addDataSource(res);
      } else {
        setDataSourceAll(res || []);
        dataSourceRef.current = res || [];
      }

      return res;
    });
  };

  /**
   * 删除table数据
   * @param props {}
   * @props record 删除接口入参
   * @props index  当前行index
   * @props deleteFn 删除函数
   * @props onOk 确认回调
   * @props onCancel 取消回调
   * @props title 标题
   * @props okText 确认按钮文字
   * @props cancelText 取消按钮文字
   */
  const onDelete = (props: DelProps) => {
    onTableDelete({ ...props, removeIndex });
  };

  /**
   * 重新获取数据 从第一页开始
   * @param getData 获取数据函数
   * @returns
   */
  const startRetrieveData = (getData: Function) => {
    if (pageIndex === 1) {
      getData && getData();
      return;
    }

    setPageIndex(1);
  };

  /**
   * 设置数据源的唯一hhId
   * @param data
   */
  const setDataSourceOnlyHhId = (data: any) => {
    const result = data.map((item: any) => {
      return {
        ...item,
        hhId: item['hhId'] ? item['hhId'] : uuidv4(),
      };
    });
    setDataSourceAll(result);
  };

  /**
   *
   * @param data
   */
  const setDataSourceAll = (data: any) => {
    setDataSource(data);

    if (editable) {
      tableFormDataSourceRef.current = flattenData(data);
      tableForm.setFieldsValue(tableFormDataSourceRef.current);
    }
  };

  console.log(tableFormDataSourceRef.current)

  /**
   * 把数据源扁平化
   * @param data
   * @returns
   */
  const flattenData = (data: any[]) => {
    const result: any = {};

    data.forEach((item: { [x: string]: any; id?: any }) => {
      // 使用 item.id 和属性名构建键
      Object.keys(item).forEach((key) => {
        const newKey = `${item[primaryKey]}_hhId_${key}`;
        result[newKey] = item[key];
      });
    });

    return result;
  };

  /**
   * 把数据源还原成数组
   * @param flattened
   * @returns
   */
  const unflattenData = (flattened: { [x: string]: any }) => {
    const result: any[] = [];

    // 创建一个映射表，用于存储 id 对应的对象
    const map: { [x: string]: any } = {};

    // 遍历平铺后的对象
    Object.keys(flattened).forEach((key) => {
      // 提取 id 和属性名
      const keys = key.split('_hhId_'); // 假设 id 总是两个字符
      const propName = keys[1];
      const id = keys[0];

      // 如果还没有这个 id 的对象，则创建一个
      if (!map[id]) {
        map[id] = { id };
      }

      // 将属性添加到对应的对象上
      map[id][propName] = flattened[key];
    });

    // 将 map 中的对象提取出来放入结果数组
    Object.values(map).forEach((obj) => {
      result.push(obj);
    });

    return result;
  };

  /**
   * 获取表格表单数据
   * @returns
   */
  const getTableFormDataSource = async () => {
    if (editable) {
      if (!(await runValidateFields(tableForm))) return;

      const data = tableForm.getFieldsValue();
      const result = unflattenData({
        ...tableFormDataSourceRef.current,
        ...data,
      });

      setDataSource(result);
      return result;
    }
    return dataSource;
  };

  /**
   * 校验表格表单
   * @returns
   */
  const runTableValidateFields = async () => {
    return await runValidateFields(tableForm);
  };

  const setTableFormDataSource = (
    keyName: string,
    record: any,
    rowIndex: number,
  ) => {
    const index = latestDataSource.current.findIndex(
      (item: any) =>
        item[primaryKey] === record[primaryKey] && record[primaryKey],
    );

    const temp: any[] = [...lastDataSourceRef.current];
    const nowIndex = index > -1 ? index : rowIndex;
    temp[nowIndex] = { ...temp[nowIndex], ...record };
    setDataSourceAll(temp);
  };

  useEffect(() => {
    setDataSourceAll(initData);
  }, []);

  return {
    dataSource,
    setDataSource,
    addDataSource,
    getTableData,
    isLoading,
    setIsLoading,
    pageIndex,
    setPageIndex,
    pageSize,
    total,
    setTotal,
    setPageSize,
    clearDataSource,
    removeIndex,
    updatedIndex,
    onLoadMore,
    onLoadAll,
    onChange,
    onShowSizeChange,
    onTableDelete: onDelete,
    firstLoad,
    setFirstLoad,
    startRetrieveData,
    lastDataSourceRef,
    tableForm,
    getTableFormDataSource,
    setDataSourceOnlyHhId,
    runTableValidateFields,
    setTableFormDataSource
  };
};

export default useHhTable;
