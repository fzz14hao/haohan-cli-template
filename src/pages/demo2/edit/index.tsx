import { useState } from 'react';
import { Button, Divider, Collapse, Form, message } from 'antd';
import { history, useParams } from 'umi';
import { HhTable, BackBar, HhForm, HhTitleRow, SearchArPeriod } from '@haohan/ui';
import { useAsync, useGetById, useValidateFields, useDisableEdit } from '@haohan/hooks';
import i18next from 'i18next';

import {
  CostSharingCancelCostExpense,
  CostSharingCostExpense,
  CostSharingGetById,
  CostSharingGetListByCostSharingDetail,
  CostSharingSaveCostSharing,
} from '@/services/Fi/CostSharing';
import DetailsModal from './components/DetailsModal';
import getFormList from './config/formList';
import getColumn from './config/column';

const { Panel } = Collapse;

const CostExpenseEdit = () => {
  const params: { id: string } = useParams();
  const { isLoading, runSync } = useAsync();
  const [basicInfo, setBasicInfo] = useState<any>({});
  const [isEdit, setIsEdit] = useDisableEdit(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [detailsData, setDetailsData] = useState<any[]>([]);
  const [visibleArPeriod, setVisibleArPeriod] = useState<boolean>(false);

  const [form] = Form.useForm();
  const { runValidateFields } = useValidateFields();

  //  设置data
  const setData = (data: any) => {
    setBasicInfo(data);
    form.setFieldsValue({ ...data });
  };
  // 监听表单
  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log('监听表单', changedValues, allValues);
    setData({ ...basicInfo, ...allValues });
  };

  // 获取详情
  const getById = () => {
    const param: API.CostSharingGetByIdParams = {
      id: params.id,
    };
    runSync<API.CostSharingDtoApiResult, API.CostSharingDto>(CostSharingGetById(param)).then(
      (res) => {
        if (res) {
          setData(res);
        }
      },
    );
  };

  const onSave = async () => {
    if (!(await runValidateFields(form))) return;

    const param: API.CostParamDto = {
      id: '0',
      ...basicInfo,
    };
    runSync<API.CostSharingDtoApiResult, API.CostSharingDto>(
      CostSharingSaveCostSharing(param),
    ).then((res) => {
      if (res) {
        let text = '新增成功';
        if (params.id !== '0') {
          text = '更新成功';
          getById();
        } else {
          history.replace(`/demo2/edit/${res.id}`);
        }

        message.success(i18next.t(text));
      }
    });
  };

  const onCostExpense = () => {
    runSync<API.BooleanApiResult, boolean>(
      CostSharingCostExpense({ id: basicInfo?.id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('分摊成功');
        getById();
      }
    });
  };

  const onCancelExpense = () => {
    runSync<API.BooleanApiResult, boolean>(
      CostSharingCancelCostExpense({ id: basicInfo?.id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('取消成功');
        getById();
      }
    });
  };

  const onEdit = (value: any, record: any) => {
    runSync<API.CostSharProdOrderCostDetailDtoListApiResult, API.CostSharProdOrderCostDetailDto[]>(
      CostSharingGetListByCostSharingDetail({ detailId: record?.id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        setVisible(true);
        setDetailsData(res);
      }
    });
  };

  const onSelectCallBack = (value: any, allValues: any) => {
    const { financialDate, id } = allValues;

    const obj = {
      periodId: id,
      financialDate,
    };
    setData({ ...basicInfo, ...obj });
  };

  useGetById(() => {
    getById();
  });

  const column = getColumn({ basicInfo, onEdit });

  const formList = getFormList({
    basicInfo,
    setData,
    isEdit,
    setVisibleArPeriod,
  });

  return (
    <div>
      <BackBar />
      <HhTitleRow
        autoTitle
        title={params.id != '0' ? i18next.t('编辑') : i18next.t('新建')}
        renderRight={
          <>
            <Button type="primary" onClick={() => setIsEdit(!isEdit)}>
              {i18next.t(isEdit ? '编辑' : '取消编辑')}
            </Button>
            {basicInfo?.status === 1 && (
              <Button type="primary" onClick={onCancelExpense} disabled={isEdit}>
                {i18next.t('取消分摊')}
              </Button>
            )}
            {basicInfo?.status === 0 && (
              <Button type="primary" onClick={onCostExpense} disabled={isEdit}>
                {i18next.t('分摊')}
              </Button>
            )}

            <Button
              disabled={isEdit || basicInfo?.status === 1}
              type="primary"
              onClick={() => {
                onSave();
              }}
            >
              {i18next.t('保存')}
            </Button>
          </>
        }
      />

      <Collapse defaultActiveKey={['1']}>
        <Panel header={i18next.t('基本信息')} key="1">
          <HhForm formProps={{ form, onValuesChange }} hasSet={true} formData={formList} />
        </Panel>
      </Collapse>

      <Divider />

      <HhTable
        tableProps={{ isLoading }}
        hasSet={true}
        dataSource={basicInfo?.details || []}
        column={column}
      />

      {visible && (
        <DetailsModal
          visible={visible}
          setVisible={setVisible}
          data={detailsData}
          onOk={() => setVisible(false)}
        ></DetailsModal>
      )}
      {visibleArPeriod && (
        <SearchArPeriod
          visible={visibleArPeriod}
          selectCallBack={onSelectCallBack}
          onIsModalShow={setVisibleArPeriod}
          otherParam={{
            factoryId: basicInfo?.factoryId,
          }}
        ></SearchArPeriod>
      )}
    </div>
  );
};

export default CostExpenseEdit;
