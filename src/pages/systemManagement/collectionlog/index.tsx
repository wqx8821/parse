// 角色管理
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useRef } from 'react';

export default function index() {
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    const getInfo = async () => {};
    getInfo();
  }, []);

  // 单独获取树的选中数据，拼接为表单数据
  const columns: any[] = [
    {
      title: '当前日志时间',
      dataIndex: 'logTime',
      align: 'center',
    },
    {
      title: '任务号',
      dataIndex: 'taskId',
    },
    {
      title: '任务描述',
      hideInSearch: true,
      dataIndex: 'cityID',
    },
    {
      title: '任务类型',
      dataIndex: 'omcID',
    },
    {
      title: '任务状态',
      hideInSearch: true,
      dataIndex: 'vendor',
    },
    {
      title: '采集时间',
      hideInSearch: true,
      dataIndex: 'hostIP',
    },
    {
      title: '消耗时间',
      hideInSearch: true,
      dataIndex: 'hostUser',
    },
    {
      title: '采集结果',
      hideInSearch: true,
      dataIndex: 'hostPwd',
    },
    {
      title: '详情',
      hideInSearch: true,
      dataIndex: 'saveModif',
    },
    {
      title: '异常信息',
      hideInSearch: true,
      dataIndex: 'saveModif',
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
          search={{
            labelWidth: 'auto',
            optionRender: ({ searchText, resetText }, { form }, dom) => [
              <Button
                key="searchText"
                icon={<SearchOutlined />}
                type="primary"
                onClick={() => {
                  form?.submit();
                }}
              >
                {searchText}
              </Button>,
              <Button
                key="resetText"
                icon={<RedoOutlined />}
                onClick={() => {
                  form?.resetFields(); // 清空表单数据
                  form?.submit(); // 触发查询
                  actionRef?.current?.reload(); // 刷新表格
                }}
              >
                {resetText}
              </Button>,
            ],
          }}
          // 分页器
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: false,
          }}
          dateFormatter="string"
          toolBarRender={false}
        />
      </PageContainer>
    </>
  );
}
