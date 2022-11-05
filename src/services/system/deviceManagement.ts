import { request } from 'umi';

// 设备列表
export const deviceList = (params: any) =>
  request('/api/page/deviceList', {
    method: 'GET',
    data: {
      devID: params.devID,
      eclipse: params.eclipse,
      omcID: params.omcID,
    },
  });
