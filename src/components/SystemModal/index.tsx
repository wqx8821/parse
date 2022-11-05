/*peops 参数
 * title 标题
 * children 插槽
 * triggerValue 触发按钮
 * clickSubmit 弹出层 确认按钮
 */
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { forwardRef, useImperativeHandle } from 'react';
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
// type Props = {
//   children?: any[];
//   title?: string;
//   triggerValue?: string;
//   leftSlot?: ReactNode;
// };
const SystemModal = (props: any, ref: any) => {
  const { title = '表单' } = props;
  useImperativeHandle(ref, () => ({
    hello: () => console.log('hello world!'),
  }));
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title={title}
      trigger={
        props.triggerValue ? (
          props.triggerValue
        ) : (
          <Button type="primary">
            <PlusOutlined />
            新增
          </Button>
        )
      }
      autoFocusFirstInput
      modalProps={{
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(500);
        // console.log(values);
        if (props?.record?.name) {
          message.success(`提交成功 ${props.record.name}`);
        } else message.success(`提交成功`);
        // 外界传递的 确认时执行的函数 可以进行网络请求
        // if(props.clickSubmit) props.clickSubmit();
        return true;
      }}
    >
      {props.children}
    </ModalForm>
  );
};

export default forwardRef(SystemModal);
