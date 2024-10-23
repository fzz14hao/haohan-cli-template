import { Form, FormItemProps, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { useState } from 'react';

const HhTableForm = (props: any) => {
  const { record, onlyId, keyName, formItemProps, rules } = props;

  const [tableForm] = Form.useForm();

  const [dataSource, setDateSource] = useState([
    {
      id: '0001',
      prodOrderNo: '0001',
      price: '100',
      name: '我是数据1',
    },
    {
      id: '0002',
      prodOrderNo: '0002',
      price: '100',
      name: '我是数据2',
    },
  ]);
  return (
    <Form form={tableForm} component={false}>
      <HhTable
        tableProps={{ isLoading: isLoading || isLoadingForm }}
        hasSet={true}
        dataSource={dataSource}
        column={column}
      />
    </Form>
  );
};

export default HhTableForm;
