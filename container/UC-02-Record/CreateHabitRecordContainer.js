import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import {
    createHabit,
    memberHabitInquiry,
    registerHabit,
} from "../../api/record";
import CreateHabitRecordScreen from "../../component/UC-02-Record/CreateHabitRecordScreen";
import { categoryListState, loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { habitRecordListState } from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

let id = 0;

const CreateHabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const categoryList = useRecoilValue(categoryListState);
    const setCategoryList = useSetRecoilState(categoryListState);
    const userInfo = useRecoilValue(userInfoState);
    const [habitName, setHabitName] = useState("");
    const [habitCategory, setHabitCategory] = useState(categoryList[0].name);
    const [habitCategoryList] = useState(categoryList.map((item) => item.name));
    const [amount, setAmount] = useState(1);
    const [amountList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [period, setPeriod] = useState(1);
    const [periodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

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
    const getHabitList = () => {
        setLoading((prev) => !prev);
        console.log("됨1");
        memberHabitInquiry(userInfo.memberId)
            .then((response) => {
                console.log(response["data"]);

                setHabitRecordList(response["data"]);
            })
            .catch((error) => {
                console.log("됨3");
                console.log(error);
            });
        setLoading((prev) => !prev);
    };
    const addItem = useCallback(() => {
        setLoading((prev) => !prev);
        const body = {
            name: habitName,
            amount: amount,
            period: period * 24 * 3600 * 1000,
        };
        console.log(body);
        registerHabit(
            categoryList.find((item) => item.name == habitCategory).id,
            userInfo.memberId,
            body
        )
            .then((response) => getHabitList())
            .catch((error) => console.log(error));
        setLoading((prev) => !prev);
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
