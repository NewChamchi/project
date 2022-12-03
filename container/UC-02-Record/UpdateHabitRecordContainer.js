import { useCallback, useEffect, useState } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import { memberHabitInquiry, updateHabit } from "../../api/record";
import UpdateHabitRecordScreen from "../../component/UC-02-Record/UpdateHabitRecordScreen";
import { loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordItemState,
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
    const habitRecordItem = useRecoilValue(habitRecordItemState);
    const userInfo = useRecoilValue(userInfoState);
    const [habitName, setHabitName] = useState("");
    const [amount, setAmount] = useState(1);
    const [amountList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [period, setPeriod] = useState(1);
    const [periodList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const index = habitRecordList.findIndex((listItem) => listItem === item);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const periodMilliToSecond = period * 1000;
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

    const getHabitList = () => {
        setLoading(true);
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
        setLoading(false);
    };
    const updateItem = () => {
        setLoading(true);

        const body = {
            name: habitName,
            amount: amount,
            period: periodMilliToSecond,
        };
        console.log(habitRecordItem);
        updateHabit(habitRecordItem.id, body)
            .then((response) => getHabitList())
            .catch((error) => console.log(error));
        setLoading(false);
    };
    const clearState = () => {
        setHabitName("");
        setAmount(1);
        setPeriod(1);
    };
    const propDatas = {
        item,
        id,
        updateScreen,
        setUpdateScreen,
        habitName,
        setHabitName,
        habitRecordItem,
        amount,
        amountList,
        setAmount,
        period,
        periodList,
        setPeriod,
        updateItem,
        clearState,
    };
    return <UpdateHabitRecordScreen {...propDatas} />;
};
export default UpdateHabitRecordContianer;
