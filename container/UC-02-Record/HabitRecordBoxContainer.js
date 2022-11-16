// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import HabitRecordBox from "../../component/UC-02-Record/HabitRecordBox";
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
    const [habitCheckBox, setHabitCheckBox] = useState(false);
    const setDetailScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitDetail");
    };

    const setPictureScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitPicture");
    };
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
    };
    return <HabitRecordBox {...propDatas} />;
};

export default HabitRecordBoxContainer;
