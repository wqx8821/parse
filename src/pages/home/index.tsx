// 角色管理
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { Input } from 'antd';
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
      title: '设备标号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 80,
    },
    {
      title: '角色名称',
      width: '20%',
      dataIndex: 'roleName',
      render: (_: any, record: any) => <a>{record.roleName}</a>,
      renderFormItem: (_: any, { type, defaultRender, ...rest }: any, form: any) => {
        if (type === 'form') return null;
        const status = form.getFieldValue('state');
        if (status !== 'open') {
          return <Input placeholder={_.label} />;
        }
        return defaultRender(_);
      },
    },
    {
      title: '角色类型',
      hideInSearch: true,
      width: '15%',
      dataIndex: 'roleType',
    },
    {
      title: '更新时间',
      hideInSearch: true,
      width: '20%',
      dataIndex: 'updateTime',
    },
  ];
  return (
    <>
      <PageContainer
        waterMarkProps={{ content: '' }}
        header={{
          title: '',
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
          toolBarRender={false}
        />
      </PageContainer>
    </>
  );
}
