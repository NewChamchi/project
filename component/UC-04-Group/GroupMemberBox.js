import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageType } from "expo-camera/build/Camera.types";
import { Text, TouchableOpacity, View } from "react-native";

const GroupMemberBox = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity
            style={{
                width: 100,
                backgroundColor: "#DFDFDF",
                marginHorizontal: 5,
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons name="account-circle" size={40} />
            <View>
                <Text>{item.nickName}</Text>
                <Text>
                    {item.role == "ROLE_GROUP_ADMIN" ? "관리자" : "사용자"}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default GroupMemberBox;
