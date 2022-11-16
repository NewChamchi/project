// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WhiteBalance } from "expo-camera";
import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Modal,
    ScrollView,
    TextInput,
} from "react-native";

const ChatScreen = (props) => {
    const { chatModalVisible, setChatModalVisible } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={chatModalVisible}
            onRequestClose={() => {
                setChatModalVisible(!chatModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                setChatModalVisible(!chatModalVisible)
                            }
                        >
                            <Text>채팅창 닫기</Text>
                        </TouchableOpacity>
                        <ScrollView
                            style={{
                                width: 350,
                                borderWidth: 1,
                                borderColor: "#DFDFDF",
                                marginBottom: 20,
                                padding: 20,
                            }}
                        >
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    backgroundColor: "#DFDFDF",
                                    textAlign: "right",
                                    textAlignVertical: "center",
                                    paddingRight: 10,
                                    alignSelf: "flex-end",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                            <Text
                                style={{
                                    width: 200,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: "#DFDFDF",
                                    textAlign: "left",
                                    textAlignVertical: "center",
                                    paddingLeft: 10,
                                    alignSelf: "flex-start",
                                    marginBottom: 20,
                                }}
                            >
                                ㅎㅇㅎㅇ
                            </Text>
                        </ScrollView>
                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: "75%",
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
                                <Text style={{ fontSize: 16 }}>전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        flex: 1,
        width: 400,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
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
export default ChatScreen;
