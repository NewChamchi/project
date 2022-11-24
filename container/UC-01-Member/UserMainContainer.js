import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
                setName(data.name);
                setEmail(data.email);
            } catch (e) {
                console.log(e);
            }
        };
        getSelfInfo();
    });
    const sendLogoutApi = () => {
        logout()
            .then((response) => {
                console.log(response);
                setUserInfo({ name: "", email: "" });
                axios.defaults.headers["Cookies"] = null;
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const sendWithdrawApi = () => {
        withdrawMember()
            .then((response) => {
                console.log(response);
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
    };
    return <UserMainScreen {...propDatas} />;
};

export default UserMainContainer;
