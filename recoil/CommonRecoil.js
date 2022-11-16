import { atom } from "recoil";

export const categoryListState = atom({
    key: "categoryListState",
    default: [
        { name: "게임", icon: "🎮" },
        { name: "담배", icon: "🚬" },
        { name: "술", icon: "🍺" },
        { name: "운동", icon: "🎾" },
        { name: "책", icon: "📕" },
        { name: "기타", icon: "💬" },
    ],
});

export const categoryNowState = atom({
    key: "categoryNowState",
    default: { name: "게임", icon: "🎮" },
});
