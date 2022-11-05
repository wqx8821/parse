import { DeleteFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import SystemModal from '../SystemModal';

const SystemDelete = (props: any) => {
  const { record, onSubmit } = props
  return (
    <>
      <SystemModal
        title="确认删除"
        CustomWidth="350px"
        triggerValue={<a><DeleteFilled />删除</a>}
        clickSubmit={async () => {
          try {
            const result = await onSubmit(record)
            console.log(result)
            // 判断网络请求等信息 模拟信息暂时没有数据 到时候替换下列判断条件
            if (result.success) {
              message.success(result.message || `删除成功`);
              // 弹窗封装必须返回有返回值 不然上层封装无法根据数据关闭弹窗
              return true
            } else {
              // 一些错误的提示 if（XXX）
              if (result) message.error(`${result?.message ?? '删除失败'}`)
            }
          } catch (error) {

          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <QuestionCircleOutlined style={{ fontSize: 20, color: '#FE9502' }} />
          <span
            style={{
              fontFamily: "'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif",
              fontWeight: 700,
              color: '#666666',
              marginLeft: 4,
            }}
          >
            确定要删除吗？
          </span>
        </div>

      </SystemModal>
    </>
  );
};

export default SystemDelete;
