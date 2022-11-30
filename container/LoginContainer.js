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

    const sendLoginApi = async () => {
        setLoading(true);
        const body = {
            email: email,
            password: password,
        };

        try {
            const { data, headers } = await login(body);
            const [cookie] = headers["set-cookie"];
            client.defaults.headers.Cookie = cookie;
            setUserInfo({
                email: email,
                name: "",
                role: "",
                password: password,
                memberId: headers.id,
            });

            try {
                const { data } = await userSelfInfo();
                setUserInfo({ ...userInfo, name: data.name, role: data.role });
            } catch (error) {
                console.log(error);
            }
            console.log(data);
            try {
                const { data } = inquiryCategoryAll();
                setCategoryList(data.content);
                setCategoryNow(data.content[0]);
                console.log(data);
            } catch (error) {
                console.log(error.response.data);
            }
        } catch (error) {
            console.log(error.response.data);
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
        }

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
