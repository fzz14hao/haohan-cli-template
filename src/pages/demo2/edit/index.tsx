import { Button, message, Space, Tabs } from 'antd';
import { useParams, history } from 'umi';
import {
  HhTitleRow,
  HhTabsAndProForm,
  HhBackBar,
  HhPageDetailsFlexColumn,
  HhTable,
  HhButtonModal,
} from '@haohan/ui';
import { useGetById, useHhRequest, useHhProForm, useHhTable } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import getFormList from './config/formList';
import getColumns from './config/columns';
import getOtherFormList from './config/otherFormList';
import { TabItemTypeProps } from '@haohan/ui/es/Components/HhTabsAndProForm/TabsAndFormProps';
import AddModal from './components/AddModal';
import { ComponentDesignBaseAddOrUpdate, ComponentDesignBaseGetById } from '@/services/Mos/ComponentDesignBase';

const init = {};
const EditDemo2 = () => {
  const params: { id: string } = useParams();
  //通用内部请求函数
  const { isLoading, runRequest } = useHhRequest();

  //HHProForm 表单hooks
  const { hhProForm, hhProFormData, actions, isDisable, defaultActiveKey, setDefaultActiveKey } =
    useHhProForm({
      initFormData: init,
      initDisable: true,
    });

  //HhTable 表格hooks
  const { dataSource, setDataSource } = useHhTable<API.ComponentDto>({ initData: [] });

  // 获取详情
  const getById = () => {
    const param = {
      id: params.id as any,
    };
    //Todo 替换替换为获取详情函数
    runRequest(ComponentDesignBaseGetById(param)).then((res) => {
      if (res) {
        actions.setProFormData(res);

        // 处理详情数据
        if (res.details) {
          setDataSource(res.details || []);
        }
      }
    });
  };

  useGetById(() => {
    getById();
  });

  const onSave = async () => {
    if (!(await actions.validateFields())) return;

    const param = {
      id: '0',
      ...actions.getFieldsValue(),
    };
    //Todo 替换替换为保存函数
    runRequest(ComponentDesignBaseAddOrUpdate(param)).then((res) => {
      if (res) {
        let text = i18next.t('$HHf0bc.addedsuccessfully.新增成功$HH');
        if (params.id !== '0') {
          text = i18next.t('$HHc4dc.updatesuccessful.更新成功$HH');
          getById();
        } else {
          history.replace(`/demo2/edit/${res}`);
        }

        message.success(i18next.t(text));
      }
    });
  };

  // 表单列表
  const formList = getFormList({
    hhProFormData,
    setFieldsValue: actions.setProFormData,
    isDisable,
  });
  // 其他表单列表
  const otherFormList = getOtherFormList({
    hhProFormData,
    setFieldsValue: actions.setProFormData,
    isDisable,
  });

  // 初始表单tab项
  const initialItems: TabItemTypeProps[] = [
    {
      label: i18next.tEn('$HHe144.basicInfo.Basic Info$HH'),
      key: 'basicInfo',
      formItems: formList,
      actions: actions,
      antdFormProps: { form: hhProForm },
    },
    {
      label: i18next.tEn('$HHe145.OtherInfo.Other Info$HH'),
      key: 'otherInfo',
      formItems: otherFormList,
      actions: actions,
      antdFormProps: { form: hhProForm },
    },
  ];

  //  明显表格列配置
  const columns = getColumns({});

  return (
    <HhPageDetailsFlexColumn>
      {/* header区域  */}
      <HhPageDetailsFlexColumn.Header>
        {/* 返回 */}
        <HhBackBar />
        {/* 标题 */}
        <HhTitleRow
          autoTitle
          title={i18next.tEn('$HH2763.demo2Detail.Demo2 Detail$HH')}
          renderRight={
            <>
              {/* 更多操作按钮区域  固定：编辑 保存*/}
              {/* 启动编辑禁止编辑 */}
              <Button type="primary" onClick={actions.setDisableFormToggle}>
                {isDisable
                  ? i18next.tEn('$HHe51d.edit.Edit$HH')
                  : i18next.tEn('$HH9b30.cancel.Cancel$HH')}
              </Button>
              {/* 保存按钮 */}
              <Button disabled={isDisable} type="primary" loading={isLoading} onClick={onSave}>
                {i18next.tEn('$HHa14a.save.Save$HH')}
              </Button>
              {/* 重置按钮 */}
              <Button
                disabled={isDisable}
                type="primary"
                loading={isLoading}
                onClick={actions.resetFields}
              >
                {i18next.tEn('$HHa1s.Reset.Reset$HH')}
              </Button>
            </>
          }
        />

        {/* 表单区域 */}
        <HhTabsAndProForm
          defaultActiveKey={defaultActiveKey}
          changeActiveKey={setDefaultActiveKey}
          tabsItems={initialItems}
          isLoading={isLoading}
        ></HhTabsAndProForm>
      </HhPageDetailsFlexColumn.Header>

      {/* body区域  */}
      <HhPageDetailsFlexColumn.Body>
        <Tabs>
          <Tabs.TabPane key="details" tab={i18next.tEn('Details')}>
            {/* 明显表格区域 */}
            <Space>
              <HhButtonModal Components={AddModal} parentData={{}}>
                {i18next.tEn('Add')}
              </HhButtonModal>
            </Space>
            <HhTable
              tableProps={{ isLoading }}
              hasSet={true}
              dataSource={dataSource}
              column={columns}
            />
          </Tabs.TabPane>
        </Tabs>
      </HhPageDetailsFlexColumn.Body>
    </HhPageDetailsFlexColumn>
  );
};

export default EditDemo2;
