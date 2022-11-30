import * as React from "react";
import { useState, useEffect } from "react";
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { habitRecordListState } from "../../recoil/UC-02-Record";
import { Dropdown } from "react-native-element-dropdown";
const CreateHabitRecordScreen = (props) => {
    const {
        navigation,
        habitRecordList,
        setHabitRecordList,
        habitName,
        setHabitName,
        habitCategory,
        setHabitCategory,
        habitCategoryList,
        addItem,
        amount,
        setAmount,
        amountList,
        period,
        setPeriod,
        periodList,
    } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 3, padding: 30 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 25 }}>습관 이름</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(newName) => setHabitName(newName)}
                        value={habitName}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 25 }}>습관 대분류</Text>
                    <SelectList
                        boxStyles={styles.input}
                        setSelected={(newCategory) =>
                            setHabitCategory(newCategory)
                        }
                        data={habitCategoryList}
                    />
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
                        setSelected={(newAmount) => setAmount(newAmount)}
                        data={amountList}
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
                        setSelected={(newPeriod) => setPeriod(newPeriod)}
                        data={periodList}
                    />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addItem();
                        navigation.navigate("HabitRecord");
                    }}
                >
                    <Text>습관 생성</Text>
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
    dropdown: {
        margin: 16,
        height: 50,
        width: 200,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default CreateHabitRecordScreen;
