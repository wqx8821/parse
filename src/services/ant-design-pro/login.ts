/*
 * @Description:
 * @Version:
 * @Author: wg 2450925422
 * @Date: 2022-06-20 09:52:27
 * @LastEditors: Seven
 * @LastEditTime: 2022-06-22 10:53:11
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
