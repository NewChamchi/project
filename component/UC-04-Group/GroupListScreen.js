// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";
import SearchBar from "react-native-dynamic-search-bar";
import GroupBox from "./GroupBox";

const GroupListScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 3 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlignVertical: "center",
                            paddingHorizontal: 10,
                            backgroundColor: "#DFDFDF",
                        }}
                    >
                        대분류 선택 :
                    </Text>
                    <ScrollView
                        horizontal={true}
                        style={{
                            flex: 1,
                            backgroundColor: "#DFDFDF",
                        }}
                    >
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                게임
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                담배
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                술
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                운동
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                책
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 20, paddingHorizontal: 15 }}
                            >
                                기타
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: "row",
                        marginHorizontal: 20,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <SearchBar style={{ height: 40, width: "70%" }} />
                    <SelectList
                        boxStyles={{
                            height: 40,
                            width: 80,
                            backgroundColor: "#FFFFFF",
                        }}
                    />
                </View>
                <View style={{ flex: 11 }}>
                    <ScrollView>
                        <GroupBox navigation={navigation} />
                        <GroupBox navigation={navigation} />
                        <GroupBox navigation={navigation} />
                        <GroupBox navigation={navigation} />
                        <GroupBox navigation={navigation} />
                        <GroupBox navigation={navigation} />
                    </ScrollView>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("CreateGroup")}
                    >
                        <Text>소모임 생성</Text>
                    </TouchableOpacity>
                </View>
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
export default GroupListScreen;
