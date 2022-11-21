import * as React from "react";
import UserMainScreen from "../../component/UC-01-Member/UserMainScreen";

const UserMainContainer = ({ navigation }) => {
    const propDatas = {
        navigation,
    };
    return <UserMainScreen {...propDatas} />;
};

export default UserMainContainer;
