import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    applyGroup,
    getRoleInThisGroup,
    inquiryGroup,
    inquiryGroupMemberList,
} from "../../api/group";
import GroupScreen from "../../component/UC-04-Group/GroupScreen";
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
    const [userRole, setUserRole] = useState();
    // 필요 없을지도?
    useEffect(() => {
        const getGroupInfo = () => {
            inquiryGroup(groupNow.groupName, groupNow.adminNickName)
                .then((response) => {
                    console.log("그룹 현재 정보 설정");
                    setGroupNow(response["data"]);
                })
                .catch((error) => console.log(error));
        };

        getGroupInfo();
    }, []);

    useEffect(() => {
        const getGroupMemberListInfo = () => {
            const body = {
                myNickName: groupNow.adminNickName,
                groupName: groupNow.groupName,
            };
            inquiryGroupMemberList(body)
                .then((response) => {
                    console.log("그룹 멤버 정보");
                    setGroupNowMemberList(response["data"]);
                    console.log(response["data"]);
                })
                .catch((error) => console.log(error));
        };
        getGroupMemberListInfo();
    }, []);

    useEffect(() => {
        const getGroupMyRole = () => {
            const body = {
                myNickName: groupNow.adminNickName,
                groupName: groupNow.groupName,
            };
            console.log("test");
            console.log(body);
            getRoleInThisGroup(body)
                .then((response) => {
                    console.log("그룹 내 나의 역할");
                    setUserRole(response["data"]);
                    console.log(response);
                })
                .catch((error) => console.log(error));
        };
        getGroupMyRole();
    });

    const sendApplyGroupApi = (userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            adminNickName: groupNow.adminNickName,
            userNickName: userNickName,
        };
        applyGroup(body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error));
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
    };
    return <GroupScreen {...propDatas} />;
};

export default GroupContainer;
