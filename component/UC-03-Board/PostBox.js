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

const PostBox = (props) => {
    const { navigation, item, id, postNow, setPostNow } = props;
    return (
        <TouchableOpacity
            onPress={() => {
                setPostNow(item);
                navigation.navigate("Post");
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
                        {item.title}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 15, margin: 10 }}>
                        닉네임 {item.userName} | 조회수 {item.view} | 생성일자{" "}
                        {Date(item.createdTime).toLocaleString("ko-KR", {
                            timeZone: "UTC",
                        })}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});
export default PostBox;
