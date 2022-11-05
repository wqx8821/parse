import { request } from 'umi';

// 任务列表
export const deviceList = (params: any) =>
  request('/api/page/taskList', {
    method: 'GET',
    data: {
      ...params,
    },
  });

// 新增
export const deviceAdd = (params: any) =>
  request('/api/', {
    method: 'POST',
    data: params,
  });

// 删除
export const deviceDelete = (idList: any) =>
  request('/api/', {
    method: 'POST',
    data: idList,
  });

// 用户管理 根据ID查询详情
export const getDeviceDetail = (id: string | number) =>
  request(`/api/?id=${id}`, {
    method: 'POST',
  });

// 编辑
export const deviceEdit = (params: any) =>
  request('/api/', {
    method: 'POST',
    data: params,
  });
