import { atom } from "recoil";

export const habitRecordListState = atom({
    key: "habitRecordListState",
    default: [],
});

export const updateScreenState = atom({
    key: "updateScreenState",
    default: false,
});

export const samplePictureScreenState = atom({
    key: "samplePictureScreenState",
    default: false,
});
export const habitRecordItemState = atom({
    key: "habitRecordItemState",
    default: {},
});

export const habitImageState = atom({
    key: "habitImageState",
    default: {},
});
