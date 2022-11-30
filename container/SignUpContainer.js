import React, { useState } from "react";
import { Alert } from "react-native";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { signUp } from "../api/user";
import SignUpComponent from "../component/SignUpComponent";
import { loadingState } from "../recoil/CommonRecoil";

const SignUpContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCompare, setPasswordCompare] = useState("");
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const alertNotMatchPassword = () => {
        Alert.alert("비밀번호 오류", "비밀번호가 일치하지 않습니다.", [
            {
                text: "확인",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };
    const sendSignUpApi = async () => {
        setLoading(true);
        try {
            const { data } = await signUp({
                email: email,
                name: name,
                password: password,
            });
            console.log(data);
            Alert.alert(
                "회원 이메일 인증",
                "가입하는 이메일로 보낸 링크를 통해 인증하세요!",
                [
                    {
                        text: "확인",
                        onPress: () => {},
                        style: "cancel",
                    },
                ]
            );
            navigation.navigate("Login");
        } catch (error) {
            console.log(error.response.data.subErrors);
            error.response.data.subErrors.map((item) => {
                Alert.alert(`${item.field} 입력 오류`, item.message, [
                    {
                        text: "확인",
                        onPress: () => {},
                        style: "cancel",
                    },
                ]);
            });
        }

        setLoading(false);
    };

    const trySignUp = () => {
        if (password != passwordCompare) alertNotMatchPassword();
        else sendSignUpApi();
    };
    const propDatas = {
        navigation,
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        sendSignUpApi,
        passwordCompare,
        setPasswordCompare,
        alertNotMatchPassword,
        trySignUp,
    };
    return <SignUpComponent {...propDatas} />;
};

export default SignUpContainer;
