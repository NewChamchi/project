import React, { useEffect } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import { userAllInfo } from "../../api/user";
import UserAllInfoScreen from "../../component/UC-01-Member/UserAllInfoScreen";
import { loadingState } from "../../recoil/CommonRecoil";
import { userInfoListState } from "../../recoil/UC-01-Member";
const testData = [
    { name: "하하", email: "asdasdasdasd", role: "ROLE_USER" },
    { name: "유재석", email: "azzsdasdasdasd", role: "ROLE_ADMIN" },
];
const UserAllInfoContainer = ({ navigation }) => {
    const userInfoList = useRecoilValue(userInfoListState);
    const setUserInfoList = useSetRecoilState(userInfoListState);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    useEffect(() => {
        setLoading((prev) => !prev);
        const getUserAllList = async () => {
            try {
                const { data } = await userAllInfo();
                setUserInfoList(data);
                console.log(data);
            } catch (e) {
                console.log(e);
                setUserInfoList([]);
            }
        };
        getUserAllList();
        // test
        // setUserInfoList(testData);
        // console.log(testData);
        setLoading((prev) => !prev);
    }, []);
    const propDatas = {
        navigation,
        userInfoList,
        setUserInfoList,
    };
    return <UserAllInfoScreen {...propDatas} />;
};

export default UserAllInfoContainer;
