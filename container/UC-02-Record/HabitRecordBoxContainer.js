// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import {
    checkHabit,
    deleteHabit,
    judgeCheck,
    memberHabitInquiry,
} from "../../api/record";
import HabitRecordBox from "../../component/UC-02-Record/HabitRecordBox";
import { categoryListState, loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    boxIndexState,
    habitRecordItemState,
    habitRecordListState,
    updateScreenState,
} from "../../recoil/UC-02-Record";
import { nowDate } from "../CommonContainer";

const HabitRecordBoxContainer = (props) => {
    const { navigation, id, item } = props;
    const updateScreen = useRecoilValue(updateScreenState);
    const setUpdateScreen = useSetRecoilState(updateScreenState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const setHabitRecordItem = useSetRecoilState(habitRecordItemState);
    const userInfo = useRecoilValue(userInfoState);
    const categoryList = useRecoilValue(categoryListState);
    const [habitCheckBox, setHabitCheckBox] = useState(item.check);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    // test
    // const [habitCheckBox, setHabitCheckBox] = useState(false);

    const setDetailScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitDetail");
    };

    const setPictureScreen = () => {
        setHabitRecordItem(item);
        navigation.navigate("HabitPicture");
    };
    const getHabitList = () => {
        console.log("됨1");
        memberHabitInquiry(userInfo.memberId)
            .then((response) => {
                console.log(response["data"]);

                setHabitRecordList(response["data"]);
            })
            .catch((error) => {
                console.log("됨3");
                console.log(error);
            });
    };
    const sendCheckHabitApi = () => {
        setLoading((prev) => !prev);

        checkHabit(id)
            .then((response) => getHabitList())
            .catch((error) => {
                console.log(error.response);
            });
        setLoading((prev) => !prev);
    };

    const deleteAlert = () =>
        Alert.alert("습관 삭제", "정말 삭제하시겠습니까?", [
            {
                text: "네",
                onPress: () => {
                    deleteHabit(item.id)
                        .then((response) => getHabitList())
                        .catch((error) => console.log(error));
                },
            },
            {
                text: "아니오",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
        ]);
    // useEffect(() => {
    //     const verifyAmountCheck = setInterval(() => {
    //         const startTime = Date.parse(item.date);
    //         const tmpTime = nowDate() - startTime;
    //         // console.log(tmpTime);
    //         if (tmpTime >= item.period * (item.count + 1)) {
    //             judgeCheck(item.id)
    //                 .then((response) => {
    //                     console.log("시간 체크");
    //                     getHabitList();
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });
    //         }
    //     }, 1000);
    //     return () => clearInterval(verifyAmountCheck);
    // });
    const propDatas = {
        navigation,
        id,
        item,
        updateScreen,
        setUpdateScreen,
        setHabitRecordList,
        habitCheckBox,
        setHabitRecordItem,
        setHabitCheckBox,
        setDetailScreen,
        setPictureScreen,
        categoryList,
        deleteAlert,
        sendCheckHabitApi,
    };
    return <HabitRecordBox {...propDatas} />;
};

export default HabitRecordBoxContainer;
