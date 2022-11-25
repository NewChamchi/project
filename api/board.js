import client from "./client";

export const createPost = (habitId, body) =>
    client.post(`/api/habits/${habitId}/posts`, body);

export const inquiryPostAll = () => client.get(`/api/posts`);

export const inquiryPostById = (postId) => client.get(`/api/posts/${postId}`);

export const updatePostById = (postId, body) =>
    client.put(`/api/posts/${postId}`, body);

export const deletePostById = (postId) => client.delete(`/api/posts/${postId}`);

export const createComment = (memberId, postId, body) =>
    client.post(`/api/members/${memberId}/posts/${postId}/comments`, body);

export const inquiryCommentAll = (postId) =>
    client.get(`/api/posts/${postId}/comments`);

export const inquiryPostByComment = (postId, commentId) =>
    client.get(`/api/posts/${postId}/comments/${commentId}`);

export const updatePostByComment = (postId, commentId, body) =>
    client.put(`/api/posts/${postId}/comments/${commentId}`, body);

export const deletePostByComment = (postId, commentId) =>
    client.delete(`/api/posts/${postId}/comments/${commentId}`);
