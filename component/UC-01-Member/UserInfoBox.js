import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Alert,
} from "react-native";

const UserInfoBox = (props) => {
    const { navigation, item, sendWarnUserApi } = props;
    return (
        <View style={styles.box}>
            <View>
                <Text style={{ fontSize: 20, margin: 10 }}>
                    이름 : {item.name}
                </Text>
                <Text style={{ fontSize: 20, margin: 10 }}>
                    이메일 : {item.email}
                </Text>
            </View>

            <View style={{ alignSelf: "center", paddingRight: 10 }}>
                <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={() => sendWarnUserApi(item.email)}
                >
                    <MaterialCommunityIcons name="alert-circle" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
    },
});

export default UserInfoBox;
