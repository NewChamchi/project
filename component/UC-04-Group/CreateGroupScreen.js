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

const CreateGroupScreen = ({ navigation }) => {
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
                    게임 소모임
                </Text>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        marginVertical: 20,
                        padding: 10,
                        height: 60,
                    }}
                    placeholder="제목"
                />
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1,
                        padding: 10,
                        height: 400,
                    }}
                    placeholder="내용"
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
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
