import { request } from 'umi';
let BaseData = {};

// 用户管理 新增
export const userAdd = (params: any) =>
  request('/api/system/sysUser/add', {
    method: 'POST',
    data: Object.assign(BaseData, params),
  });

// 用户管理删除
export const userDelete = (idList: any) =>
  request('/api/system/sysUser/delete', {
    method: 'POST',
    data: idList,
  });

// 用户管理 表格数据分页查询 /api/system/sysOrgan/list
export const getUserTableList = (params?: {
  page?: number;
  pageSize?: number;
  organId: React.Key | number | undefined;
  username?: string;
  memberName?: string;
  organizerFlag: React.Key | number | undefined;
}) =>
  request('/api/system/sysUser/pagelist', {
    method: 'POST',
    data: params, // 区分承办单位与用户管理
  });

// 用户管理 表格数据不分页查询
export const getUserList = () => request('/api/system/sysUser/list', { method: 'POST' });
// 用户管理编辑
export const userEdit = (params: any) =>
  request('/api/system/sysUser/edit', {
    method: 'POST',
    data: Object.assign(BaseData, params),
  });

// 用户管理 根据ID查询详情
export const getUserDetail = (id: string | number) =>
  request(`/api/system/sysUser/getSysUser?id=${id}`, {
    method: 'POST',
  });
