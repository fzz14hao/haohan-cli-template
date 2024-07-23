import { useState } from 'react';
import { Button, Collapse, Form, message, Space, Tabs } from 'antd';
import { history, useParams } from 'umi';
import { HhTable, BackBar, HhForm, HhTitleRow } from '@haohan/ui';
import { useGetById, useHhForm, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import {
  CostSharingGetById,
  CostSharingGetListByCostSharingDetail,
  CostSharingSaveCostSharing,
} from '@/services/Fi/CostSharing';
import DetailsModal from './components/DetailsModal';
import getFormList from './config/formList';
import getColumn from './config/column';

const Edit = () => {
  const params: { id: string } = useParams();
  const { isLoading, runRequest } = useHhRequest();

  const {
    form,
    formData,
    isDisableForm,
    setDisableForm,
    onValuesChange,
    setFieldsValue,
    getByDetails,
    submitForm,
    isLoading: isLoadingForm,
    runValidateFields,
  } = useHhForm<any>({
    initFormData: {},
  });

  const [visible, setVisible] = useState<boolean>(false);
  const [detailsData, setDetailsData] = useState<any[]>([]);
  const [rowData, setRowData] = useState<any>({});

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

  const onEdit = (value: any, record: any) => {
    setRowData(record);
    setVisible(true);
  };

  const onAddItems = () => {
    setRowData({});
    setVisible(true);
  };

  useGetById(() => {
    getById();
  });

  const column = getColumn({ formData, onEdit ,isDisableForm});

  const formList = getFormList({
    formData,
    setFieldsValue,
    isDisableForm,
  });

  return (
    <div>
      <BackBar />
      <HhTitleRow
        autoTitle
        title={params.id != '0' ? i18next.t('编辑') : i18next.t('新建')}
        renderRight={
          <>
            <Button type="primary" onClick={() => setDisableForm(!isDisableForm)}>
              {i18next.t(isDisableForm ? '编辑' : '取消编辑')}
            </Button>

            <Button
              disabled={isDisableForm}
              loading={isLoading || isLoadingForm}
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
        <Collapse.Panel header={i18next.t('基本信息')} key="1">
          <HhForm formProps={{ form, onValuesChange }} hasSet={true} formData={formList} />
        </Collapse.Panel>
      </Collapse>

      <Tabs>
        <Tabs.TabPane tab={i18next.t('明细')} key="1">
          <Space className="cus-mb-10">
            <Button type="primary" onClick={onAddItems} disabled={isDisableForm}>
              {i18next.t('添加')}
            </Button>
          </Space>
          <HhTable
            tableProps={{ isLoading: isLoading || isLoadingForm }}
            hasSet={true}
            dataSource={formData?.details || []}
            column={column}
          />
        </Tabs.TabPane>
      </Tabs>

      {visible && (
        <DetailsModal
          visible={visible}
          setVisible={setVisible}
          rowData={rowData}
          onOk={() => setVisible(false)}
        ></DetailsModal>
      )}
    </div>
  );
};

export default Edit;
