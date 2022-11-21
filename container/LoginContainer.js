import React, { useState } from "react";
import { login } from "../api/user";
import LoginComponent from "../component/LoginComponent";

const LoginContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendLoginApi = () => {
        login({
            email: email,
            password: password,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const propDatas = {
        navigation,
        email,
        setEmail,
        password,
        setPassword,
        sendLoginApi,
    };
    return <LoginComponent {...propDatas} />;
};

export default LoginContainer;
