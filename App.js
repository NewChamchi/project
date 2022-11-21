import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginComponent from "./component/LoginComponent";
import NavigationComponent from "./component/NavigationComponent";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";
import { userNowState } from "./recoil/CommonRecoil";

export default function App() {
    return (
        <RecoilRoot>
            <NavigationComponent />
            {/* 이메일이 나중에는 토큰으로 대체되어야함 */}
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
