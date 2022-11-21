import React, { useState } from "react";
import { signUp } from "../api/user";
import SignUpComponent from "../component/SignUpComponent";

const SignUpContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const sendSignUpApi = () => {
        signUp({
            email: email,
            name: name,
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
        name,
        setName,
        password,
        setPassword,
        sendSignUpApi,
    };
    return <SignUpComponent {...propDatas} />;
};

export default SignUpContainer;
