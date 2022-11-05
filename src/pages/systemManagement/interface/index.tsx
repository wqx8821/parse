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
      title: '任务编号',
      dataIndex: 'devID',
      align: 'center',
    },
    {
      title: 'OMC ID',
      dataIndex: 'omcID',
    },
    {
      title: 'CLT表名',
      dataIndex: 'eclipse',
    },
    {
      title: '采集数据时间',
      dataIndex: 'cityID',
    },

    {
      title: '记录入库时间',
      hideInSearch: true,
      dataIndex: 'vendor',
    },
    {
      title: '记录数',
      dataIndex: 'hostIP',
    },
    {
      title: '汇总状态',
      hideInSearch: true,
      dataIndex: 'hostUser',
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
          // headerTitle="高级表格"
          // 工具栏
          toolBarRender={false}
        />
      </PageContainer>
    </>
  );
}
