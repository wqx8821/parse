import { deviceEdit, getDeviceDetail } from '@/services/system/taskManagement';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageLoading,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, FormInstance, message } from 'antd';
import { memo, useRef, useState } from 'react';

interface IProps {
  id: string | number;
}

const Add = memo((props: IProps) => {
  const formRef = useRef<FormInstance>();
  const [detail, setDetail] = useState(null);

  const onFinish = async (values: any) => {
    console.log(values);
    let result = await deviceEdit(values);
    if (result) message.success('保存成功');
  };

  const getDetails = async (id: string | number) => {
    let detail = await getDeviceDetail(id);
    setDetail(detail);
  };
  return (
    <div>
      <ModalForm
        title={'编辑设备'}
        trigger={
          <Button type="primary">
            <PlusOutlined onClick={() => getDetails(props.id)} />
            编辑设备
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
            setDetail(null);
          },
        }}
      >
        {detail ? (
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
        ) : (
          <PageLoading />
        )}
      </ModalForm>
    </div>
  );
});

export default Add;
