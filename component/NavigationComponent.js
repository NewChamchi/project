// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import "react-native-gesture-handler";

import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatContainer from "../container/UC-04-Group/ChatContainer";
import CreateGroupContainer from "../container/UC-04-Group/CreateGroupContainer";
import GroupContainer from "../container/UC-04-Group/GroupContainer";
import GroupSettingContainer from "../container/UC-04-Group/GroupSettingContainer";

import GroupListContainer from "../container/UC-04-Group/GroupListContainer";
import HabitStatisticsScreen from "./UC-02-Record/HabitStatisticsScreen";
import CreateHabitRecordContainer from "../container/UC-02-Record/CreateHabitRecordContainer";
import HabitRecordContainer from "../container/UC-02-Record/HabitRecordContainer";
import HabitRecordDetailContainer from "../container/UC-02-Record/HabitRecordDetailContainer";
import BoardContainer from "../container/UC-03-Board/BoardContainer";
import CreatePostContainer from "../container/UC-03-Board/CreatePostContainer";
import PostContainer from "../container/UC-03-Board/PostContainer";
import HabitPictureContainer from "../container/UC-02-Record/HabitPictureContainer";
import UserMainContainer from "../container/UC-01-Member/UserMainContainer";
import UpdateUserContainer from "../container/UC-01-Member/UpdateUserContainer";
import UserAllInfoContainer from "../container/UC-01-Member/UserAllInfoContainer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import LoginContainer from "../container/LoginContainer";
import SignUpContainer from "../container/SignUpContainer";
import HabitPictureSampleContainer from "../container/UC-02-Record/HabitPictureSampleContainer";
import { userInfoState } from "../recoil/UC-01-Member";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { loadingState } from "../recoil/CommonRecoil";
import GroupMemberDetailContainer from "../container/UC-04-Group/GroupMemberDetailContainer";
import HabitStatisticsContainer from "../container/UC-02-Record/HabitStatisticsContainer";
import CategoryEditContainer from "../container/CategoryEditContainer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RecordStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HabitRecord"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="HabitRecord"
                component={HabitRecordContainer}
                options={{ title: "?????? ??????" }}
            />
            <Stack.Screen
                name="HabitDetail"
                component={HabitRecordDetailContainer}
                options={{ title: "?????? ??????" }}
            />
            <Stack.Screen
                name="CreateHabitRecord"
                component={CreateHabitRecordContainer}
                options={{ title: "?????? ??????" }}
            />
            <Stack.Screen
                name="HabitPicture"
                component={HabitPictureContainer}
                options={{ title: "?????? ?????? ??????" }}
            />
            <Stack.Screen
                name="HabitPictureSample"
                component={HabitPictureSampleContainer}
                options={{ title: "?????? ?????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const StatisticStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HabitStatistics"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="HabitStatistics"
                component={HabitStatisticsContainer}
                options={{ title: "?????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const CategoryEditStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="CategoryEdit"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="CategoryEdit"
                component={CategoryEditContainer}
                options={{ title: "???????????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const BoardStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Board"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="Board"
                component={BoardContainer}
                options={{ title: "?????????" }}
            />
            <Stack.Screen
                name="CreatePost"
                component={CreatePostContainer}
                options={{ title: "????????? ??????" }}
            />
            <Stack.Screen
                name="Post"
                component={PostContainer}
                options={{ title: "?????????" }}
            />
        </Stack.Navigator>
    );
};

const GroupStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="GroupList"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="GroupList"
                component={GroupListContainer}
                options={{ title: "????????? ??????" }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatContainer}
                options={{ title: "????????? ??????" }}
            />
            <Stack.Screen
                name="CreateGroup"
                component={CreateGroupContainer}
                options={{ title: "????????? ??????" }}
            />
            <Stack.Screen
                name="Group"
                component={GroupContainer}
                options={{ title: "?????????" }}
            />
            <Stack.Screen
                name="GroupSetting"
                component={GroupSettingContainer}
                options={{ title: "????????? ??????" }}
            />
            <Stack.Screen
                name="GroupMemberDetail"
                component={GroupMemberDetailContainer}
                options={{ title: "?????? ?????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const MemberStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="UserMain"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="UserMain"
                component={UserMainContainer}
                options={{ title: "?????? ??????" }}
            />
            <Stack.Screen
                name="UpdateUser"
                component={UpdateUserContainer}
                options={{ title: "?????? ?????? ??????" }}
            />
            <Stack.Screen
                name="UserAllInfo"
                component={UserAllInfoContainer}
                options={{ title: "?????? ?????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const LoginStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginContainer}
                options={{ title: "?????????" }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpContainer}
                options={{ title: "?????? ??????" }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    const userInfo = useRecoilValue(userInfoState);
    const loading = useRecoilValue(loadingState);

    return userInfo.role ? (
        <NavigationContainer>
            <Spinner visible={loading} />
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarStyle: [
                        {
                            display: "flex",
                        },
                        null,
                    ],
                }}
            >
                {userInfo.role == "ROLE_ADMIN" ? (
                    <Tab.Screen
                        name="?????? ???????????? ??????"
                        component={CategoryEditStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: "?????? ???????????? ??????",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="check"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                ) : (
                    false
                )}
                {userInfo.role != "ROLE_ADMIN" ? (
                    <Tab.Screen
                        name="?????? ??????"
                        component={RecordStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: "?????? ??????",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="check"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                ) : (
                    false
                )}
                {userInfo.role != "ROLE_ADMIN" ? (
                    <Tab.Screen
                        name="??????"
                        component={StatisticStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: "??????",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="poll"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                ) : (
                    false
                )}
                <Tab.Screen
                    name="?????????"
                    component={BoardStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: "?????????",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="bulletin-board"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="?????????"
                    component={GroupStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: "?????????",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-group"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="?????? ??????"
                    component={MemberStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: "?????? ??????",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    ) : (
        <NavigationContainer>
            <Spinner visible={loading} />
            <LoginStack />
        </NavigationContainer>
    );
};

export default App;
