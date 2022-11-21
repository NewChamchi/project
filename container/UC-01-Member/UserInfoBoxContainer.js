import React from "react";
import UserInfoBox from "../../component/UC-01-Member/UserInfoBox";

const UserInFoBoxContainer = ({ navigation }) => {
    const propDatas = {
        navigation,
    };
    return <UserInfoBox {...propDatas} />;
};

export default UserInFoBoxContainer;
