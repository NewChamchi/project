// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteHabit } from "../../api/record";
import HabitRecordBox from "../../component/UC-02-Record/HabitRecordBox";
import { categoryListState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    boxIndexState,
    habitRecordItemState,
    habitRecordListState,
    updateScreenState,
} from "../../recoil/UC-02-Record";

const HabitRecordBoxContainer = (props) => {
    const { navigation, id, item } = props;
    const updateScreen = useRecoilValue(updateScreenState);
    const setUpdateScreen = useSetRecoilState(updateScreenState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const setHabitRecordItem = useSetRecoilState(habitRecordItemState);
    const userInfo = useRecoilValue(userInfoState);
    const categoryList = useRecoilValue(categoryListState);
    const [habitCheckBox, setHabitCheckBox] = useState(false);

    const setDetailScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitDetail");
    };

    const setPictureScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitPicture");
    };

    const deleteAlert = () =>
        Alert.alert("습관 삭제", "정말 삭제하시겠습니까?", [
            {
                text: "네",
                onPress: async () => {
                    try {
                        const body = {
                            email: userInfo.email,
                            habitId: id,
                        };
                        const { data } = await deleteHabit(body);
                        setHabitRecordList(data.contents);
                        console.log("삭제 성공");
                    } catch (e) {
                        console.log("삭제 실패");
                    }
                },
            },
            {
                text: "아니오",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
        ]);

    const propDatas = {
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
        categoryList,
        deleteAlert,
    };
    return <HabitRecordBox {...propDatas} />;
};

export default HabitRecordBoxContainer;
