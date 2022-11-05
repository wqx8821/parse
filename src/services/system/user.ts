import { request } from 'umi';
let BaseData = {};

// 用户退出
export const userLogout = () => request('/api/auth?exit=exit');

// 用户登录
export const userAdd = (params: any) =>
  request('/api/auth', {
    method: 'POST',
    data: {
      userName: params.username,
      password: params.password,
      user_login: '进入',
    },
  });
