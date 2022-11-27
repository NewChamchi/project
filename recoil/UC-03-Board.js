import { atom } from "recoil";

export const postListState = atom({
    key: "postListState",
    default: [],
});

export const postNowState = atom({
    key: "postNowState",
    default: {},
});
