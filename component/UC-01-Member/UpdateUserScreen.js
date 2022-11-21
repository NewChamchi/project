import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Alert,
    TextInput,
} from "react-native";
import { ScrollView } from "react-native-web";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UpdateUserScreen = (props) => {
    const { navigation, email, setEmail, name, setName } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    width: 250,
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, paddingRight: 10 }}>
                    이름 변경 :{" "}
                </Text>
                <TextInput
                    style={{
                        fontSize: 15,
                        borderWidth: 1,
                        width: "75%",
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
                    onChangeText={(newName) => setName(newName)}
                    value={name}
                ></TextInput>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="swap-horizontal" size={30} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    width: 300,
                }}
            >
                <Text style={{ fontSize: 15, paddingRight: 10 }}>
                    이메일 변경 :{" "}
                </Text>
                <TextInput
                    style={{
                        fontSize: 15,
                        borderWidth: 1,
                        width: "75%",
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    value={email}
                    keyboardType="email-address"
                ></TextInput>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="swap-horizontal" size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        // alignItems: "center",
        // backgroundColor: "#DDDDDD",
        // padding: 10,
        // width: 300,
        // margin: 16,
    },
});

export default UpdateUserScreen;
