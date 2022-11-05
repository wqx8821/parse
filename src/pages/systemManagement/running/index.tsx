// 角色管理
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { useEffect, useRef } from 'react';
import Environment from './components/Environment';

export default function index() {
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    const getInfo = async () => {};
    getInfo();
  }, []);

  // 单独获取树的选中数据，拼接为表单数据
  const columns: any[] = [
    {
      title: '任务号',
      dataIndex: 'devID',
      align: 'taskId',
    },
    {
      title: '任务描述',
      dataIndex: 'des',
    },
    {
      title: '采集时间点',
      hideInSearch: true,
      dataIndex: 'lastct',
    },
    {
      title: '耗时',
      dataIndex: 'coltime',
    },
    {
      title: '机器名',
      hideInSearch: true,
      dataIndex: 'collector',
    },
  ];
  return (
    <>
      <PageContainer
        waterMarkProps={{ content: '' }}
        header={{
          breadcrumb: {},
        }}
      >
        <ProTable
          columns={columns}
          actionRef={actionRef}
          bordered={true}
          cardBordered
          request={async (params) => {
            // const { data } = await getRoleTableList({
            //   page: params.current,
            //   pageSize: params.pageSize,
            //   roleName: params.roleName,
            // });
            // return {
            //   data: data.records,
            //   success: true,
            //   total: data.total,
            // };
          }}
          // 每一行的索引
          rowKey="id"
          search={false}
          // 分页器
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: false,
          }}
          dateFormatter="string"
          // headerTitle="高级表格"
          // 工具栏
          toolBarRender={(action) => [<Environment />]}
        />
      </PageContainer>
    </>
  );
}
