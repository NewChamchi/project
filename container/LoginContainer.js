import axios from "axios";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryCategoryAll } from "../api/record";
import { login } from "../api/user";
import LoginComponent from "../component/LoginComponent";
import { categoryListState, categoryNowState } from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { getCategoryList } from "./CommonContainer";

const LoginContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    const categoryList = useRecoilValue(categoryListState);
    const setCategoryList = useSetRecoilState(categoryListState);
    const setCategoryNow = useSetRecoilState(categoryNowState);

    const sendLoginApi = () => {
        const body = {
            email: email,
            password: password,
        };
        login(body)
            .then((response) => {
                axios.defaults.headers["Cookies"] = response.headers.Cookies;
                console.log(body);
                setUserInfo(body);
                getCategoryList();
                setCategoryNow(categoryList[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const propDatas = {
        navigation,
        email,
        setEmail,
        password,
        setPassword,
        sendLoginApi,
        userInfo,
        setUserInfo,
    };
    return <LoginComponent {...propDatas} />;
};

export default LoginContainer;
