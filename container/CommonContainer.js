import { useState } from "react";

export const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const nowDate = () => {
    return Date.now();
};

export const categoryNameToIcon = (name) => {
    switch (name) {
        case "게임":
            return "🎮";
            break;
        case "담배":
            return "🚬";
            break;
        case "술":
            return "🍺";
            break;
        case "운동":
            return "🎾";
            break;
        case "책":
            return "📕";
            break;
        case "기타":
            return "💬";
            break;
    }
};
