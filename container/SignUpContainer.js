import React, { useState } from "react";
import { Alert } from "react-native";
import { signUp } from "../api/user";
import SignUpComponent from "../component/SignUpComponent";

const SignUpContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const sendSignUpApi = () => {
        console.log(email);
        console.log(name);
        console.log(password);
        signUp({
            email: email,
            name: name,
            password: password,
        })
            .then((response) => {
                console.log(response);
                navigation.navigate("Login");
            })
            .catch((error) => {
                console.log(error);
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
