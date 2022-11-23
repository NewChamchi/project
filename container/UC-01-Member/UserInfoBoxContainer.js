import React from "react";
import { warnUser } from "../../api/user";
import UserInfoBox from "../../component/UC-01-Member/UserInfoBox";

const UserInfoBoxContainer = (props) => {
    const { navigation, item } = props;

    const sendWarnUserApi = (email) => {
        // warnUser()
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
        console.log("warningTest");
    };

    const propDatas = {
        navigation,
        item,
        sendWarnUserApi,
    };
    return <UserInfoBox {...propDatas} />;
};

export default UserInfoBoxContainer;
