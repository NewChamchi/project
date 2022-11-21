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
    const [reduceUnit, setReduceUnit] = useState(1);
    const [reduceUnitList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [checkPeriod, setCheckPeriod] = useState(1);
    const [checkPeriodList] = useState([1, 2, 3, 4, 5, 6, 7]);
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

    const addItem = useCallback(async () => {
        try {
            const body = {
                email: userInfo.email,
                category: habitCategory,
                habitName: habitName,
                reduceUnit: reduceUnit,
                checkPeriod: checkPeriod,
                startTime: nowDate(),
            };
            const { data } = await createHabit(body);
            console.log("생성 성공");
            setHabitRecordList(data.contents);
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
        reduceUnit,
        reduceUnitList,
        checkPeriod,
        checkPeriodList,
        setReduceUnit,
        setCheckPeriod,
    };
    return <CreateHabitRecordScreen {...propDatas} />;
};

export default CreateHabitRecordContainer;
