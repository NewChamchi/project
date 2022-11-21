import client from "./client";

export const signUp = (body) => client.post("/api/user/save", body); // 추가

export const authorizedToken = (token) =>
    client.get("/api/user/auth", { token: token });

export const login = (body) => client.post("/api/login", body); // 추가

export const logout = (
    body // 추가
) => client.post("/api/logout", body);

export const withdrawMember = (
    email // 추가
) => client.get("/api/user/withdrawal", { email: email });

export const updateUserInfo = (content, updateInfo) =>
    client.get(
        "/api/user/update",
        { content: content },
        { updateInfo: updateInfo }
    );

export const warnUser = (email) =>
    client.get("/api/admin/warn", { email: email });

export const userSelfInfo = (body) => client.post("/api/user/info", body);

export const userAllInfo = (body) => client.post("/api/admin/user/info", body);
