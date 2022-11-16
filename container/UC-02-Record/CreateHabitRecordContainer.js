import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CreateHabitRecordScreen from "../../component/UC-02-Record/CreateHabitRecordScreen";
import { habitRecordListState } from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

let id = 0;

const CreateHabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const [habitName, setHabitName] = useState("");
    const [habitCategory, setHabitCategory] = useState("🎮");
    const [habitCategoryList] = useState(["🎮", "👞", "🏀"]);
    const [reduceUnit, setReduceUnit] = useState(1);
    const [reduceUnitList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [checkPeriod, setCheckPeriod] = useState(1);
    const [checkPeriodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const addItem = (oldHabitRecordList) => {
        setHabitRecordList((oldHabitRecordList) => [
            ...oldHabitRecordList,
            {
                id: getId(),
                name: habitName,
                category: habitCategory,
                reduceUnit: reduceUnit,
                checkPeriod: checkPeriod,
                startTime: nowDate(),
                picture: null,
                isChecked: false,
            },
        ]);
        console.log(habitRecordList);
    };

    function getId() {
        return id++;
    }
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
