import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { updateHabit } from "../../api/record";
import UpdateHabitRecordScreen from "../../component/UC-02-Record/UpdateHabitRecordScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordListState,
    updateScreenState,
} from "../../recoil/UC-02-Record";
import { replaceItemAtIndex } from "../CommonContainer";

const UpdateHabitRecordContianer = (props) => {
    const { item, id } = props;
    const updateScreen = useRecoilValue(updateScreenState);
    const setUpdateScreen = useSetRecoilState(updateScreenState);
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const userInfo = useRecoilValue(userInfoState);
    const [habitName, setHabitName] = useState("");
    const [reduceUnit, setReduceUnit] = useState(1);
    const [reduceUnitList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [checkPeriod, setCheckPeriod] = useState(1);
    const [checkPeriodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const index = habitRecordList.findIndex((listItem) => listItem === item);
    // const updateItem = (habitName, reduceUnit, checkPeriod) => {
    //     console.log(item);
    //     console.log(index);
    //     const newList = replaceItemAtIndex(habitRecordList, index, {
    //         ...item,
    //         name: habitName,
    //         reduceUnit: reduceUnit,
    //         checkPeriod: checkPeriod,
    //     });

    //     setHabitRecordList(newList);
    // };
    const updateItem = useCallback(async () => {
        try {
            const body = {
                name: habitName,
                amount: amount,
                period: period,
            };
            const { data } = updateHabit(id, body);
            console.log("수정 성공");
            setHabitRecordList(data.contents);
        } catch (e) {
            console.log("수정 실패");
        }
    });
    const clearState = () => {
        setHabitName("");
        setReduceUnit(1);
        setCheckPeriod(1);
    };
    const propDatas = {
        item,
        id,
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
