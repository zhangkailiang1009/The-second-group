import Fetch from "../util/fetch";
// 账号密码登陆
export const login = (data) => Fetch.post("/login", data);
//个人数据
export const grzy = (data) => Fetch.get("/userInfo")
//
