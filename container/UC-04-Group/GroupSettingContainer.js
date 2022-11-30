import { useState } from "react";
import { Alert } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    deleteGroup,
    getRoleInThisGroup,
    inquiryGroupList,
    inquiryGroupMemberList,
    permissionApplyGroup,
    warnGroupMember,
    withdrawGroup,
} from "../../api/group";
import GroupSettingScreen from "../../component/UC-04-Group/GroupSettingScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    groupListState,
    groupNowMemberListState,
    groupNowState,
} from "../../recoil/UC-04-Group";

const GroupSettingContainer = ({ navigation }) => {
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const groupNowMemberList = useRecoilValue(groupNowMemberListState);
    const setGroupNowMemberList = useSetRecoilState(groupNowMemberListState);
    const userInfo = useRecoilValue(userInfoState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const sendPermissonApplyGroupApi = (permit, userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: groupNow.adminNickName,
        };
        permissionApplyGroup(permit, userNickName, body)
            .then((response) => {
                inquiryGroupMemberList(body)
                    .then((response) => {
                        setGroupNowMemberList(response["data"]);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendWarnGroupMemberApi = (userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: groupNow.adminNickName,
        };
        warnGroupMember(userNickName, body)
            .then((response) => {
                inquiryGroupMemberList(body)
                    .then((response) => {
                        setGroupNowMemberList(response["data"]);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendWithdrawGroupApi = (userNickNameWillBeAdmin) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: groupNow.adminNickName,
        };
        withdrawGroup(userNickNameWillBeAdmin, body)
            .then((response) => {
                inquiryGroupMemberList(body)
                    .then((response) => {
                        setGroupNowMemberList(response["data"]);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendDeleteGroupApi = () => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: groupNow.adminNickName,
        };
        deleteGroup(body)
            .then((response) => {
                inquiryGroupList(categoryNow["name"], "name")
                    .then((response) => {
                        setGroupListByCategory(response["data"]);
                        console.log(response["data"]);
                        navigation.navigate("GroupList");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteAlert = () =>
        Alert.alert("그룹 삭제", "정말 삭제하시겠습니까?", [
            {
                text: "네",
                onPress: () => {
                    sendDeleteGroupApi();
                },
            },
            {
                text: "아니오",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
        ]);
    const propDatas = {
        navigation,
        groupNow,
        setGroupNow,
        groupNowMemberList,
        setGroupNowMemberList,
        sendPermissonApplyGroupApi,
        sendWarnGroupMemberApi,
        sendWithdrawGroupApi,
        sendDeleteGroupApi,
        deleteAlert,
    };
    return <GroupSettingScreen {...propDatas} />;
};

export default GroupSettingContainer;
