import { atom } from "recoil";

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        email: "",
        name: "",
        id: "",
    },
});

export const userInfoListState = atom({
    key: "userInfoListState",
    default: [],
});
