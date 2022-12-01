// import { ConfigurationServicePlaceholders } from "aws-sdk/lib/config_service_placeholders";
import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-native";
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useRecoilStateLoadable,
} from "recoil";
import client from "../api/client";
import { getRoleInThisGroup } from "../api/group";
import { inquiryCategoryAll, verifyPicture } from "../api/record";
import { login, userSelfInfo } from "../api/user";
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
    const [userInfo, setUserInfo] = useRecoilStateLoadable(userInfoState);
    const [categoryList, setCategoryList] =
        useRecoilStateLoadable(categoryListState);
    const [categoryNow, setCategoryNow] =
        useRecoilStateLoadable(categoryNowState);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const sendTestApi = async () => {
        const body = {
            email: "tofhdnsckacl123@daum.net",
            password: "asdasd123!",
        };
        try {
            const { data, headers } = await login(body);
            console.log(data);
            console.log(headers);
            const [cookie] = headers["set-cookie"];
            console.log(cookie);
            client.defaults.headers.Cookie = cookie;
            const { data: testdata2 } = await userSelfInfo();
            console.log(testdata2);
            // setUserInfo({
            //     email: email,
            //     password: password,
            //     memberId: headers.id,
            //     name: testdata2.name,
            //     role: "ROLE_USER",
            //     // role: data.role,
            // });
            const { data: categoryListData } = await inquiryCategoryAll();
            // setCategoryList(categoryListData.content);
            // setCategoryNow(categoryListData.content[0]);
            console.log(categoryListData);
        } catch (error) {
            console.log(error);
        }
        // const body = {
        //     myNickName: "aa",
        //     groupName: "a",
        // };
        // axios({
        //     method: "get", // 통신 방식
        //     url: "http://202.31.202.150:5000/api/test", // 서버
        // })
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err));
        // 서버로부터 받은 데이터는 res에
        // getRoleInThisGroup(body)
        //     .then((response) => {
        //         console.log(response["data"]);
        //     })
        //     .catch((error) => console.log(error));
    };

    const sendLoginApi = async () => {
        setLoading(true);
        const body = {
            // email: email,
            // password: password,
            // test
            email: "tofhdnsckacl123@daum.net",
            password: "asdasd123!",
        };
        login(body)
            .then((res) => {
                console.log(res.data);
                const [cookie] = res.headers["set-cookie"];
                console.log(cookie);
                client.defaults.headers.Cookie = cookie;
                setUserInfo({
                    email: email,
                    password: password,
                    memberId: res.headers.id,
                });
                userSelfInfo()
                    .then((res) => {
                        setUserInfo({
                            ...userInfo,
                            name: res.data.name,
                            role: "ROLE_ADMIN",
                            // role: data.role,
                        });
                    })
                    .catch((err) => console.log(err));
                inquiryCategoryAll()
                    .then((res) => {
                        setCategoryList(res.data.content);
                        setCategoryNow(res.data.content[0]);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
                Alert.alert(
                    "로그인 오류",
                    "이메일 혹은 비밀번호가 정확하지 않습니다.",
                    [
                        {
                            text: "확인",
                            onPress: () => {},
                            style: "cancel",
                        },
                    ]
                );
            });

        setLoading(false);
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
