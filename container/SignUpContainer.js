import React, { useState } from "react";
import { Alert } from "react-native";
import { useRecoilState } from "recoil";
import { signUp } from "../api/user";
import SignUpComponent from "../component/SignUpComponent";
import { loadingState } from "../recoil/CommonRecoil";

const SignUpContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useRecoilState(loadingState);
    const sendSignUpApi = () => {
        setLoading(!loading);
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
                setLoading(!loading);
            })
            .catch((error) => {
                console.log(error);
                setLoading(!loading);
            });
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
