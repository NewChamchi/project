import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import HabitRecordDetailScreen from "../../component/UC-02-Record/HabitRecordDetailScreen";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
import { nowDate, replaceItemAtIndex } from "../CommonContainer";

const HabitRecordDetailContainer = ({ navigation, id }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const habitRecordItem = useRecoilValue(habitRecordItemState);
    const setHabitRecordItem = useSetRecoilState(habitRecordItemState);
    const [proceedTime, setProceedTime] = useState(null);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [date, setDate] = useState(0);
    const [year, setYear] = useState(0);

    const updateTime = () => {
        const index = habitRecordList.findIndex(
            (listItem) => listItem === habitRecordItem
        );
        console.log(habitRecordItem);
        setHabitRecordItem({
            ...habitRecordItem,
            startTime: nowDate(),
        });
        console.log(habitRecordList);

        const newList = replaceItemAtIndex(
            habitRecordList,
            index,
            habitRecordItem
        );

        setHabitRecordList(newList);
    };

    function difference(date1, date2) {
        const date1utc = Date.UTC(
            date1.getFullYear(),
            date1.getMonth(),
            date1.getDate()
        );
        const date2utc = Date.UTC(
            date2.getFullYear(),
            date2.getMonth(),
            date2.getDate()
        );
        day = 1000 * 60 * 60 * 24;
        return (date2utc - date1utc) / day;
    }
    useEffect(() => {
        let proceedTimestamp;
        setInterval(() => {
            const now = Math.floor(+now / 1000);
            const startTime = Math.floor(+habitRecordItem["startTime"] / 1000);
            proceedTimestamp = now - startTime;
            setSecond(parseInt(proceedTimestamp / 1000) % 60);
            setMinute(parseInt(proceedTimestamp / (1000 * 60)) % 60);
            setHour(parseInt(proceedTimestamp / (1000 * 60 * 60)) % 24);
            setDate(parseInt(proceedTimestamp / (1000 * 60 * 60 * 24)) % 365);
            setYear(parseInt(proceedTimestamp / (1000 * 60 * 60 * 24 * 365)));
            setProceedTime(now);
        }, 1000);
    }, [habitRecordItem]);
    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
        habitRecordItem,
        setHabitRecordItem,
        proceedTime,
        updateTime,
    };
    return <HabitRecordDetailScreen {...propDatas} />;
};

export default HabitRecordDetailContainer;
