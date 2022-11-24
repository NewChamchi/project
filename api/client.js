import axios from "axios";

axios.defaults.baseURL = "http://172.20.10.2:8080";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";
// 토큰 바꿔야함

const client = axios.create({});
export default client;
