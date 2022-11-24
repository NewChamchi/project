import React, { useState } from "react";
import { updateUserInfo } from "../../api/user";
import UpdateUserScreen from "../../component/UC-01-Member/UpdateUserScreen";

const UpdateUserContainer = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const getSelfInfo = async () => {
        try {
            const { data } = await userSelfInfo();
            console.log(data);
            setName(data.name);
            setEmail(data.email);
        } catch (e) {
            console.log(e);
        }
    };
    sendUpdateUserApi = (content, updateInfo) => {
        updateUserInfo(content, updateInfo)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
    const propDatas = {
        navigation,
        name,
        setName,
        password,
        setPassword,
    };
    return <UpdateUserScreen {...propDatas} />;
};

export default UpdateUserContainer;
