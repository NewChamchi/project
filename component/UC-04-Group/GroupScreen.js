// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from "react-native";
import ChatScreen from "./ChatScreen";

const GroupScreen = ({ navigation }) => {
    const [chatModalVisible, setChatModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatScreen
                chatModalVisible={chatModalVisible}
                setChatModalVisible={setChatModalVisible}
            />
            <View style={{ flex: 1, margin: 16 }}>
                <Text style={{ flex: 1, fontSize: 20 }}>
                    롤 끊을 사람 모집!
                </Text>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("GroupSetting")}
                    >
                        <Text>소모임 가입 신청 / 소모임 관리</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ flex: 0.5, fontSize: 15 }}>
                    인원수 : 150 / 200
                </Text>
                <View style={{ flex: 3 }}>
                    <ScrollView horizontal={true}>
                        <View
                            style={{
                                width: 100,
                                backgroundColor: "#DFDFDF",
                                marginHorizontal: 5,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account-circle"
                                size={40}
                            />
                            <View>
                                <Text>습관 정보</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: 100,
                                backgroundColor: "#DFDFDF",
                                marginHorizontal: 5,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account-circle"
                                size={40}
                            />
                            <View>
                                <Text>습관 정보</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: 100,
                                backgroundColor: "#DFDFDF",
                                marginHorizontal: 5,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account-circle"
                                size={40}
                            />
                            <View>
                                <Text>습관 정보</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: 100,
                                backgroundColor: "#DFDFDF",
                                marginHorizontal: 5,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account-circle"
                                size={40}
                            />
                            <View>
                                <Text>습관 정보</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 3,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setChatModalVisible(!chatModalVisible)}
                    >
                        <Text>채팅창 열기</Text>
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
export default GroupScreen;
