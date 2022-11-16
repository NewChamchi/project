import client from "./client";

export const inquiryBoard = (body) =>
client.post("api/board/inquiryBoard", body);

export const inquiryPost = (body) =>
client.post("api/board/inquiryPost", body);

export const createPost = (body) =>
client.post("api/board/createPost", body);

export const updatePost = (body) =>
client.put("api/board/updatePost", body);

export const deletePost = (body) =>
client.delete("api/board/deletePost", body);

export const createComment = (body) =>
client.post("api/board/createComment", body);

export const updateComment = (body) =>
client.delete("api/board/updateComment", body)