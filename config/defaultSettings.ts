import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '浩汉智能ERP',
  pwa: false,
  logo: 'https://sps-training-1305170146.cos.ap-shanghai.myqcloud.com/erp/pheyma.png',
  iconfontUrl: '',
};



export default Settings;
