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
        reduceUnit,
        reduceUnitList,
        checkPeriod,
        checkPeriodList,
        setReduceUnit,
        setCheckPeriod,
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
                    <Text style={{ fontSize: 25 }}>단축 단위</Text>
                    <SelectList
                        boxStyles={styles.input}
                        setSelected={(newPeriod) => setReduceUnit(newPeriod)}
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
                        setSelected={(newPeriod) => setCheckPeriod(newPeriod)}
                        data={checkPeriodList}
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
});

export default CreateHabitRecordScreen;
