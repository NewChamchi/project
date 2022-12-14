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
        //     method: "get", // ?????? ??????
        //     url: "http://202.31.202.150:5000/api/test", // ??????
        // })
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err));
        // ??????????????? ?????? ???????????? res???
        // getRoleInThisGroup(body)
        //     .then((response) => {
        //         console.log(response["data"]);
        //     })
        //     .catch((error) => console.log(error));
    };

    const sendLoginApi = async () => {
        setLoading(true);
        const body = {
            email: email,
            password: password,
            // test
            // email: "tofhdnsckacl123@daum.net",
            // password: "asdasd123!",
        };
        login(body)
            .then((res) => {
                console.log(res.data);
                const [cookie] = res.headers["set-cookie"];
                console.log(cookie);
                client.defaults.headers.Cookie = cookie;
                setUserInfo((prev) => ({
                    ...prev,
                    memberId: res.headers.id,
                }));
                userSelfInfo()
                    .then((res) => {
                        setUserInfo((prev) => ({
                            ...prev,
                            email: res.data.email,
                            name: res.data.name,
                            role: res.data.role,
                            // role: data.role,
                        }));
                        console.log("?????? ?????? ??????");
                    })
                    .catch((err) => console.log(err));
                inquiryCategoryAll()
                    .then((res) => {
                        setCategoryList(res.data.content);
                        setCategoryNow(res.data.content[0]);
                        console.log("???????????? ??????");
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
                Alert.alert(
                    "????????? ??????",
                    "????????? ?????? ??????????????? ???????????? ????????????.",
                    [
                        {
                            text: "??????",
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
