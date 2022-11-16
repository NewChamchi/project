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

const PostScreen = (props) => {
    const { navigation, postNow, setPostNow } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, margin: 16 }}>
                <Text style={{ fontSize: 20, marginBottom: 16 }}>
                    제목 : {postNow.information.title}
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 16 }}>
                    닉네임 {postNow.information.nickname} | 조회수{" "}
                    {postNow.information.views} | 추천수{" "}
                    {postNow.information.recommended.length}
                </Text>
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        alignSelf: "center",
                        marginBottom: 16,
                    }}
                ></View>
                <Text>{postNow.contents}</Text>
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        alignSelf: "center",
                        marginVertical: 32,
                    }}
                ></View>
                <View style={{ paddingBottom: 32 }}>
                    <TouchableOpacity
                        style={{
                            height: 100,
                            width: 100,
                            backgroundColor: "#DFDFDF",
                            alignSelf: "center",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            borderRadius: 50,
                        }}
                        // onPress={}
                    >
                        <MaterialCommunityIcons name="thumb-up" size={25} />
                        <Text>{postNow.information.recommended.length}</Text>
                    </TouchableOpacity>
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
                    />
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: "20%",
                            backgroundColor: "#DFDFDF",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>제출</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default PostScreen;
