import axios from "axios";
import React, { useState } from "react";
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useRecoilStateLoadable,
} from "recoil";
import client from "../api/client";
import { getRoleInThisGroup } from "../api/group";
import { inquiryCategoryAll, verifyPicture } from "../api/record";
import { login } from "../api/user";
import LoginComponent from "../component/LoginComponent";
import {
    categoryListState,
    categoryNowState,
    loadingState,
} from "../recoil/CommonRecoil";
import { userInfoState } from "../recoil/UC-01-Member";
import { cookies, getCategoryList } from "./CommonContainer";

const LoginContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    const [categoryList, setCategoryList] = useRecoilState(categoryListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const sendTestApi = () => {
        const body = {
            myNickName: "aa",
            groupName: "a",
        };
        axios({
            method: "get", // 통신 방식
            url: "http://202.31.202.150:5000/api/test", // 서버
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        // 서버로부터 받은 데이터는 res에
        // getRoleInThisGroup(body)
        //     .then((response) => {
        //         console.log(response["data"]);
        //     })
        //     .catch((error) => console.log(error));
    };

    const sendLoginApi = () => {
        setLoading((prev) => !prev);
        // inquiryCategoryAll()
        //     .then((response) => {
        //         console.log(response["data"]["content"]);
        //         setCategoryList(response["data"]["content"]);
        //     })
        //     .catch((error) => console.log(error));
        // const data2 = {
        //     email: email,
        //     name: "asdasd",
        //     password: password,
        //     memberId: 11,
        // };
        // setUserInfo(data2);
        const body = {
            email: email,
            password: password,
        };
        login(body)
            .then((response) => {
                console.log("로그인 시도");
                //
                const [cookie] = response.headers["set-cookie"];
                client.defaults.headers.Cookie = cookie;

                setUserInfo({
                    email: email,
                    name: "",
                    password: password,
                    memberId: response.headers.id,
                });
                inquiryCategoryAll()
                    .then((response) => {
                        setCategoryList(response["data"]["content"]);
                        setCategoryNow(response["data"]["content"][0]);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            });
        setLoading((prev) => !prev);
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
        sendTestApi,
    };
    return <LoginComponent {...propDatas} />;
};

export default LoginContainer;
