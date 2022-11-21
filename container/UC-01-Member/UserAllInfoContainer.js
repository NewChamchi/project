import * as React from "react";
import UserAllInfoScreen from "../../component/UC-01-Member/UserAllInfoScreen";

const UserAllInfoContainer = ({ navigation }) => {
    const propDatas = {
        navigation,
    };
    return <UserAllInfoScreen {...propDatas} />;
};

export default UserAllInfoContainer;
