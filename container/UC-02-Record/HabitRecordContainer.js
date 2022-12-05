import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import {
    applyGroup,
    getRoleInThisGroup,
    inquiryGroupMemberList,
} from "../../api/group";
import { inquiryHabitList, memberHabitInquiry } from "../../api/record";
import HabitRecordScreen from "../../component/UC-02-Record/HabitRecordScreen";
import { loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

const testData = [
    {
        id: 1,
        name: "do exercise little",
        categoryName: "운동",
        amount: 20,
        period: 1000 * 10,
        count: 0,
        date: "2022-11-25T04:09:20.000+00:00",
        check: false,
        location: null,
    },
    {
        id: 2,
        name: "do exercise little",
        categoryName: "운동",
        amount: 20,
        period: 1000 * 10,
        count: 0,
        date: "2022-11-25T06:40:24.000+00:00",
        check: false,
        location: null,
    },
];

const HabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const userInfo = useRecoilValue(userInfoState);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);
    const isFocused = useIsFocused();
    const sendTestApi = () => {
        const body = {
            myNickName: "aa",
            groupName: "a",
        };
    };
    useEffect(() => {
        setLoading(true);

        const getHabitList = async () => {
            console.log(userInfo);

            try {
                console.log("멤버 아이디로 조회");
                console.log(userInfo.memberId);
                const { data } = await memberHabitInquiry(userInfo.memberId); // 테스트용 임시
                setHabitRecordList(data);
            } catch (error) {
                console.log(error.response.data);
            }
        };
        getHabitList();
        // console.log("FoucsEffect");
        // setHabitRecordList(testData);
        setLoading(false);
    }, [isFocused]);

    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
        sendTestApi,
    };
    return <HabitRecordScreen {...propDatas} />;
};

export default HabitRecordContainer;
