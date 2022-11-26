import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAllInfo } from "../../api/user";
import UserAllInfoScreen from "../../component/UC-01-Member/UserAllInfoScreen";
import { userInfoListState } from "../../recoil/UC-01-Member";
const testData = [
    { name: "하하", email: "asdasdasdasd", role: "ROLE_USER" },
    { name: "유재석", email: "azzsdasdasdasd", role: "ROLE_ADMIN" },
];
const UserAllInfoContainer = ({ navigation }) => {
    const userInfoList = useRecoilValue(userInfoListState);
    const setUserInfoList = useSetRecoilState(userInfoListState);

    useEffect(() => {
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
    }, []);
    const propDatas = {
        navigation,
        userInfoList,
        setUserInfoList,
    };
    return <UserAllInfoScreen {...propDatas} />;
};

export default UserAllInfoContainer;
