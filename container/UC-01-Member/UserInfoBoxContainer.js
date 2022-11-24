import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { warnUser } from "../../api/user";
import UserInfoBox from "../../component/UC-01-Member/UserInfoBox";
import { userInfoListState, userInfoState } from "../../recoil/UC-01-Member";

const UserInfoBoxContainer = (props) => {
    const { navigation, item } = props;
    const userInfoList = useRecoilValue(userInfoListState);
    const setUserInfoList = useSetRecoilState(userInfoListState);
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
    const sendWarnUserApi = (email) => {
        warnUser(email)
            .then((response) => {
                console.log(response);
                getUserAllList();
            })
            .catch((error) => {
                console.log(error.response);
            });
        // console.log("warningTest");
    };

    const propDatas = {
        navigation,
        item,
        sendWarnUserApi,
    };
    return <UserInfoBox {...propDatas} />;
};

export default UserInfoBoxContainer;
