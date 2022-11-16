import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UpdateHabitRecordScreen from "../../component/UC-02-Record/UpdateHabitRecordScreen";
import {
    habitRecordListState,
    updateScreenState,
} from "../../recoil/UC-02-Record";
import { replaceItemAtIndex } from "../CommonContainer";

const UpdateHabitRecordContianer = (props) => {
    const { item } = props;
    const updateScreen = useRecoilValue(updateScreenState);
    const setUpdateScreen = useSetRecoilState(updateScreenState);
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const [habitName, setHabitName] = useState("");
    const [reduceUnit, setReduceUnit] = useState(1);
    const [reduceUnitList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [checkPeriod, setCheckPeriod] = useState(1);
    const [checkPeriodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const index = habitRecordList.findIndex((listItem) => listItem === item);
    const updateItem = (habitName, reduceUnit, checkPeriod) => {
        console.log(item);
        console.log(index);
        const newList = replaceItemAtIndex(habitRecordList, index, {
            ...item,
            name: habitName,
            reduceUnit: reduceUnit,
            checkPeriod: checkPeriod,
        });

        setHabitRecordList(newList);
    };
    const clearState = () => {
        setHabitName("");
        setReduceUnit(1);
        setCheckPeriod(1);
    };
    const propDatas = {
        item,
        updateScreen,
        setUpdateScreen,
        habitName,
        setHabitName,
        reduceUnit,
        setReduceUnit,
        reduceUnitList,
        checkPeriod,
        setCheckPeriod,
        checkPeriodList,
        updateItem,
        clearState,
    };
    return <UpdateHabitRecordScreen {...propDatas} />;
};
export default UpdateHabitRecordContianer;
