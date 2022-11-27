import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryCategoryAll, memberHabitInquiry } from "../api/record";
import { categoryListState } from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { habitRecordListState } from "../recoil/UC-02-Record";

export const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const nowDate = () => {
    return Date.now();
};

export const korToEng = (name) => {
    switch (name) {
        case "술":
            return "ALCOHOL";
            break;
        case "담배":
            return "TOBACCO";
            break;
        case "운동":
            return "WORKOUT";
            break;
    }
};

export const engToKor = (name) => {
    switch (name) {
        case "ALCOHOL":
            return "술";
            break;
        case "TOBACCO":
            return "담배";
            break;
        case "WORKOUT":
            return "운동";
            break;
    }
};

export const categoryNameToIcon = (name) => {
    switch (name) {
        case "TOBACCO":
            return "🚬";
            break;
        case "ALCOHOL":
            return "🍺";
            break;
        case "WORKOUT":
            return "🎾";
            break;
        default:
            return "💬";
            break;
    }
};
