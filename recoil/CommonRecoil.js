import { atom } from "recoil";

export const categoryListState = atom({
    key: "categoryListState",
    default: ["test", "test2"],
});

export const categoryNowState = atom({
    key: "categoryNowState",
    default: {},
});

export const loadingState = atom({
    key: "loadingState",
    default: false,
});
