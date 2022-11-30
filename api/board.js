import client from "./client";

export const createPost = (habitId, body) =>
    client.post(`/api/user/habits/${habitId}/posts`, body);

export const inquiryPostAll = (page) =>
    client.get(`/api/user/posts?pageNo=${page}`);

export const inquiryPostById = (postId) =>
    client.get(`/api/user/posts/${postId}`);

export const updatePostById = (postId, body) =>
    client.put(`/api/user/posts/${postId}`, body);

export const deletePostById = (postId) =>
    client.delete(`/api/user/posts/${postId}`);

export const createComment = (memberId, postId, body) =>
    client.post(`/api/user/members/${memberId}/posts/${postId}/comments`, body);

export const inquiryCommentAll = (postId) =>
    client.get(`/api/user/posts/${postId}/comments`);

export const inquiryPostByComment = (postId, commentId) =>
    client.get(`/api/user/posts/${postId}/comments/${commentId}`);

export const updatePostByComment = (postId, commentId, body) =>
    client.put(`/api/user/posts/${postId}/comments/${commentId}`, body);

export const deletePostByComment = (postId, commentId) =>
    client.delete(`/api/user/posts/${postId}/comments/${commentId}`);
