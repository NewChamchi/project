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
import GroupUpdateContainer from "../../container/UC-04-Group/GroupUpdateContainer";

const GroupSettingScreen = (props) => {
    const {
        navigation,
        groupNow,
        setGroupNow,
        groupNowMemberList,
        setGroupNowMemberList,
        sendPermissonApplyGroupApi,
        sendWarnGroupMemberApi,
        sendWithdrawGroupApi,
    } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <GroupUpdateContainer />
            <View style={{ flex: 1, margin: 16 }}>
                <Text style={{ flex: 1, fontSize: 20 }}>
                    {groupNow.groupName}
                </Text>
                <View style={{ flex: 4, marginBottom: 15 }}>
                    <Text style={{ fontSize: 15, marginBottom: 5 }}>
                        가입 신청 관리
                    </Text>
                    <ScrollView horizontal={true} style={{}}>
                        {groupNowMemberList
                            ? groupNowMemberList
                                  .filter(
                                      (item) =>
                                          item.role == "ROLE_GROUP_PENDING"
                                  )
                                  .map((item) => {
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
                                              <TouchableOpacity
                                                  onPress={() =>
                                                      sendPermissonApplyGroupApi(
                                                          "CONSET",
                                                          item.nickName
                                                      )
                                                  }
                                              >
                                                  <Text>가입 승인</Text>
                                              </TouchableOpacity>
                                              <Text></Text>
                                              <TouchableOpacity
                                                  onPress={() =>
                                                      sendPermissonApplyGroupApi(
                                                          "DENIED",
                                                          item.nickName
                                                      )
                                                  }
                                              >
                                                  <Text>가입 거절</Text>
                                              </TouchableOpacity>
                                          </View>
                                      </View>;
                                  })
                            : false}
                    </ScrollView>
                </View>
                <View style={{ flex: 4, marginBottom: 15 }}>
                    <Text style={{ fontSize: 15, marginBottom: 5 }}>
                        그룹 멤버 관리
                    </Text>
                    <ScrollView horizontal={true} style={{}}>
                        {groupNowMemberList
                            ? groupNowMemberList
                                  .filter(
                                      (item) => item.role == "ROLE_GROUP_USER"
                                  )
                                  .map((item) => {
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
                                          <TouchableOpacity
                                              onPress={() =>
                                                  sendWarnGroupMemberApi(
                                                      item.nickName
                                                  )
                                              }
                                          >
                                              <Text>멤버 경고</Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity
                                              onPress={() =>
                                                  sendWithdrawGroupApi(
                                                      item.nickName
                                                  )
                                              }
                                          >
                                              <Text>멤버 탈퇴</Text>
                                          </TouchableOpacity>
                                      </View>;
                                  })
                            : false}
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
