import axios from "axios";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import client from "../api/client";
import { inquiryCategoryAll } from "../api/record";
import { login } from "../api/user";
import LoginComponent from "../component/LoginComponent";
import { categoryListState, categoryNowState } from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { cookies, getCategoryList } from "./CommonContainer";

const LoginContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    const categoryList = useRecoilValue(categoryListState);
    const setCategoryList = useSetRecoilState(categoryListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);

    const sendLoginApi = () => {
        const body = {
            email: email,
            password: password,
        };
        login(body)
            .then((response) => {
                //
                const [cookie] = response.headers["set-cookie"];
                client.defaults.headers.Cookie = cookie;

                // console.log("쿠키" + client.defaults.headers.Cookie);
                // console.log(body);
                setUserInfo({
                    email: email,
                    name: "",
                    password: password,
                    memberId: response.headers.id,
                });
                inquiryCategoryAll()
                    .then((response) => {
                        setCategoryList(response.data.content);
                    })
                    .catch((error) => console.log(error));
                console.log("로그인 된 거 확인");
                console.log(categoryList[0]["name"]);
                setCategoryNow(categoryList[0]);
                console.log(categoryNow["name"]);
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
