import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Button, FormInstance } from 'antd';
import { memo, useRef } from 'react';

const Add = memo(() => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {};

  return (
    <div>
      <ModalForm
        title={'添加设备'}
        trigger={
          <Button type="primary">
            <PlusOutlined />
            添加设备
          </Button>
        }
        onFinish={(values) => onFinish(values)}
        submitTimeout={5000}
        autoFocusFirstInput={true}
        formRef={formRef}
        modalProps={{
          width: `770px`,
          maskClosable: false,
          destroyOnClose: true, // 关闭后销毁子元素
          onCancel: () => {
            // 一些清除操作
            formRef?.current?.resetFields();
            // setOrganId(undefined);
          },
        }}
      >
        <ProForm.Group>
          <ProFormDigit
            width="md"
            name="devID"
            label="设备标号"
            placeholder="请输入设备标号"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText
            width="md"
            name="devName"
            label="名称"
            placeholder="请输入名称"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormDigit
            width="md"
            name="cityID"
            label="城市编号"
            placeholder="请输入城市编号"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormDigit
            width="md"
            name="omcID"
            label="OMC ID"
            placeholder="请输入OMC ID"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormText
            width="md"
            name="vendor"
            label="厂商"
            placeholder="请输入厂商"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText
            width="md"
            name="hostIP"
            label="IP地址"
            placeholder="请输入IP"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText
            width="md"
            name="hostUser"
            label="用户名"
            placeholder="请输入用户名"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormText
            width="md"
            name="hostPwd"
            label="密码"
            placeholder="请输入密码"
            rules={[{ max: 18, message: '请输入18位以下内容' }]}
          />
          <ProFormText
            width="md"
            name="hostSign"
            label="提示符"
            placeholder="请输入提示符"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 30, message: '请输入30位以下内容' },
            ]}
          />
          {/* <ProFormDatePicker width="md" name="birthday" label="出生日期" /> */}
          {/* <ProFormRadio.Group
            width="md"
            name="adminFlag"
            label="是否为管理员"
            rules={[{ required: true, message: '这是必选项' }]}
            initialValue="0"
            options={[
              { label: '是', value: '1' },
              { label: '否', value: '0' },
            ]}
          />
          <ProFormRadio.Group
            width="sm"
            name="userStatus"
            label="状态"
            initialValue="1"
            rules={[{ required: true, message: '这是必选项' }]}
            options={[
              { label: '开启', value: '1' },
              { label: '关闭', value: '0' },
            ]}
          /> */}
          {/* <ProFormTextArea width="md" name="remarks" label="备注" placeholder="请输入描述信息" /> */}
        </ProForm.Group>
      </ModalForm>
    </div>
  );
});

export default Add;
