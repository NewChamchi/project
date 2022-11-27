// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Alert,
} from "react-native";

const HabitRecordDetailScreen = (props) => {
    const {
        navigation,
        habitRecordList,
        setHabitRecordList,
        habitRecordItem,
        setHabitRecordItem,
        proceedTime,
        updateTime,
        judgeCheck,
        getHabitList,
    } = props;
    const createTwoButtonAlert = () =>
        Alert.alert(
            "진행 시간 초기화",
            "정말 진행 시간을 초기화하시겠습니까?",
            [
                {
                    text: "예",
                    onPress: () => {
                        judgeCheck(habitRecordItem.id)
                            .then((response) => {
                                console.log("시간 체크");
                                getHabitList();
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        console.log("Ok Pressed");
                    },
                },
                {
                    text: "아니오",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
            ]
        );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 3, padding: 30 }}>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    습관 이름 : {habitRecordItem["name"]}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    습관 대분류 : {habitRecordItem["categoryName"]}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    정량 단위 : {habitRecordItem["amount"]}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    확인 기간 : {habitRecordItem["period"] / (24 * 3600 * 1000)}
                    일
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    성공 수 : {habitRecordItem["count"]}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    습관 진행 첫 시작 이후 시간
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    {proceedTime}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    {/* 습관 진행 시간 : {habitRecordItem["startTime"].toString()} */}
                </Text>
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
                    onPress={createTwoButtonAlert}
                >
                    <Text>진행 시간 초기화</Text>
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
export default HabitRecordDetailScreen;
