// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import "react-native-gesture-handler";

import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HabitRecordScreen from "./UC-02-Record/HabitRecordScreen";
import HabitRecordDetailScreen from "./UC-02-Record/HabitRecordDetailScreen";
import HabitPictureScreen from "./UC-02-Record/HabitPictureScreen";
import HabitStatisticsScreen from "./UC-02-Record/HabitStatisticsScreen";
import BoardScreen from "./UC-03-Board/BoardScreen";
import CreatePostScreen from "./UC-03-Board/CreatePostScreen";
import PostScreen from "./UC-03-Board/PostScreen";
import UpdatePostScreen from "./UC-03-Board/UpdatePostScreen";
import GroupListScreen from "./UC-04-Group/GroupListScreen";
import ChatScreen from "./UC-04-Group/ChatScreen";
import CreateGroupScreen from "./UC-04-Group/CreateGroupScreen";
import GroupSettingScreen from "./UC-04-Group/GroupSettingScreen";
import GroupScreen from "./UC-04-Group/GroupScreen";
import CreateHabitRecordContainer from "../container/UC-02-Record/CreateHabitRecordContainer";
import HabitRecordContainer from "../container/UC-02-Record/HabitRecordContainer";
import HabitRecordDetailContainer from "../container/UC-02-Record/HabitRecordDetailContainer";
import BoardContainer from "../container/UC-03-Board/BoardContainer";
import CreatePostContainer from "../container/UC-03-Board/CreatePostContainer";
import PostContainer from "../container/UC-03-Board/PostContainer";
import UpdatePostContainer from "../container/UC-03-Board/UpdatePostContainer";
import HabitPictureContainer from "../container/UC-02-Record/HabitPictureContainer";
import UserMainContainer from "../container/UC-01-Member/UserMainContainer";
import UpdateUserContainer from "../container/UC-01-Member/UpdateUserContainer";
import UserAllInfoContainer from "../container/UC-01-Member/UserAllInfoContainer";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userNowState } from "../recoil/CommonRecoil";
import LoginContainer from "../container/LoginContainer";
import SignUpContainer from "../container/SignUpContainer";
import HabitPictureSampleContainer from "../container/UC-02-Record/HabitPictureSampleContainer";

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
                options={{ title: "메인 화면" }}
            />
            <Stack.Screen
                name="HabitDetail"
                component={HabitRecordDetailContainer}
                options={{ title: "습관 상세" }}
            />
            <Stack.Screen
                name="CreateHabitRecord"
                component={CreateHabitRecordContainer}
                options={{ title: "습관 생성" }}
            />
            <Stack.Screen
                name="HabitPicture"
                component={HabitPictureContainer}
                options={{ title: "샘플 사진 관리" }}
            />
            <Stack.Screen
                name="HabitPictureSample"
                component={HabitPictureSampleContainer}
                options={{ title: "나의 샘플 사진" }}
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
                component={HabitStatisticsScreen}
                options={{ title: "메인 화면" }}
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
                options={{ title: "메인 화면" }}
            />
            <Stack.Screen
                name="CreatePost"
                component={CreatePostContainer}
                options={{ title: "게시글 생성" }}
            />
            <Stack.Screen
                name="Post"
                component={PostContainer}
                options={{ title: "게시글" }}
            />
            <Stack.Screen
                name="UpdatePost"
                component={UpdatePostContainer}
                options={{ title: "게시글 수정" }}
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
                component={GroupListScreen}
                options={{ title: "메인 화면" }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{ title: "채팅방" }}
            />
            <Stack.Screen
                name="CreateGroup"
                component={CreateGroupScreen}
                options={{ title: "소모임 생성" }}
            />
            <Stack.Screen
                name="Group"
                component={GroupScreen}
                options={{ title: "소모임" }}
            />
            <Stack.Screen
                name="GroupSetting"
                component={GroupSettingScreen}
                options={{ title: "소모임 관리" }}
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
                options={{ title: "메인 화면" }}
            />
            <Stack.Screen
                name="UpdateUser"
                component={UpdateUserContainer}
                options={{ title: "나의 정보 수정" }}
            />
            <Stack.Screen
                name="UserAllInfo"
                component={UserAllInfoContainer}
                options={{ title: "모든 유저 정보" }}
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
                options={{ title: "로그인" }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpContainer}
                options={{ title: "회원 가입" }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    const userNow = useRecoilState(userNowState);
    return userNow.email ? (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: "skyblue",
                }}
            >
                <Tab.Screen
                    name="습관 관리"
                    component={RecordStack}
                    options={{
                        tabBarLabel: "습관 관리",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="check"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="통계"
                    component={StatisticStack}
                    options={{
                        tabBarLabel: "통계",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="poll"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="게시판"
                    component={BoardStack}
                    options={{
                        tabBarLabel: "게시판",
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
                    name="소모임"
                    component={GroupStack}
                    options={{
                        tabBarLabel: "소모임",
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
                    name="나의 계정"
                    component={MemberStack}
                    options={{
                        tabBarLabel: "나의 계정",
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
            <LoginStack />
        </NavigationContainer>
    );
};

export default App;
