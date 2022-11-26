import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Alert,
} from "react-native";

const UserMainScreen = (props) => {
    const {
        navigation,
        sendLogoutApi,
        sendWithdrawApi,
        name,
        email,
        userInfo,
        setUserInfo,
    } = props;
    const LogoutAlert = (sendLogoutApi) => {
        Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
            {
                text: "예",
                onPress: () => {
                    sendLogoutApi();
                },
            },
            {
                text: "아니오",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };

    const WithdrawAlert = (sendWithdrawApi) => {
        Alert.alert("회원탈퇴", "정말 회원 탈퇴 하시겠습니까?", [
            {
                text: "예",
                onPress: () => {
                    sendWithdrawApi();
                },
            },
            {
                text: "아니오",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 3,
                    padding: 10,
                    margin: 16,
                }}
            >
                <Text
                    style={{
                        padding: 10,
                        width: 300,
                        margin: 16,
                        fontSize: 25,
                    }}
                >
                    이름 : {userInfo ? userInfo.name : false}
                </Text>
                <Text
                    style={{
                        padding: 10,
                        width: 300,
                        margin: 16,
                        fontSize: 25,
                    }}
                >
                    이메일 : {userInfo ? userInfo.email : false}
                </Text>
            </View>
            <View style={{ flex: 4, justifyContent: "flex-start" }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("UpdateUser")}
                    >
                        <Text>나의 정보 수정</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => LogoutAlert(sendLogoutApi)}
                    >
                        <Text>로그아웃</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => WithdrawAlert(sendWithdrawApi)}
                    >
                        <Text>회원 탈퇴</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("UserAllInfo")}
                    >
                        <Text>모든 유저 정보</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 300,
        margin: 16,
    },
});

export default UserMainScreen;
