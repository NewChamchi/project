// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UpdateHabitRecordContianer from "../../container/UC-02-Record/UpdateHabitRecordContainer";
import {
    habitRecordListState,
    updateScreenState,
} from "../../recoil/UC-02-Record";

const HabitRecordBox = (props) => {
    const {
        navigation,
        id,
        item,
        updateScreen,
        setUpdateScreen,
        setHabitRecordList,
        habitCheckBox,
        setHabitCheckBox,
        setDetailScreen,
        setPictureScreen,
    } = props;
    return (
        <View style={styles.box}>
            <UpdateHabitRecordContianer item={item} />
            <View
                style={{
                    flex: 2,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                }}
            >
                <Text style={{ fontSize: 20, margin: 10 }}>
                    {item["category"]}
                </Text>
                <Text style={{ fontSize: 20, margin: 10 }}>{item["name"]}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={() => setHabitCheckBox(!habitCheckBox)}
                >
                    {habitCheckBox ? (
                        <MaterialCommunityIcons
                            name="checkbox-marked"
                            size={25}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="checkbox-blank-outline"
                            size={25}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={setPictureScreen}
                >
                    <MaterialCommunityIcons name="camera" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={() => setUpdateScreen(!updateScreen)}
                >
                    <MaterialCommunityIcons name="pencil-box" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={setDetailScreen}
                >
                    <MaterialCommunityIcons name="content-paste" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: 80,
        backgroundColor: "#DDDDDD",
        margin: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
});
export default HabitRecordBox;
