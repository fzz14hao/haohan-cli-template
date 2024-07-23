import { Button, Collapse, message } from 'antd';
import { history, useParams } from 'umi';
import { BackBar, HhForm, HhTitleRow } from '@haohan/ui';
import { useGetById, useHhForm, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import { CostSharingGetById, CostSharingSaveCostSharing } from '@/services/Fi/CostSharing';
import getFormList from './config/formList';

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
          history.replace(`/demo4/edit/${res.id}`);
        }

        message.success(i18next.t(text));
      }
    });
  };

  useGetById(() => {
    getById();
  });

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
    </div>
  );
};

export default Edit;
