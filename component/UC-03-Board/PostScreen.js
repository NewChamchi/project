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
    TextInput,
} from "react-native";
import UpdatePostContainer from "../../container/UC-03-Board/UpdatePostContainer";

const PostScreen = (props) => {
    const {
        navigation,
        postNow,
        setPostNow,
        sendDeletePostByIdApi,
        sendCreateCommentApi,
        comment,
        setComment,
        deleteAlert,
        updateScreen,
        setUpdateScreen,
        userInfo,
    } = props;
    const createdTimeMaker = (createdTime) => {
        return new Date(createdTime);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, margin: 16 }}>
                <UpdatePostContainer
                    updateScreen={updateScreen}
                    setUpdateScreen={setUpdateScreen}
                />
                <Text style={{ fontSize: 20, marginBottom: 16 }}>
                    제목 : {postNow.title}
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 15, marginBottom: 16 }}>
                        닉네임 {postNow.userName} | 조회수 {postNow.view} |{" "}
                        {createdTimeMaker(postNow.createdTime).getHours()}:
                        {createdTimeMaker(postNow.createdTime).getMinutes()}
                    </Text>
                    <TouchableOpacity>
                        <Text>사용자 경고</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        alignSelf: "center",
                        marginBottom: 16,
                    }}
                ></View>
                <Text>{postNow.content}</Text>
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        alignSelf: "center",
                        marginVertical: 32,
                    }}
                ></View>
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
                        onPress={() => {
                            setUpdateScreen(!updateScreen);
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
                        onPress={() => {
                            deleteAlert();
                        }}
                    >
                        <Text>삭제</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        alignSelf: "center",
                        marginVertical: 32,
                    }}
                ></View>
                <Text
                    style={{
                        fontSize: 24,
                        marginBottom: 24,
                    }}
                >
                    댓글
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons name="account-circle" size={40} />
                    <TextInput
                        style={{
                            height: 40,
                            width: "60%",
                            borderWidth: 1,
                            marginHorizontal: "5%",
                            paddingHorizontal: 10,
                        }}
                        onChangeText={(newComment) => setComment(newComment)}
                        value={comment}
                    />
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: "20%",
                            backgroundColor: "#DFDFDF",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => {
                            sendCreateCommentApi();
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>제출</Text>
                    </TouchableOpacity>
                </View>
                {postNow
                    ? postNow["comments"].map((item) => (
                          <View
                              style={{
                                  height: 100,
                                  width: "90%",
                                  margin: 10,
                                  backgroundColor: "#DFDFDF",
                                  alignItems: "center",
                                  justifyContent: "center",
                              }}
                          >
                              <Text>
                                  이름 : {item.name} | 생성시각 :{" "}
                                  {createdTimeMaker(
                                      item.createdTime
                                  ).getHours()}
                                  :
                                  {createdTimeMaker(
                                      item.createdTime
                                  ).getMinutes()}
                              </Text>
                              <Text>댓글 내용 : {item.body}</Text>

                              <View style={{ flexDirection: "row" }}>
                                  <TouchableOpacity>
                                      <Text>수정</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                      <Text>삭제</Text>
                                  </TouchableOpacity>
                              </View>
                          </View>
                      ))
                    : false}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default PostScreen;
