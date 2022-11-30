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
import { useSetRecoilState } from "recoil";
import { categoryNameToIcon } from "../../container/CommonContainer";
import { groupNowState } from "../../recoil/UC-04-Group";

const GroupBox = (props) => {
    const setGroupNow = useSetRecoilState(groupNowState);
    const { navigation, item, id, groupNow } = props;
    return (
        <TouchableOpacity
            onPress={() => {
                console.log(item);
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
                    <Text style={{ fontSize: 20, margin: 10 }}>
                        {categoryNameToIcon(item.GroupType)}
                    </Text>
                    <Text style={{ fontSize: 20, margin: 10 }}>
                        {item.groupName}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 15, margin: 10 }}>
                        {item.adminNickName}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});
export default GroupBox;
