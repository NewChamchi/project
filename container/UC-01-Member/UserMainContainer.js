import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
} from "recoil";
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
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);
    const isFocused = useIsFocused();
    useEffect(() => {
        setLoading(true);
        const getSelfInfo = async () => {
            try {
                const { data } = await userSelfInfo();
                console.log(data);
                setUserInfo({
                    ...userInfo,
                    name: data.name,
                    email: data.email,
                });
            } catch (error) {
                console.log(error);
            }
        };
        getSelfInfo();
        setLoading(false);
    }, [isFocused]);

    const sendLogoutApi = async () => {
        setLoading(true);
        try {
            const resetUserInfo = useResetRecoilState(userInfoState);
            await logout();
            resetUserInfo();
            client.defaults.headers.Cookie = null;
        } catch (error) {
            console.log(error);
            Alert.alert("로그아웃 오류", "로그아웃에 실패했습니다.", [
                {
                    text: "확인",
                    onPress: () => {},
                    style: "cancel",
                },
            ]);
        }
        setLoading(false);
    };

    const sendWithdrawApi = () => {
        setLoading(true);
        withdrawMember()
            .then((response) => {
                setUserInfo({ name: "", email: "" });
            })
            .catch((error) => {
                console.log(error.response);
            });
        setLoading(false);
    };
    const logoutAlert = (sendLogoutApi) => {
        Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
            {
                text: "예",
                onPress: () => {
                    sendLogoutApi();
                },
            },
            {
                text: "아니오",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };

    const withdrawAlert = (sendWithdrawApi) => {
        Alert.alert("회원탈퇴", "정말 회원 탈퇴 하시겠습니까?", [
            {
                text: "예",
                onPress: () => {
                    sendWithdrawApi();
                },
            },
            {
                text: "아니오",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };
    const propDatas = {
        navigation,
        sendLogoutApi,
        sendWithdrawApi,
        name,
        email,
        userInfo,
        setUserInfo,
        logoutAlert,
        withdrawAlert,
    };
    return <UserMainScreen {...propDatas} />;
};

export default UserMainContainer;
