import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import client from "../../api/client";
import { logout, userSelfInfo, withdrawMember } from "../../api/user";
import UserMainScreen from "../../component/UC-01-Member/UserMainScreen";
import { userInfoState } from "../../recoil/UC-01-Member";

const UserMainContainer = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    useEffect(() => {
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
    }, []);
    const sendLogoutApi = () => {
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
    };

    const sendWithdrawApi = () => {
        withdrawMember()
            .then((response) => {
                setUserInfo({ name: "", email: "" });
            })
            .catch((error) => {
                console.log(error.response);
            });
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
