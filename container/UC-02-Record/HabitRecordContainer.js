import { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryHabitList, memberHabitInquiry } from "../../api/record";
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
        amount: 3,
        period: 100000000,
        count: 1,
        date: "2022-11-17T09:30:59.000+00:00",
        check: false,
    },
    {
        id: 2,
        category: "game",
        name: "게임 끊기!",
        amount: 20,
        period: 100000000,
        count: 0,
        date: "2022-11-17T09:30:59.000+00:00",
        check: false,
    },
];

const HabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const userInfo = useRecoilValue(userInfoState);

    useEffect(() => {
        const getHabitList = () => {
            console.log("됨1");
            const { data } = memberHabitInquiry(userInfo.memberId) // 테스트용 임시
                .then((response) => {
                    console.log("됨2");

                    setHabitRecordList(data);
                })
                .catch((error) => {
                    console.log("됨3");
                    console.log(error);
                });
        };
        getHabitList();
        // test
        // setHabitRecordList(testData);
    }, [habitRecordList]);

    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
    };
    return <HabitRecordScreen {...propDatas} />;
};

export default HabitRecordContainer;
