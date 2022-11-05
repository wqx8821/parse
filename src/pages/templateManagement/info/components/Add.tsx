import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Button, FormInstance } from 'antd';
import { memo, useRef } from 'react';

const AddRoleModal = memo(() => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {};

  return (
    <div>
      <ModalForm
        title={'新建模板'}
        trigger={
          <Button type="primary">
            <PlusOutlined />
            新建模板
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
          },
        }}
      >
        <ProForm.Group>
          <ProFormDigit
            width="md"
            name="tmpID"
            label="模板编号"
            placeholder="请输入模板编号"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormDigit
            width="md"
            name="tmpType"
            label="模板类型"
            placeholder="请输入文件名"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText width="md" name="edition" label="模板描述" placeholder="请输入模板描述" />
          <ProFormText width="md" name="tmpName" label="版本编号" placeholder="请输入版本编号" />
          <ProFormText
            width="md"
            name="tmpFileName"
            label="模板文件名"
            placeholder="请输入文件名"
            rules={[{ required: true, message: '这是必选项' }]}
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
});

export default AddRoleModal;
