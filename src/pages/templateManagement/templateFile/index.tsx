// 角色管理
import SystemDelete from '@/components/SystemDelete';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useRef } from 'react';
import AddRoleModal from './components/AddFile';
import EditRoleModal from './components/Edit';
import UploadTemp from './components/UploadTemp';

export default function index() {
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    const getInfo = async () => {};
    getInfo();
  }, []);

  // 单独获取树的选中数据，拼接为表单数据
  const columns: any[] = [
    {
      title: '文件名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '大小',
      dataIndex: 'size',
      hideInSearch: true,
      render: (_: any, record: any) => <div>{record.size / 1024}</div>,
    },
    {
      title: '修改日期',
      hideInSearch: true,
      dataIndex: 'modifyDate',
    },
    {
      title: '操作',
      hideInSearch: true,
      width: '15%',
      render: (_: any, record: any) => (
        <>
          <EditRoleModal />
          <SystemDelete
            record={record}
            onSubmit={async (row: any) => {
              let { id } = row;
              // 添加成功刷新表格
              actionRef?.current?.reload();
            }}
          ></SystemDelete>
          <a href="#">下载</a>
        </>
      ),
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
          toolBarRender={(action) => [<AddRoleModal />, <UploadTemp />]}
        />
      </PageContainer>
    </>
  );
}
