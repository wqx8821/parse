import { login } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import { history, useModel } from 'umi';
import styles from './index.less'; // 消息提示

// 登录提示
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  // 获取用户信息
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  }; // 登录逻辑

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });
      // console.log(msg);
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */

        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        return;
      }

      console.log(msg); // 如果失败去设置用户错误信息

      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBg}>
        <div className={styles.content}>
          <LoginForm
            logo={<img alt="logo" src="/logo.svg" />}
            title="GSM-R数据解析系统"
            initialValues={{
              autoLogin: true,
            }}
            // 登录逻辑方法
            onFinish={async (values) => {
              await handleSubmit(values as API.LoginParams);
            }}
          >
            <>
              <ProFormText
                className={styles.loginInput}
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入用户名称'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                className={styles.loginInput}
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入登录密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
            {/* 记住密码 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              {/* <Tooltip placement="top" title={text} overlayStyle={{ width: '180px' }}>
                <span style={{ color: '#0081fe' }}>忘记密码</span>
              </Tooltip> */}
            </div>
          </LoginForm>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          <span>Copyright © www.yunxinhai.com, All Rights Reserved.</span>
        </p>
        <p>
          <span>GSM-R接口监测数据解析系统</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
