import { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryHabitList } from "../../api/record";
import HabitRecordScreen from "../../component/UC-02-Record/HabitRecordScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

const testData = [
    {
        id: 1,
        category: "tobacco",
        name: "담배 끊기aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!",
        reduceUnit: 2,
        checkPeriod: 3,
        startTime: nowDate(),
    },
    {
        id: 2,
        category: "game",
        name: "게임 끊기!",
        reduceUnit: 3,
        checkPeriod: 4,
        startTime: nowDate(),
    },
];

const HabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const userInfo = useRecoilValue(userInfoState);

    useEffect(() => {
        const getHabitList = async () => {
            try {
                const { data } = await inquiryHabitList({
                    email: userInfo.email,
                });
                setHabitRecordList(data.contents);
            } catch (e) {
                setHabitRecordList([]);
            }
        };
        // getHabitList();
        setHabitRecordList(testData);
    }, [habitRecordList]);

    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
    };
    return <HabitRecordScreen {...propDatas} />;
};

export default HabitRecordContainer;
