import React, { useEffect } from "react";
import { logout, withdrawMember } from "../../api/user";
import UserMainScreen from "../../component/UC-01-Member/UserMainScreen";

const UserMainContainer = ({ navigation }) => {
    sendLogoutApi = () => {
        logout()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    sendWithdrawApi = () => {
        withdrawMember()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
    const propDatas = {
        navigation,
        sendLogoutApi,
        sendWithdrawApi,
    };
    return <UserMainScreen {...propDatas} />;
};

export default UserMainContainer;
