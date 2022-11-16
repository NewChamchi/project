import { atom } from "recoil";

export const habitRecordListState = atom({
    key: "habitRecordListState",
    default: [],
});

export const updateScreenState = atom({
    key: "updateScreenState",
    default: false,
});

export const habitRecordItemState = atom({
    key: "habitRecordItemState",
    default: {},
});
