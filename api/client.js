import axios from "axios";

// axios.defaults.baseURL = "https://localhost:8080";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";

const client = axios.create({
    baseURL: "https://74:8f:3c:c4:12:d3:8080",
});
export default client;
