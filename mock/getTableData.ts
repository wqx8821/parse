import { Request, Response } from 'express';
const data: any = [];
// const data: API.ITable[] = [];

for (let i = 0; i < 40; i++) {
  data.push({
    id: i,
    name: `这是测试用的数据 ${i}`,
    address: `201${i}-08-25 14:54`,
    status: true,
  });
}
const getNotices = (req: Request, res: Response) => {
  res.json({
    data,
    success: true,
    total: 40,
    // pageSize: 20,
    // current: 1,
  });
};

export default {
  'GET /api/getTableData': getNotices,
};
