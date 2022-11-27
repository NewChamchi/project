import client from "./client";

export const inquiryGroupList = (groupType, order) =>
    client.get(`/api/group/get-type?groupType=${groupType}&sortBy=${order}`);

export const inquiryGroup = (groupName, adminNickName) =>
    client.get(
        `/api/group/get-group?groupName=${groupName}&adminNickName=${adminNickName}`
    );

export const createGroup = (body) => client.post(`/api/group/new`, body);

export const applyGroup = (body) => client.post(`/api/group/apply`, body);

export const getRoleInThisGroup = (body) =>
    client.get(`/api/group/get-my-role`, body);

export const permissionApplyGroup = (permit, userNickName, body) =>
    client.put(
        `/api/group/admin/handle-application?permit=${permit}&userNickName=${userNickName}`,
        body
    );

export const updateGroup = (updateName, body) =>
    client.put(`/api/group/admin/update-group?updateName=${updateName}`, body);

export const deleteGroup = (body) =>
    client.delete(`/api/group/admin/delete-group`, body);

export const inquiryGroupChat = () => client.get(`/api/group`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const writeGroupChat = (body) => client.put(`/api/group`, body);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const inquiryGroupMemberList = (body) =>
    client.post(`/api/group/user/get-group-members`, body);

export const withdrawGroup = (userNickNameWillBeAdmin, body) =>
    client.delete(
        `/api/group/user/withdrawal?userNickNameWillBeAdmin=${userNickNameWillBeAdmin}`,
        body
    );

export const warnGroupMember = (userNickName, body) =>
    client.put(`/api/group/warn?userNickName=${userNickName}`, body);
