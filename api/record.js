import client from "./client";

export const inquiryHabitList = (body) =>
client.post("/api/record/inquiryHabitList", body);

export const inquiryHabitDetail  = (body) =>
client.post("/api/record/inquiryHabitDetail", body);

export const inquiryHabitStatistics = (body) =>
client.post("/api/record/inquiryHabitStatistics", body);

export const createHabit = (body) =>
client.post("/api/record/createHabit", body);

export const updateHabit = (body) =>
client.put("/api/record/updateHabit", body);

export const deleteHabit = (body) =>
client.delete("/api/record/deleteHabit", body);

export const resetStartTime = (body) =>
client.put("/api/record/updateHabit", body);

export const createAccessPicture = (body) =>
client.post("api/record/createAccessPicture");

export const updateAccessPicture = (body) =>
client.put("/api/record/updateAccessPicture", body);

export const deleteAccessPicture = (body) =>
client.delete("/api/record/deleteAccessPicture");

export const checkAccessPicture = (body) =>
client.post("/api/record/checkAccessPicture");