import { Request, Response } from 'express';
const data: any = [
  { name: '马云', key: 1 },
  { name: '前端技术专家', key: 3, parent: 2 },
  { name: '首席科学家', key: 2, parent: 1 },
  { name: '前端架构师', key: 4, parent: 3 },
  { name: '前端工程师', key: 5, parent: 4 },
  { name: '前端菜鸟', key: 6, parent: 5 },
  { name: '前端小白', key: 7, parent: 6 },
  { name: '马岳父', key: 8 },
  { name: 'QQ', key: 9, parent: 8 },
  { name: '微信', key: 10, parent: 8 },
  { name: '王者荣耀', key: 11, parent: 8 },
  { name: '绝地求生', key: 12, parent: 8 },
  { name: 'QQ会员', key: 13, parent: 9 },
  { name: 'QQ空间', key: 14, parent: 9 },
  { name: 'QQ钱包', key: 15, parent: 9 },
  { name: '沙漠地图', key: 16, parent: 12 },
  { name: '公众号', key: 17, parent: 10 },
  { name: '群聊', key: 18, parent: 10 },
  { name: '小程序', key: 19, parent: 10 },
  { name: '花木兰', key: 20, parent: 11 },
  { name: '芈月', key: 21, parent: 11 },
  { name: '马可波罗', key: 22, parent: 11 },
];
const mockTreeData = (req: Request, res: Response) => {
  res.json({
    data,
    success: true,
  });
};

export default {
  'GET /api/mockTreeData': mockTreeData,
};
