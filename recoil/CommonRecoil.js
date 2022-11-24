import { atom } from "recoil";

export const categoryListIconState = atom({
    key: "categoryListIconState",
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

export const categoryListState = atom({
    key: "categoryListState",
    default: [],
});

export const categoryNowState = atom({
    key: "categoryNowState",
    default: { name: "게임", icon: "🎮" },
});
