import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import HabitRecordDetailScreen from "../../component/UC-02-Record/HabitRecordDetailScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
import { nowDate, replaceItemAtIndex } from "../CommonContainer";

const HabitRecordDetailContainer = (props) => {
    const { navigation, id } = props;
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const habitRecordItem = useRecoilValue(habitRecordItemState);
    const setHabitRecordItem = useSetRecoilState(habitRecordItemState);
    const userInfo = useRecoilValue(userInfoState);
    const [proceedTime, setProceedTime] = useState("");
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [date, setDate] = useState(0);
    const [year, setYear] = useState(0);

    // const updateTime = () => {
    //     const index = habitRecordList.findIndex(
    //         (listItem) => listItem === habitRecordItem
    //     );
    //     console.log(habitRecordItem);
    //     setHabitRecordItem({
    //         ...habitRecordItem,
    //         startTime: nowDate(),
    //     });
    //     console.log(habitRecordList);

    //     const newList = replaceItemAtIndex(
    //         habitRecordList,
    //         index,
    //         habitRecordItem
    //     );

    //     setHabitRecordList(newList);
    // };

    const updateTime = useCallback(async () => {
        try {
            const body = {
                email: userInfo.email,
                habitId: id,
                startTime: nowDate(),
            };
            const { data } = resetStartTime(body);
            console.log("시간 초기화 성공");
            setHabitRecordItem({
                ...habitRecordItem,
                startTime: data["startTime"],
            });
        } catch (e) {
            console.log("시간 초기화 실패");
        }
    });

    // function difference(date1, date2) {
    //     const date1utc = Date.UTC(
    //         date1.getFullYear(),
    //         date1.getMonth(),
    //         date1.getDate()
    //     );
    //     const date2utc = Date.UTC(
    //         date2.getFullYear(),
    //         date2.getMonth(),
    //         date2.getDate()
    //     );
    //     day = 1000 * 60 * 60 * 24;
    //     return (date2utc - date1utc) / day;
    // }

    // useEffect(() => {
    //     let proceedTimestamp;
    //     setInterval(() => {
    //         const now = Math.floor(+now / 1000);
    //         const startTime = Math.floor(+habitRecordItem["startTime"] / 1000);
    //         proceedTimestamp = now - startTime;
    //         setSecond(parseInt(proceedTimestamp / 1000) % 60);
    //         setMinute(parseInt(proceedTimestamp / (1000 * 60)) % 60);
    //         setHour(parseInt(proceedTimestamp / (1000 * 60 * 60)) % 24);
    //         setDate(parseInt(proceedTimestamp / (1000 * 60 * 60 * 24)) % 365);
    //         setYear(parseInt(proceedTimestamp / (1000 * 60 * 60 * 24 * 365)));
    //     }, 1000);
    // }, [habitRecordItem]);

    useEffect(() => {
        const tmpId = setInterval(() => {
            const tmpTime = nowDate() - habitRecordItem.startTime;
            setSecond(parseInt(tmpTime / 1000) % 60);
            setMinute(parseInt(tmpTime / (1000 * 60)) % 60);
            setHour(parseInt(tmpTime / (1000 * 60 * 60)) % 24);
            setDate(parseInt(tmpTime / (1000 * 60 * 60 * 24)) % 365);
            setYear(parseInt(tmpTime / (1000 * 60 * 60 * 24 * 365)));
            setProceedTime(
                year +
                    "년 " +
                    date +
                    "일 " +
                    hour +
                    "시간 " +
                    minute +
                    "분 " +
                    second +
                    "초 "
            );
        }, 1000);
        return () => clearInterval(tmpId);
    });
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
