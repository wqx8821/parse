import { SortOrder } from 'antd/lib/table/interface';
import { request } from 'umi';

const getTableData = async (
  params: { page?: number; pageSize?: number },
  sort?: Record<string, SortOrder>,
  filter?: Record<string, React.ReactText[] | null>,
) => {
  return await request<API.ITableList>('/api/getTableData', { method: 'get', params });
};
// console.log(getTableData({}, {}, {}));
export default getTableData;
