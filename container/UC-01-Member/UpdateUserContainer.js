import * as React from "react";
import UpdateUserScreen from "../../component/UC-01-Member/UpdateUserScreen";

const UpdateUserContainer = ({ navigation }) => {
    const propDatas = {
        navigation,
    };
    return <UpdateUserScreen {...propDatas} />;
};

export default UpdateUserContainer;
