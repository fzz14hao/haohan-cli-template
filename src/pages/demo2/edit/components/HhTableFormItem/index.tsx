import { Form, FormItemProps, Input } from 'antd';
import { Rule } from 'antd/lib/form';

type HhTableFormItemProps = {
  record?: any;
  onlyId: string;
  keyName: string;
  formItemProps?: FormItemProps;
  rules?: Rule[];
  children: React.ReactNode;
};
const HhTableFormItem = (props: HhTableFormItemProps) => {
  const { record, onlyId, keyName, formItemProps, rules } = props;
  return (
    <Form.Item
      name={`${onlyId}_hhId_${keyName}`}
      style={{ margin: 0 }}
      rules={rules}
      {...formItemProps}
    >
      {props.children}
    </Form.Item>
  );
};

export default HhTableFormItem;
