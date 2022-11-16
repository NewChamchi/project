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
        sendItem,
    } = props;
    return (
        <SafeAreaView>
            <View
                style={{
                    margin: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                    }}
                >
                    {categoryNow.name} 게시판
                </Text>
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
                        sendItem(postList);
                        navigation.navigate("Board");
                        navigation.navigate("Post");
                    }}
                >
                    <Text>게시글 생성</Text>
                </TouchableOpacity>
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
export default CreatePostScreen;
