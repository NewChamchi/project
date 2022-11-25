import { atom } from "recoil";
export const groupListState = atom({
    key: "groupListState",
    defalut: [],
});

export const groupNowState = atom({
    key: "groupNowState",
    default: {},
});

export const groupNowMemberListState = atom({
    key: " groupNowMemberListState",
    default: {},
});
