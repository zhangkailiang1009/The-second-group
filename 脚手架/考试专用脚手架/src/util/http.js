import Fetch from "../util/fetch";
// 账号密码登陆
export const loginpassword = (data) => Fetch.post("/login", data);
//获取个人数据
export const grzy = (data) => Fetch.get("/userInfo")
// console.log(grzy)

// 获取我的收藏信息
export const wdsc = () => Fetch.get(
    "/collect?page=1&limit=10&type=1&",
)
// 修改头像
export const xgtx = (data) => Fetch.post(
    `/public/img`,
    data
)
// 修改用户信息名字
export const xgxx = (data) => Fetch.put(
    `/user`,
    data
)