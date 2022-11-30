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
        period: 100000000,
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
        period: 100000000,
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
    const sendTestApi = () => {
        const body = {
            myNickName: "aa",
            groupName: "a",
        };
        // axios
        //     .get("http://202.31.202.150:5000/api/test")
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err));
        // 서버로부터 받은 데이터는 res에
        inquiryGroupMemberList(body)
            .then((response) => {
                console.log(response["data"]);
            })
            .catch((error) => console.log(error.response.data.message));
    };
    useEffect(() => {
        setLoading(true);

        const getHabitList = () => {
            console.log(userInfo);
            // const { data } = memberHabitInquiry(userInfo.memberId) // 테스트용 임시
            memberHabitInquiry(userInfo.memberId)
                .then((response) => {
                    console.log(response["data"]);

                    setHabitRecordList(response["data"]);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getHabitList();
        // test
        // setHabitRecordList(testData);
        setLoading(false);
    }, []);

    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
        sendTestApi,
    };
    return <HabitRecordScreen {...propDatas} />;
};

export default HabitRecordContainer;
