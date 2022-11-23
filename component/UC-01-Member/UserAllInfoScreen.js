import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Alert,
    ScrollView,
} from "react-native";
import UserInfoBoxContainer from "../../container/UC-01-Member/UserInfoBoxContainer";

const UserAllInfoScreen = (props) => {
    const { navigation, userInfoList, setUserInfoList } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {userInfoList.map((userInfoItem, index) => (
                    <UserInfoBoxContainer
                        key={index}
                        item={userInfoItem}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default UserAllInfoScreen;
