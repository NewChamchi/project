import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { verifyPicture } from "../api/record";
import { Dropdown } from "react-native-element-dropdown";
import { CommonStyle } from "../style/CommonStyle";
const LoginComponent = (props) => {
    const {
        navigation,
        email,
        setEmail,
        password,
        setPassword,
        sendLoginApi,
        sendTestApi,
    } = props;
    return (
        <View style={styles.screen}>
            <View style={{ flex: 1.5 }}></View>
            <View>
                {/* <Dropdown /> */}

                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    placeholder="이메일"
                    value={email}
                />

                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    placeholder="비밀번호"
                    value={password}
                    secureTextEntry={true}
                />

                <View style={styles.button}>
                    <Button title="test" onPress={sendTestApi} />
                </View>
            </View>
            <View
                style={{
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "flex-end",
                    marginTop: 100,
                }}
            >
                <TouchableOpacity
                    style={CommonStyle.button}
                    onPress={sendLoginApi}
                >
                    <Text style={{ fontSize: 20 }}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={CommonStyle.button}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={{ fontSize: 20 }}>회원 가입</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.5 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 5,
    },

    loginBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },

    input: {
        height: "100%",
        width: "70%",
        borderWidth: 1,
        padding: 10,
    },

    buttonBox: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-around",
    },

    button: {
        width: "30%",
    },
});

export default LoginComponent;
