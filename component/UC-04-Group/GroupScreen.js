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
import ChatScreen from "./ChatScreen";

const GroupScreen = (props) => {
    const {
        navigation,
        groupNow,
        setGroupNow,
        sendApplyGroupApi,
        groupNowMemberList,
        setGroupNowMemberList,
    } = props;
    const [chatModalVisible, setChatModalVisible] = useState(false);

    const applyAlert = (sendApplyGroupApi) => {
        Alert.alert("그룹 가입 신청", "그룹 가입을 신청합니다.", [
            {
                text: "예",
                onPress: () => {
                    sendApplyGroupApi();
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
                <Text style={{ flex: 1, fontSize: 20 }}>
                    {groupNow.groupName}
                </Text>
                <View style={{ flex: 2, alignItems: "center" }}>
                    {groupNow.isGroupAdmin ? (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("GroupSetting")}
                        >
                            <Text>소모임 관리</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("GroupSetting")}
                        >
                            <Text>소모임 가입 신청</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={{ flex: 0.5, fontSize: 15 }}>
                    인원수 : {groupNow.inwon} /{groupNow.chonginwon}
                </Text>
                <View style={{ flex: 3 }}>
                    <ScrollView horizontal={true}>
                        {groupNowMemberList
                            ? groupNowMemberList.map((groupMemberItem) => (
                                  <GroupMemberBox item={groupMemberItem} />
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
