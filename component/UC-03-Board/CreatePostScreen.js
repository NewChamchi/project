// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
} from "react-native";

import SelectList from "react-native-dropdown-select-list";

const CreatePostScreen = (props) => {
    const {
        navigation,
        postList,
        setPostList,
        categoryNow,
        postTitle,
        setPostTitle,
        postContents,
        setPostContents,
        habitRecordList,
        habitName,
        setHabitName,
        sendCreatePostApi,
    } = props;
    return (
        <SafeAreaView>
            <View
                style={{
                    margin: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 25 }}>습관 선택</Text>
                    <SelectList
                        boxStyles={styles.input}
                        setSelected={(newName) => setHabitName(newName)}
                        data={habitRecordList.map((item) => item.name)}
                    />
                </View>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        marginVertical: 20,
                        padding: 10,
                        height: 60,
                    }}
                    onChangeText={(newTitle) => setPostTitle(newTitle)}
                    value={postTitle}
                    placeholder="제목"
                />
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        padding: 10,
                        height: 400,
                        textAlignVertical: "top",
                    }}
                    onChangeText={(newContents) => setPostContents(newContents)}
                    value={postContents}
                    placeholder="내용"
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        sendCreatePostApi();
                        navigation.navigate("Board");
                    }}
                >
                    <Text>게시글 생성</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 3,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 300,
        margin: 16,
    },
});
export default CreatePostScreen;
