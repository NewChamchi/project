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

const CreateGroupScreen = (props) => {
    const {
        navigation,
        categoryNow,
        setNickName,
        nickName,
        groupName,
        setGroupName,
        sendCreateGroupApi,
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
                    {categoryNow ? categoryNow["name"] : false} 소모임
                </Text>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        marginVertical: 20,
                        padding: 10,
                        height: 60,
                    }}
                    onChangeText={setNickName}
                    value={nickName}
                    placeholder="닉네임"
                />
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        marginVertical: 20,
                        padding: 10,
                        height: 60,
                    }}
                    onChangeText={setGroupName}
                    value={groupName}
                    placeholder="방 제목"
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        sendCreateGroupApi();
                        navigation.navigate("GroupList");
                        navigation.navigate("Group");
                    }}
                >
                    <Text>그룹 생성</Text>
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
export default CreateGroupScreen;
