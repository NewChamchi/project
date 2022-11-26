import { atom } from "recoil";

export const categoryListState = atom({
    key: "categoryListState",
    default: [],
});

export const categoryNowState = atom({
    key: "categoryNowState",
    default: {},
});
