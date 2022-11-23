import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import NavigationComponent from "./component/NavigationComponent";
import { RecoilRoot } from "recoil";
export default function App() {
    return (
        <RecoilRoot>
            <NavigationComponent />
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
