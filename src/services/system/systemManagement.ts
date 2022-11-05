import { request } from 'umi';

// 运行中列表
export const runList = (params: any) =>
  request('/api/', {
    method: 'GET',
    data: {
      ...params,
    },
  });

// 环境信息
export const envDetail = (params: any) => request('/api/page');

// 接口列表
export const interfaceList = (params: any) =>
  request('/api/page', {
    method: 'GET',
    data: {
      ...params,
    },
  });

// 日志列表
export const logList = (params: any) =>
  request('/api/page', {
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
