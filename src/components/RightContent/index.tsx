/*
 * @Description:
 * @Version:
 * @Author: wg 2450925422
 * @Date: 2022-06-20 09:52:27
 * @LastEditors: Seven
 * @LastEditTime: 2022-06-23 17:31:25
 */
import { outLogin } from '@/services/ant-design-pro/api';
import { PoweroffOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { stringify } from 'querystring';
import React from 'react';
import { history, useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await outLogin();
    const { query = {}, search, pathname } = history.location;
    const { redirect } = query;
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };
  return (
    <Space className={className}>
      {/* <NoticeIcon></NoticeIcon> */}
      <Avatar />
      <PoweroffOutlined className={styles.action} onClick={() => loginOut()} />
    </Space>
  );
};

export default GlobalHeaderRight;

{
  /* <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      /> */
}
