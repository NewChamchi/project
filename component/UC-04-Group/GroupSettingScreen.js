// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from "react-native";

const GroupSettingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 16 }}>
                <Text style={{ flex: 1, fontSize: 20 }}>
                    롤 끊을 사람 모집!
                </Text>
                <View style={{ flex: 4, marginBottom: 15 }}>
                    <Text style={{ fontSize: 15, marginBottom: 5 }}>
                        가입 신청 관리
                    </Text>
                    <ScrollView horizontal={true} style={{}}>
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
                                <Text>가입 승인</Text>
                                <Text></Text>
                                <Text>가입 거부</Text>
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
                                <Text>가입 승인</Text>
                                <Text></Text>
                                <Text>가입 거부</Text>
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
                                <Text>가입 승인</Text>
                                <Text></Text>
                                <Text>가입 거부</Text>
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
                                <Text>가입 승인</Text>
                                <Text></Text>
                                <Text>가입 거부</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 4, marginBottom: 15 }}>
                    <Text style={{ fontSize: 15, marginBottom: 5 }}>
                        사용자 경고
                    </Text>
                    <ScrollView horizontal={true} style={{}}>
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
                            <Text>사용자 경고</Text>
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
                            <Text>사용자 경고</Text>
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
                            <Text>사용자 경고</Text>
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
                            <Text>사용자 경고</Text>
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "30%",
                            height: 30,
                            backgroundColor: "#DFDFDF",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "30%",
                            height: 30,
                            backgroundColor: "#DFDFDF",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>삭제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default GroupSettingScreen;
