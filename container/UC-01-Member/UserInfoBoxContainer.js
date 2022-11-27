import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userAllInfo, warnUser } from "../../api/user";
import UserInfoBox from "../../component/UC-01-Member/UserInfoBox";
import { loadingState } from "../../recoil/CommonRecoil";
import { userInfoListState, userInfoState } from "../../recoil/UC-01-Member";

const UserInfoBoxContainer = (props) => {
    const { navigation, item } = props;
    const userInfoList = useRecoilValue(userInfoListState);
    const setUserInfoList = useSetRecoilState(userInfoListState);
    const [loading, setLoading] = useRecoilState(loadingState);

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
        setLoading(!loading);
        warnUser(email)
            .then((response) => {
                getUserAllList();
            })
            .catch((error) => {
                console.log(error.response);
            });
        // console.log("warningTest");
        setLoading(!loading);
    };

    const propDatas = {
        navigation,
        item,
        sendWarnUserApi,
    };
    return <UserInfoBox {...propDatas} />;
};

export default UserInfoBoxContainer;
