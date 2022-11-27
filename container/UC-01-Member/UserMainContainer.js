import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import client from "../../api/client";
import { logout, userSelfInfo, withdrawMember } from "../../api/user";
import UserMainScreen from "../../component/UC-01-Member/UserMainScreen";
import { loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";

const UserMainContainer = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    const [loading, setLoading] = useRecoilState(loadingState);
    useEffect(() => {
        setLoading(!loading);
        const getSelfInfo = async () => {
            try {
                const { data } = await userSelfInfo();
                console.log(data);
                setUserInfo({
                    ...userInfo,
                    name: data.name,
                    email: data.email,
                });
            } catch (e) {
                console.log(e);
            }
        };
        getSelfInfo();
        setLoading(!loading);
    }, []);
    const sendLogoutApi = () => {
        setLoading(!loading);
        logout()
            .then((response) => {
                setUserInfo({
                    name: "",
                    email: "",
                    password: "",
                    memberId: "",
                });
                client.defaults.headers.Cookie = null;
            })
            .catch((error) => {
                console.log(error.response);
            });
        setLoading(!loading);
    };

    const sendWithdrawApi = () => {
        setLoading(!loading);
        withdrawMember()
            .then((response) => {
                setUserInfo({ name: "", email: "" });
            })
            .catch((error) => {
                console.log(error.response);
            });
        setLoading(!loading);
    };
    const propDatas = {
        navigation,
        sendLogoutApi,
        sendWithdrawApi,
        name,
        email,
        userInfo,
        setUserInfo,
    };
    return <UserMainScreen {...propDatas} />;
};

export default UserMainContainer;
