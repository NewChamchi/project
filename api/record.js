import client from "./client";

export const registerHabit = (categoryId, memberId, body) =>
    client.post(
        `/api/user/categories/${categoryId}/members/${memberId}/habits`,
        body
    );

export const memberHabitInquiry = (memberId) =>
    client.get(`/api/user/members/${memberId}/habits`);

export const updateHabit = (habitId, body) =>
    client.put(`/api/user/habits/${habitId}`, body);

export const checkHabit = (habitId, body) =>
    client.put(`/api/user/check/success/habits/${habitId}`, body);

export const judgeCheck = (habitId) => {
    client.put(`/api/user/check/judge/habits/${habitId}`);
};
export const deleteHabit = (habitId) =>
    client.delete(`/api/user/habits/${habitId}`);

export const registerCategory = (
    body // { name: "담배"}
) => client.post(`/api/user/categories`, body);

export const inquiryCategoryAll = () => client.get(`/api/user/categories/`);

export const updateCategory = (
    habitCategoryId,
    body // { name: "돈 저축하기"}
) => client.put(`/api/user/categories/${habitCategoryId}`, body);

export const deleteCategory = (habitCategoryId) =>
    client.delete(`/api/user/categories/${habitCategoryId}`);

export const verifyPicture = (body) => {
    client.get(`/api/user/test`, body);
};

export const inquiryAmountAll = (habitCategoryId) =>
    client.get(`/api/user/categories/${habitCategoryId}/total_amount`);

export const inquiryPeriodAll = (habitCategoryId) =>
    client.get(`/api/user/categories/${habitCategoryId}/total_period`);

export const inquiryMyAmount = (habitId) =>
    client.get(`api/user/habits/${habitId}/my_amount`);

export const inquiryMyPeriod = (habitId) =>
    client.get(`api/user/habits/${habitId}/my_period`);
