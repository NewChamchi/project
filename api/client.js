import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import axios from "axios";

axios.defaults.baseURL = "http://192.168.43.144:5000";

// axios.defaults.baseURL = "http://202.31.202.150:5000";
axios.defaults.withCredentials = true;
// axios.defaults.headers.Cookie = "fgoxpqwtedpdqari";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";
// 토큰 바꿔야함

const client = axios.create({});
export default client;
