import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { Button, FormInstance } from 'antd';
import { memo, useRef } from 'react';

const AddRoleModal = memo(() => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {};

  return (
    <div>
      <ModalForm
        title={'新建模板文件'}
        trigger={
          <Button type="primary">
            <PlusOutlined />
            新建模板文件
          </Button>
        }
        onFinish={(values) => onFinish(values)}
        submitTimeout={5000}
        autoFocusFirstInput={true}
        formRef={formRef}
        modalProps={{
          width: `370px`,
          maskClosable: false,
          destroyOnClose: true, // 关闭后销毁子元素
          onCancel: () => {
            // 一些清除操作
            formRef?.current?.resetFields();
          },
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="devName"
            label="文件名"
            placeholder="请输入文件名"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
});

export default AddRoleModal;
