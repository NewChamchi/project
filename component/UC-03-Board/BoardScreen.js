// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import PostBoxContainer from "../../container/UC-03-Board/PostBoxContainer";
import PostBox from "./PostBox";

const BoardScreen = (props) => {
    const {
        navigation,
        categoryList,
        categoryNow,
        setCategoryNow,
        postList,
        setPostList,
        page,
        setPage,
    } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 11 }}>
                <ScrollView>
                    {postList.content
                        ? postList.content.map((item, index) => (
                              <PostBoxContainer
                                  navigation={navigation}
                                  item={item}
                                  id={item.id}
                              />
                          ))
                        : false}
                    <View
                        style={{ flexDirection: "row", alignItems: center }}
                    ></View>
                </ScrollView>
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
                {postList.pageNo != 0 ? (
                    <TouchableOpacity onPress={() => setPage(page - 1)}>
                        <Text>
                            <MaterialCommunityIcons
                                name={"chevron-left"}
                                size={25}
                            />
                        </Text>
                    </TouchableOpacity>
                ) : (
                    false
                )}
                <Text>{postList.pageNo + 1}</Text>
                {!postList.last ? (
                    <TouchableOpacity onPress={() => setPage(page + 1)}>
                        <Text>
                            <MaterialCommunityIcons
                                name={"chevron-right"}
                                size={25}
                            />
                        </Text>
                    </TouchableOpacity>
                ) : (
                    false
                )}
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("CreatePost")}
                >
                    <Text>게시글 생성</Text>
                </TouchableOpacity>
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
export default BoardScreen;
