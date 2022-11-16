import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function LoginComponent() {
    return (
        <View style={styles.screen}>
            <View style={{ flex: 1.5 }}></View>
            <View style={styles.loginBox}>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>아이디 : </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>비밀번호 : </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.buttonBox}>
                        <View style={styles.button}>
                            <Button title="로그인" />
                        </View>
                        <View style={styles.button}>
                            <Button title="회원가입" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1.5 }}></View>
        </View>
    );
}

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
        height: "50%",
        width: "70%",
        borderWidth: 1,
        padding: 10,
    },

    buttonBox: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    button: {
        width: "30%",
    },
});
