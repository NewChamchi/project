import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryCategoryAll } from "../api/record";
import { categoryListState } from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { habitRecordListState } from "../recoil/UC-02-Record";

const userInfo = useRecoilValue(userInfoState);
const setHabitRecordList = useSetRecoilState(habitRecordListState);

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

export const getCategoryList = () => {
    const categoryList = useRecoilValue(categoryListState);
    const setCategoryList = useSetRecoilState(categoryListState);
    const { data } = inquiryCategoryAll()
        .then((response) => {
            console.log(response);
            setCategoryList(data.contents);
        })
        .catch((error) => console.log(error));
};

export const getHabitList = async () => {
    try {
        const { data } = await memberHabitInquiry(userInfo.memberId);
        setHabitRecordList(data);
    } catch (e) {
        setHabitRecordList([]);
    }
};
