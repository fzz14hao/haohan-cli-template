import { useState } from 'react';
import { Button, Divider, Collapse, Form, message } from 'antd';
import { history, useParams } from 'umi';
import { HhTable, BackBar, HhForm, HhTitleRow, SearchArPeriod } from '@haohan/ui';
import { useGetById, useHhForm, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';

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
  const { isLoading, runRequest } = useHhRequest();

  const {
    form,
    formData,
    isDisableForm: isEdit,
    setDisableForm: setIsEdit,
    onValuesChange,
    setFieldsValue,
    getByDetails,
    submitForm,
    runValidateFields,
  } = useHhForm<any>({
    initFormData: {},
  });

  const [visible, setVisible] = useState<boolean>(false);
  const [detailsData, setDetailsData] = useState<any[]>([]);
  const [visibleArPeriod, setVisibleArPeriod] = useState<boolean>(false);

  // 获取详情
  const getById = () => {
    const param: API.CostSharingGetByIdParams = {
      id: params.id,
    };
    getByDetails(CostSharingGetById(param));
  };

  const onSave = async () => {
    if (!(await runValidateFields(form))) return;

    const param: API.CostParamDto = {
      id: '0',
      ...formData,
    };
    submitForm<API.CostSharingDtoApiResult, API.CostSharingDto>(
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
    runRequest<API.BooleanApiResult, boolean>(
      CostSharingCostExpense({ id: formData?.id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('分摊成功');
        getById();
      }
    });
  };

  const onCancelExpense = () => {
    runRequest<API.BooleanApiResult, boolean>(
      CostSharingCancelCostExpense({ id: formData?.id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('取消成功');
        getById();
      }
    });
  };

  const onEdit = (value: any, record: any) => {
    runRequest<
      API.CostSharProdOrderCostDetailDtoListApiResult,
      API.CostSharProdOrderCostDetailDto[]
    >(CostSharingGetListByCostSharingDetail({ detailId: record?.id }, { showMsg: true })).then(
      (res) => {
        if (res) {
          setVisible(true);
          setDetailsData(res);
        }
      },
    );
  };

  const onSelectCallBack = (value: any, allValues: any) => {
    const { financialDate, id } = allValues;

    const obj = {
      periodId: id,
      financialDate,
    };
    setFieldsValue({ ...formData, ...obj });
  };

  useGetById(() => {
    getById();
  });

  const column = getColumn({ basicInfo: formData, onEdit });

  const formList = getFormList({
    basicInfo: formData,
    setData: setFieldsValue,
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
            {formData?.status === 1 && (
              <Button type="primary" onClick={onCancelExpense} disabled={isEdit}>
                {i18next.t('取消分摊')}
              </Button>
            )}
            {formData?.status === 0 && (
              <Button type="primary" onClick={onCostExpense} disabled={isEdit}>
                {i18next.t('分摊')}
              </Button>
            )}

            <Button
              disabled={isEdit || formData?.status === 1}
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
        dataSource={formData?.details || []}
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
            factoryId: formData?.factoryId,
          }}
        ></SearchArPeriod>
      )}
    </div>
  );
};

export default CostExpenseEdit;
