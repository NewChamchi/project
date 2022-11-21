import axios from "axios";

// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const client = axios.create({});
export default client;
