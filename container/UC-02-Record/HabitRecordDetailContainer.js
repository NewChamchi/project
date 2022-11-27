import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { judgeCheck } from "../../api/record";
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

    const getHabitList = () => {
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
    };
    useEffect(() => {
        const verifyAmountCheck = setInterval(() => {
            const tmpTime = nowDate() - Date.parse(habitRecordItem.date);
            if (tmpTime <= habitRecordItem.amount * habitRecordItem.count) {
                judgeCheck(habitRecordItem.id)
                    .then((response) => {
                        console.log("시간 체크");
                        getHabitList();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }, 1000);
        return () => clearInterval(verifyAmountCheck);
    });
    useEffect(() => {
        const tmpDate = Date.parse(habitRecordItem.date);
        const countProceedTime = setInterval(() => {
            const tmpTime = nowDate() - tmpDate;
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
        return () => clearInterval(countProceedTime);
    });
    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
        habitRecordItem,
        setHabitRecordItem,
        proceedTime,
        judgeCheck,
        getHabitList,
    };
    return <HabitRecordDetailScreen {...propDatas} />;
};

export default HabitRecordDetailContainer;
