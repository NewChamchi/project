import { atom } from "recoil";

export const groupListState = atom({
    key: "groupListState",
    default: [],
});

export const groupNowState = atom({
    key: "groupNowState",
    default: {},
});

export const groupNowMemberListState = atom({
    key: " groupNowMemberListState",
    default: {},
});

export const groupNowMemberState = atom({
    key: " groupNowMemberState",
    default: {},
});
