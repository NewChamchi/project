import client from "./client";

export const registerHabit = (categoryId, memberId, body) =>
    client.post(
        `/api/categories/${categoryId}/members/${memberId}/habits`,
        body
    );

export const memberHabitInquiry = (memberId) =>
    client.get(`/api/members/${memberId}/habits`);

export const updateHabit = (habitId, body) =>
    client.put(`/api/habits/${habitId}`, body);

export const checkHabit = (habitId, body) =>
    client.put(`/api/check/success/habits/${habitId}`, body);

export const judgeCheck = (habitId) =>
    client.put(`/api/check/judge/habits/${habitId}`);

export const deleteHabit = (habitId) => client.delete(`/api/habits/${habitId}`);

export const registerCategory = (
    body // { name: "담배"}
) => client.post(`/api/categories`, body);

export const inquiryCategoryAll = () => client.get(`/api/categories/`);

export const updateCategory = (
    habitCategoryId,
    body // { name: "돈 저축하기"}
) => client.put(`/api/categories/${habitCategoryId}`, body);

export const deleteCategory = (habitCategoryId) =>
    client.delete(`/api/categories/${habitCategoryId}`);
