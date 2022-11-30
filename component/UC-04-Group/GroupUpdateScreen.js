import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const GroupUpdateScreen = (props) => {
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
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
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
        width: 100,
        margin: 16,
    },
});

export default GroupUpdateScreen;
