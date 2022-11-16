import { atom } from "recoil";

export const userNowState = atom({
    key: "userNowState",
    default: {
        email: "123123123",
        name: "aasdasd",
    },
});
