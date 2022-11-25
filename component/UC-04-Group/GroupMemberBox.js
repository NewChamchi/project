import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const GroupMemberBox = (props) => {
    const { item, id } = props;
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
                <Text>{item.memberName}</Text>
                <Text>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GroupMemberBox;
