import client from "./client";

export const signUp = (body) => client.post("/api/user/save", body); // 추가

export const login = (body) => client.post("/api/login", body); // 추가

export const logout = (
    body // 추가
) => client.get("/api/logout");

export const withdrawMember = () =>
    // 추가
    client.delete(`/api/user/withdrawal`);

export const updateUserInfo = (content, updateInfo) =>
    client.put(`/api/user/update/${content}/${updateInfo}`);

export const warnUser = (email) => client.get(`/api/admin/warn/${email}`);

export const userSelfInfo = () => client.get("/api/user/info");

export const userAllInfo = () => client.get("/api/admin/user/info");
