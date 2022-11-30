import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    applyGroup,
    getRoleInThisGroup,
    inquiryGroup,
    inquiryGroupList,
    inquiryGroupMemberList,
    withdrawGroup,
} from "../../api/group";
import GroupScreen from "../../component/UC-04-Group/GroupScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    groupNowMemberListState,
    groupNowState,
} from "../../recoil/UC-04-Group";

const GroupContainer = ({ navigation }) => {
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const groupNowMemberList = useRecoilValue(groupNowMemberListState);
    const setGroupNowMemberList = useSetRecoilState(groupNowMemberListState);
    const userInfo = useRecoilValue(userInfoState);
    const [userRole, setUserRole] = useState("");
    const categoryNow = useRecoilValue(categoryNowState);
    // 필요 없을지도?
    useEffect(() => {
        const getGroupInfo = () => {
            const body = {
                myNickName: groupNow.adminNickName,
                groupName: groupNow.groupName,
            };
            inquiryGroup(groupNow.groupName, groupNow.adminNickName)
                .then((response) => {
                    console.log("그룹 현재 정보 설정");
                    setGroupNow(response["data"]);
                    getRoleInThisGroup(body)
                        .then((response) => {
                            console.log("그룹 내 나의 역할");
                            setUserRole(response["data"]);
                            console.log(response["data"]);
                            inquiryGroupMemberList(body)
                                .then((response) => {
                                    console.log("그룹 멤버 정보");
                                    setGroupNowMemberList(response["data"]);
                                    console.log(response["data"]);
                                })
                                .catch((error) => console.log(error));
                        })
                        .catch((error) => {
                            inquiryGroupMemberList(body)
                                .then((response) => {
                                    console.log("그룹 멤버 정보");
                                    setGroupNowMemberList(response["data"]);
                                    console.log(response["data"]);
                                })
                                .catch((error) => {
                                    console.log("문제확인");
                                    setGroupNowMemberList(null);
                                });
                            setUserRole("ROLE_GROUP_ANONYMOUS");
                        });
                })
                .catch((error) => console.log(error));
        };
        // const getGroupMyRole = () => {
        //     console.log("그룹 내 나의 역할 조회");
        //     const body = {
        //         myNickName: groupNow.adminNickName,
        //         groupName: groupNow.groupName,
        //     };
        //     console.log("test");
        //     console.log(body);
        //     getRoleInThisGroup(body)
        //         .then((response) => {
        //             console.log("그룹 내 나의 역할");
        //             setUserRole(response["data"]);
        //             console.log(response["data"]);
        //         })
        //         .catch((error) => console.log(error));
        // };
        // const getGroupMemberListInfo = () => {
        //     console.log("멤버 리스트 조회");
        //     console.log(groupNow);
        //     const body = {
        //         myNickName: groupNow.adminNickName,
        //         groupName: groupNow.groupName,
        //     };
        //     inquiryGroupMemberList(body)
        //         .then((response) => {
        //             console.log("그룹 멤버 정보");
        //             setGroupNowMemberList(response["data"]);
        //             console.log(response["data"]);
        //         })
        //         .catch((error) => console.log(error));
        // };
        getGroupInfo();
        // await sleep(3000);
        // getGroupMemberListInfo();
        // await sleep(3000);
        // getGroupMyRole();
    }, []);

    const sendApplyGroupApi = (userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            adminNickName: groupNow.adminNickName,
            userNickName: userNickName,
        };
        applyGroup(body)
            .then((response) => {
                console.log(response["data"]);
                Alert.alert("가입 신청", `${response["data"]}`, [
                    {
                        text: "확인",
                        onPress: () => {},
                        style: "cancel",
                    },
                ]);
            })
            .catch((error) => {
                console.log(error.response);
                Alert.alert("가입 신청 오류", `${error.response["data"]}`, [
                    {
                        text: "확인",
                        onPress: () => {},
                        style: "cancel",
                    },
                ]);
            });
    };

    const sendWithdrawGroupApi = (userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: groupNow.adminNickName,
        };
        withdrawGroup(body)
            .then((response) => {
                inquiryGroupList(categoryNow["name"], "name")
                    .then((response) => {
                        setGroupListByCategory(response["data"]);
                        console.log(response["data"]);
                        navigation.navigate("GroupList");
                    })
                    .catch((error) => {
                        console.log("그룹 조회 실패");
                        console.log(error);
                    });
            })
            .catch((error) => {
                Alert.alert("그룹 탈퇴 실패", ``, [
                    {
                        text: "확인",
                        onPress: () => {},
                        style: "cancel",
                    },
                ]);
            });
    };
    const propDatas = {
        navigation,
        groupNow,
        setGroupNow,
        sendApplyGroupApi,
        groupNowMemberList,
        setGroupNowMemberList,
        userInfo,
        userRole,
        setUserRole,
        sendWithdrawGroupApi,
    };
    return <GroupScreen {...propDatas} />;
};

export default GroupContainer;
