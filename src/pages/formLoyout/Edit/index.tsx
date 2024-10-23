import { useState } from 'react';
import { Button, Collapse, message, Tabs, Space, Form, Input, Checkbox, Row, Col } from 'antd';
import { history, useParams } from 'umi';
import { HhTable, BackBar, HhForm, HhTitleRow } from '@haohan/ui';
import { useGetById, useHhForm, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import { CostSharingGetById, CostSharingSaveCostSharing } from '@/services/Fi/CostSharing';
import DetailsModal from './components/DetailsModal';
import getFormList from './config/formList';
import getColumn from './config/column';
import type { ProCardTabsProps } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';

const { Panel } = Collapse;

const CostExpenseEdit = () => {
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
  const [rowData, setRowData] = useState<{ [key: string]: any }>({});

  const [tab, setTab] = useState('tab1');
  const [tabPosition, setTabPosition] = useState<ProCardTabsProps['tabPosition']>('top');

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
          history.replace(`/demo3/edit/${res.id}`);
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

  const column = getColumn({ formData, onEdit });

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

      <ProCard
        tabs={{
          tabPosition,
          activeKey: tab,

          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab1" tab="产品一">
          <Form>
            <ProCard wrap>
              <ProCard colSpan={{ xl: 10 }} bordered>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
              </ProCard>

              <ProCard colSpan={{ xl: 14 }} bordered>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                </Row>
              </ProCard>
              <ProCard colSpan={{ xl: 24 }} bordered>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                </Row>
              </ProCard>
            </ProCard>
          </Form>
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="产品二">
          <HhForm formProps={{ form, onValuesChange }} hasSet={true} formData={formList} />
        </ProCard.TabPane>
      </ProCard>

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

export default CostExpenseEdit;
