import { atom } from "recoil";

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        email: "",
        name: "",
        role: "",
        password: "",
        memberId: "",
    },
});

export const userInfoListState = atom({
    key: "userInfoListState",
    default: [],
});
