import { Settings as LayoutSettings } from '@ant-design/pro-components';

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
  title: 'GSM-R接口监测数据解析系统',
  pwa: false,
  logo: false,
  iconfontUrl: '',
  splitMenus: false,
  footerRender: false,
};

export default Settings;
