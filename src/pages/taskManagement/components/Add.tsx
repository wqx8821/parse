import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, FormInstance } from 'antd';
import { memo, useRef } from 'react';

const AddRoleModal = memo(() => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {};

  return (
    <div>
      <ModalForm
        title={'添加任务'}
        trigger={
          <Button type="primary">
            <PlusOutlined />
            添加任务
          </Button>
        }
        onFinish={(values) => onFinish(values)}
        submitTimeout={5000}
        autoFocusFirstInput={true}
        formRef={formRef}
        modalProps={{
          width: `1100px`,
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
            name="devName"
            label="任务号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormText
            width="md"
            name="devName"
            label="任务描述"
            placeholder="请输入描述"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="设备号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="设备端口"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />

          <ProFormSelect
            width="md"
            name="adminFlag"
            label="采集周期"
            rules={[{ required: true, message: '这是必选项' }]}
            initialValue="0"
            options={[
              { label: '一直', value: '2' },
              { label: '天', value: '1' },
              { label: '小时', value: '0' },
              { label: '小时', value: '0' },
              { label: '小时', value: '0' },
              { label: '小时', value: '0' },
              { label: '小时', value: '0' },
            ]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="解析模板号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="分发模板号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormText
            width="md"
            name="devName"
            label="数据库驱动"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormText
            width="md"
            name="cityID"
            label="数据库url"
            placeholder="请输入采集类型"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText
            width="md"
            name="cityID"
            label="当前时间点"
            placeholder="请输入当前时间点"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormText
            width="md"
            name="cityID"
            label="结束时间点"
            placeholder="请输入结束时间点"
            rules={[{ required: true, message: '这是必选项' }]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="解析器编号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormDigit
            width="md"
            name="devName"
            label="设备分发器编号号"
            placeholder="请输入描述"
            rules={[
              { required: true, message: '这是必选项' },
              { max: 18, message: '请输入18位以下内容' },
            ]}
          />
          <ProFormRadio.Group
            width="md"
            name="adminFlag"
            label="采集类型"
            rules={[{ required: true, message: '这是必选项' }]}
            initialValue="0"
            options={[
              { label: 'ftp', value: '2' },
              { label: '数据库', value: '1' },
              { label: '本地文件', value: '0' },
            ]}
          />
          <ProFormRadio.Group
            width="md"
            name="adminFlag"
            label="是否启用"
            rules={[{ required: true, message: '这是必选项' }]}
            initialValue="0"
            options={[
              { label: '是', value: '1' },
              { label: '否', value: '0' },
            ]}
          />
          <ProFormTextArea width="md" name="remarks" label="采集路径" placeholder="是否启用" />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
});

export default AddRoleModal;
