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
    Alert,
} from "react-native";
import GroupMemberBoxContainer from "../../container/UC-04-Group/GroupMemberBoxContainer";
import ChatScreen from "./ChatScreen";
import { faker } from "@faker-js/faker";

const GroupScreen = (props) => {
    const {
        navigation,
        groupNow,
        setGroupNow,
        sendApplyGroupApi,
        groupNowMemberList,
        setGroupNowMemberList,
        userInfo,
        userRole,
        setUserRole,
        sendWithdrawGroupApi,
    } = props;
    const [chatModalVisible, setChatModalVisible] = useState(false);

    const applyAlert = (sendApplyGroupApi) => {
        Alert.alert("그룹 가입 신청", "그룹 가입을 신청합니다.", [
            {
                text: "예",
                onPress: () => {
                    sendApplyGroupApi(faker.internet.userName());
                },
            },
            {
                text: "아니오",
                onPress: () => {},
                style: "cancel",
            },
        ]);
    };

    const withdrawAlert = (sendWithdrawGroupApi) => {
        Alert.alert("그룹 탈퇴", "그룹을 탈퇴하시겠습니까?", [
            {
                text: "예",
                onPress: () => {
                    sendWithdrawGroupApi();
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
            <ChatScreen
                chatModalVisible={chatModalVisible}
                setChatModalVisible={setChatModalVisible}
            />
            <View style={{ flex: 1, margin: 16 }}>
                <Text style={{ flex: 1, fontSize: 20 }}></Text>
                <View style={{ flex: 2, alignItems: "center" }}>
                    {userRole == "ROLE_GROUP_ADMIN" ? (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("GroupSetting")}
                        >
                            <Text>소모임 관리</Text>
                        </TouchableOpacity>
                    ) : userRole == "ROLE_GROUP_USER" ? (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => withdrawAlert(sendWithdrawGroupApi)}
                        >
                            <Text>소모임 탈퇴</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => applyAlert(sendApplyGroupApi)}
                        >
                            <Text>소모임 가입 신청</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {/* <Text style={{ flex: 0.5, fontSize: 15 }}>
                    인원수 : {groupNow.inwon} /{groupNow.chonginwon}
                </Text> */}
                <View style={{ flex: 3 }}>
                    <ScrollView horizontal={true}>
                        {Array.isArray(groupNowMemberList)
                            ? groupNowMemberList
                                  .filter(
                                      (groupMemberItem) =>
                                          groupMemberItem.role !=
                                          "ROLE_GROUP_PENDING"
                                  )
                                  .map((groupMemberItem) => (
                                      <GroupMemberBoxContainer
                                          item={groupMemberItem}
                                          navigation={navigation}
                                      />
                                  ))
                            : false}
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
