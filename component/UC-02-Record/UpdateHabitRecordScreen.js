// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";

const UpdateHabitRecordScreen = (props) => {
    const {
        item,
        id,
        updateScreen,
        setUpdateScreen,
        habitName,
        setHabitName,
        reduceUnit,
        setReduceUnit,
        reduceUnitList,
        checkPeriod,
        setCheckPeriod,
        checkPeriodList,
        updateItem,
        clearState,
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
                        습관 재설정
                    </Text>
                    <View style={{ flex: 3 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 25 }}>습관 이름</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(newName) =>
                                    setHabitName(newName)
                                }
                                value={habitName}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 25, paddingVertical: 5 }}>
                                습관 대분류 : {item["category"]}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 25 }}>정량 단위</Text>
                            <SelectList
                                boxStyles={styles.input}
                                setSelected={(newPeriod) =>
                                    setReduceUnit(newPeriod)
                                }
                                data={reduceUnitList}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 25 }}>확인 기간</Text>
                            <SelectList
                                boxStyles={styles.input}
                                setSelected={(newPeriod) =>
                                    setCheckPeriod(newPeriod)
                                }
                                data={checkPeriodList}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    updateItem(
                                        habitName,
                                        reduceUnit,
                                        checkPeriod
                                    );
                                    clearState();
                                    setUpdateScreen(!updateScreen);
                                }}
                            >
                                <Text>확인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    clearState();
                                    setUpdateScreen(!updateScreen);
                                }}
                            >
                                <Text>취소</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() =>
                            setUpdateScreenVisible(!updateScreenVisible)
                        }
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable> */}
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
export default UpdateHabitRecordScreen;
