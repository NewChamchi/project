import { atom } from "recoil";

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        email: "123123123",
        name: "aasdasd",
    },
});

export const userInfoListState = atom({
    key: "userInfoListState",
    default: [],
});
