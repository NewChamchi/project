import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryCategoryAll, memberHabitInquiry } from "../api/record";
import { categoryListState } from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { habitRecordListState } from "../recoil/UC-02-Record";

import Cookies from "universal-cookie";
export const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const nowDate = () => {
    return Date.now();
};

export const cookies = new Cookies();
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
