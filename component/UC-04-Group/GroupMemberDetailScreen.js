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

const GroupMemberDetailScreen = (props) => {
    const { groupNowMember, setGroupNowMember, proceedTime } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 3, padding: 30 }}>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    유저 닉네임 : {groupNowMember.userName}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    습관 대분류 : {groupNowMember.categoryName}
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    정량 총량 : {groupNowMember.totalAmount}
                </Text>

                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    습관 진행 첫 시작 이후 시간
                </Text>
                <Text style={{ fontSize: 25, paddingBottom: 10 }}>
                    {proceedTime}
                </Text>
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
export default GroupMemberDetailScreen;
