/*
 * @Description:
 * @Version:
 * @Author: wg 2450925422
 * @Date: 2022-06-20 09:52:27
 * @LastEditors: Seven
 * @LastEditTime: 2022-06-22 11:17:50
 */
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    accessTest: true, // 测试
    // 菜单权限控制, 此处可以是一个函数
    // 在路由处 access：'' 使用
    // 会默认将使用处的路由传递回来
    //（在函数内可以做自己想要的权限鉴权）例如
    canOrdinary: (args: any) => {
      // console.log(args);
      const data: string[] = ['/admin']; // 后端返回的路由字段
      // console.log(data.includes(args.path));
      // 根据路由返回字段 匹配对应路由权限
      return data.includes(args.path);
    },
  };
}
