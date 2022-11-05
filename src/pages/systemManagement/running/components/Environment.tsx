import { ModalForm } from '@ant-design/pro-components';
import { Button, FormInstance, Progress } from 'antd';
import { memo, useRef } from 'react';

const QueryModal = memo(() => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {};

  return (
    <div>
      <ModalForm
        title={'环境信息一览'}
        trigger={<Button type="primary">环境信息</Button>}
        onFinish={(values) => onFinish(values)}
        submitTimeout={5000}
        autoFocusFirstInput={true}
        submitter={false}
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
        <div>
          <span>计算机名： {}</span> <br />
          <span>操作系统： {}</span> <br />
          <span>
            磁盘使用情况：
            <div>
              <span>C:\</span>
              <Progress
                percent={(69.43992 / 236.25098) * 100}
                strokeLinecap="butt"
                size="small"
                showInfo={false}
              />
              <span>69.43992 GB可用,共 236.25098 GB</span>
            </div>
            <div>
              <span>D:\</span>
              <Progress
                percent={(69.43992 / 236.25098) * 100}
                strokeLinecap="butt"
                size="small"
                showInfo={false}
              />
              <span>69.43992 GB可用,共 236.25098 GB</span>
            </div>
          </span>
          <br />
          <span>
            虚拟机内存使用情况
            <span></span>
          </span>
          <br />
          <span>
            用户名： {}
            <span>当前目录{}</span>
            <span>用户主目录{}</span>
          </span>
          <br />
          <span>
            JAVA
            <br />
            <span>版本： {}</span>
            <br />
            <span>厂商 {}</span>
            <br />
            <span>版本： {}</span>
            <br />
            <span>版本： {}</span>
          </span>
        </div>
      </ModalForm>
    </div>
  );
});

export default QueryModal;
