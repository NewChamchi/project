import client from "./client";

export const inquiryGroupList = (groupType) =>
    client.get(`/api/group/get-type/${groupType}`);

export const inquiryGroup = (groupName, adminNickName) =>
    client.get(`/api/group/get-group/${groupName}/${adminNickName}`);

export const createGroup = (
    body // groupName, groupType, nickName
) => client.post(`/api/group/new`, body);

export const applyGroup = (body) => client.post(`/api/group/apply`, body);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const permissionApplyGroup = (body) =>
    client.post(`/api/group/admin/handle-application`, body);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const updateGroup = (body) =>
    client.put(`/api/group/admin/update-group`, body);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const deleteGroup = () => client.delete(`/api/group/admin/delete-group`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const inquiryGroupChat = () => client.get(`/api/group`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const writeGroupChat = (body) => client.post(`/api/group`, body);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const inquiryGroupMemberList = () =>
    client.get(`/api/group/user/get-group-members`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const withdrawGroup = () => client.delete(`/api/group/user/withdrawal`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)

export const warnGroupMember = () => client.put(`/api/grou/warn`);
// 나중에 문서 확인 필요(문서 확인하면 지우기)
