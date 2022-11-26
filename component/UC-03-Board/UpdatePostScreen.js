// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from "react-native";

const UpdatePostScreen = (props) => {
    const {
        item,
        updateScreen,
        setUpdateScreen,
        groupName,
        setGroupName,
        sendUpdateGroupApi,
    } = props;
    return (
        <Modal
            animationType="silde"
            transparent={true}
            visible={updateScreen}
            onRequestClose={() => {
                setUpdateScreen(!updateScreen);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 25, marginBottom: 25 }}>
                        그룹 이름 재설정
                    </Text>
                    <View style={{ flex: 3 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 25 }}>그룹 이름</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(newGroupName) =>
                                    setGroupName(newGroupName)
                                }
                                value={groupName}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                sendUpdateGroupApi(groupName);
                                setGroupName("");
                                setUpdateScreen(!updateScreen);
                            }}
                        >
                            <Text>확인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setGroupName("");
                                setUpdateScreen(!updateScreen);
                            }}
                        >
                            <Text>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({});
export default UpdatePostScreen;
