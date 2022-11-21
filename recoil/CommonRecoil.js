import { atom } from "recoil";

export const categoryListState = atom({
    key: "categoryListState",
    default: {
        game: "🎮",
        tobacco: "🚬",
        alcohol: "🍺",
        // { name: "담배" "🚬" },
        // { name: "술", icon: "🍺" },
        // { name: "운동", icon: "🎾" },
        // { name: "책", icon: "📕" },
        // { name: "기타", icon: "💬" },
    },
});

export const categoryNowState = atom({
    key: "categoryNowState",
    default: { name: "게임", icon: "🎮" },
});

export const userNowState = atom({
    key: "userNowState",
    default: { name: "", email: "" },
});
