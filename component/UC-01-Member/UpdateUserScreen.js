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
    const { navigation } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    width: 300,
                }}
            >
                <Text style={{ fontSize: 20, paddingRight: 10 }}>
                    이메일 :{" "}
                </Text>
                <TextInput
                    style={{
                        fontSize: 10,
                        borderWidth: 1,
                        width: 250,
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
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
