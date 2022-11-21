import React, { useState } from "react";
import UpdateUserScreen from "../../component/UC-01-Member/UpdateUserScreen";

const UpdateUserContainer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const propDatas = {
        navigation,
        email,
        setEmail,
        name,
        setName,
    };
    return <UpdateUserScreen {...propDatas} />;
};

export default UpdateUserContainer;
