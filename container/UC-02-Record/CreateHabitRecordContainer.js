import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createHabit } from "../../api/record";
import CreateHabitRecordScreen from "../../component/UC-02-Record/CreateHabitRecordScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import { habitRecordListState } from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

let id = 0;

const CreateHabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const userInfo = useRecoilValue(userInfoState);
    const [habitName, setHabitName] = useState("");
    const [habitCategory, setHabitCategory] = useState("game");
    const [habitCategoryList] = useState(["game", "tobacco", "alcohol"]);
    const [amount, setAmount] = useState(1);
    const [amountList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [period, setPeriod] = useState(1);
    const [periodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    // const addItem = (oldHabitRecordList) => {
    //     setHabitRecordList((oldHabitRecordList) => [
    //         ...oldHabitRecordList,
    //         {
    //             id: getId(),
    //             name: habitName,
    //             category: habitCategory,
    //             reduceUnit: reduceUnit,
    //             checkPeriod: checkPeriod,
    //             startTime: nowDate(),
    //             picture: null,
    //             isChecked: false,
    //         },
    //     ]);
    //     console.log(habitRecordList);
    // };

    const getHabitList = async () => {
        try {
            const { data } = await memberHabitInquiry(userInfo.email);
            setHabitRecordList(data);
        } catch (e) {
            setHabitRecordList([]);
        }
    };

    const addItem = useCallback(async () => {
        try {
            const body = {
                name: habitName,
                amount: amount,
                period: period,
            };

            // 상의 필요
            // const { data } = await registerHabit(habitCategory, userInfo.email, body);
            console.log("생성 성공");
            setHabitRecordList(data.contents);
            getHabitList();
        } catch (e) {
            console.log("생성 실패");
        }
    });

    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
        habitName,
        setHabitName,
        habitCategory,
        setHabitCategory,
        habitCategoryList,
        addItem,
        amount,
        setAmount,
        amountList,
        period,
        setPeriod,
        periodList,
    };
    return <CreateHabitRecordScreen {...propDatas} />;
};

export default CreateHabitRecordContainer;
