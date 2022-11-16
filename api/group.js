import client from "./client";

export const inquiryGroupList = (body) =>
client.post("api/group/inquiryGroupList", body);

export const inquiryGroup = (body) =>
client.post("api/group/inquiryGroup", body);

export const inquiryGroupMember = (body) =>
client.post("api/group/inquiryGroup", body);

export const createGroup = (body) =>
client.post("api/group/createGroup", body);

export const updateGroup = (body) =>
client.put("api/group/updateGroup", body);

export const deleteGroup = (body) =>
client.delete("api/group/deleteGroup", body);

export const applyJoinGroup = (body) =>
client.post("api/group/applyJoinGroup", body);

export const accessJoinGroup = (body) =>
client.put("api/group/accessJoinGroup", body);

export const warningMember = (body) =>
client.put("api/group/warningMember", body)

export const inquiryChatRoom = (body) =>
client.post("api/group/inquiryChatRoom", body);