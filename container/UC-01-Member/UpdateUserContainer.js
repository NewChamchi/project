import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { updateUserInfo, userSelfInfo } from "../../api/user";
import UpdateUserScreen from "../../component/UC-01-Member/UpdateUserScreen";
import { userInfoState } from "../../recoil/UC-01-Member";

const UpdateUserContainer = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    const getSelfInfo = async () => {
        try {
            const { data } = await userSelfInfo();
            console.log(data);
            setUserInfo({ ...userInfo, name: name, password: password });
        } catch (e) {
            console.log(e);
        }
    };
    const sendUpdateUserApi = (content, updateInfo) => {
        updateUserInfo(content, updateInfo)
            .then((response) => {
                getSelfInfo();
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
        userInfo,
        setUserInfo,
        sendUpdateUserApi,
    };
    return <UpdateUserScreen {...propDatas} />;
};

export default UpdateUserContainer;
