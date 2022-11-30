import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { judgeCheck, memberHabitInquiry } from "../../api/record";
import HabitRecordDetailScreen from "../../component/UC-02-Record/HabitRecordDetailScreen";
import GroupMemberDetailScreen from "../../component/UC-04-Group/GroupMemberDetailScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
import { groupNowMemberState } from "../../recoil/UC-04-Group";
import { nowDate, replaceItemAtIndex } from "../CommonContainer";

const GroupMemberDetailContainer = ({ navigation }) => {
    const [groupNowMember, setGroupNowMember] =
        useRecoilState(groupNowMemberState);
    const [proceedTime, setProceedTime] = useState("");
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [date, setDate] = useState(0);
    const [year, setYear] = useState(0);

    useEffect(() => {
        const tmpDate = Date.parse(groupNowMember.startTime);
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
        groupNowMember,
        setGroupNowMember,
        proceedTime,
    };
    return <GroupMemberDetailScreen {...propDatas} />;
};

export default GroupMemberDetailContainer;
