// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Button,
} from "react-native";
import HabitRecordBoxContainer from "../../container/UC-02-Record/HabitRecordBoxContainer";

const HabitRecordScreen = (props) => {
    const { navigation, habitRecordList, setHabitRecordList, sendTestApi } =
        props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 6, padding: 16 }}>
                <ScrollView>
                    {habitRecordList
                        ? habitRecordList.map((habitRecordItem) => (
                              <HabitRecordBoxContainer
                                  key={habitRecordItem.id}
                                  id={habitRecordItem.id}
                                  item={habitRecordItem}
                                  navigation={navigation}
                              />
                          ))
                        : false}
                </ScrollView>
                {/* <View style={styles.button}>
                    <Button title="test" onPress={sendTestApi} />
                </View> */}
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
                        navigation.navigate("CreateHabitRecord");
                    }}
                >
                    <Text>습관 생성</Text>
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

export default HabitRecordScreen;
