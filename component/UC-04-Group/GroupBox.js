// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from "react-native";

const GroupBox = (props) => {
    const { item, id, groupNow, setGroupNow } = props;
    return (
        <TouchableOpacity
            onPress={() => {
                setGroupNow(item);
                navigation.navigate("Group");
            }}
        >
            <View
                style={{
                    height: 100,
                    flex: 1,
                    backgroundColor: "#DDDDDD",
                    margin: 16,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    justifyContent: "space-around",
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 20, margin: 10 }}>🎮</Text>
                    <Text style={{ fontSize: 20, margin: 10 }}>
                        {item.name}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 15, margin: 10 }}>
                        {/* {방장 이름 들어가야함} */}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});
export default GroupBox;
