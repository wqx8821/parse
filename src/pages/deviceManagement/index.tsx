// 角色管理
import SystemDelete from '@/components/SystemDelete';
import { deviceList } from '@/services/system/deviceManagement';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import AddRoleModal from './components/Add';
import Edit from './components/Edit.';

type Params = {
  devID: string | number | undefined;
  eclipse?: string | number | undefined;
  omcID?: string | number | undefined;
};

export default function index() {
  const actionRef = useRef<ActionType>();
  const [params, setParams] = useState<Params>();

  useEffect(() => {
    const getInfo = async () => {};
    getInfo();
  }, []);

  // 单独获取树的选中数据，拼接为表单数据
  const columns: any[] = [
    {
      title: '设备标号',
      dataIndex: 'devID',
      align: 'center',
    },
    {
      title: '名称',
      dataIndex: 'eclipse',
    },
    {
      title: '城市',
      hideInSearch: true,
      dataIndex: 'cityID',
    },
    {
      title: 'OMC ID',
      dataIndex: 'omcID',
    },
    {
      title: '厂商',
      hideInSearch: true,
      dataIndex: 'vendor',
    },
    {
      title: 'IP',
      hideInSearch: true,
      dataIndex: 'hostIP',
    },
    {
      title: '用户名',
      hideInSearch: true,
      dataIndex: 'hostUser',
    },
    {
      title: '密码',
      hideInSearch: true,
      dataIndex: 'hostPwd',
    },
    {
      title: '提示符',
      hideInSearch: true,
      dataIndex: 'saveModif',
    },
    {
      title: '操作',
      hideInSearch: true,
      width: '15%',
      render: (_: any, record: any) => (
        <>
          <Edit reload={() => actionRef?.current?.reload()} />
          <SystemDelete
            record={record}
            onSubmit={async (row: any) => {
              let { id } = row;
              // 添加成功刷新表格
              actionRef?.current?.reload();
            }}
          ></SystemDelete>
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
          params={params}
          cardBordered
          request={async (params) => {
            const { data } = await deviceList({
              // page: params.current,
              // pageSize: params.pageSize,
              devID: params.devID,
              eclipse: params.eclipse,
              omcID: params.omcID,
            });
            return {
              data: data,
              success: true,
              // total: data.total,
            };
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
          toolBarRender={(action) => [<AddRoleModal reload={() => actionRef?.current?.reload()} />]}
        />
      </PageContainer>
    </>
  );
}
