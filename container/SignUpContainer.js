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
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);
    const sendSignUpApi = () => {
        // setLoading((prev) => !prev);
        console.log(email);
        console.log(name);
        console.log(password);
        signUp({
            email: email,
            name: name,
            password: password,
        })
            .then((response) => {
                navigation.navigate("Login");
            })
            .catch((error) => {
                console.log(error);
            });

        // setLoading((prev) => !prev);
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
    };
    return <SignUpComponent {...propDatas} />;
};

export default SignUpContainer;
