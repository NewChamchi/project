import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    permissionApplyGroup,
    warnGroupMember,
    withdrawGroup,
} from "../../api/group";
import GroupSettingScreen from "../../component/UC-04-Group/GroupSettingScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import {
    groupNowMemberListState,
    groupNowState,
} from "../../recoil/UC-04-Group";

const GroupSettingContainer = ({ navigation }) => {
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const groupNowMemberList = useRecoilValue(groupNowMemberListState);
    const setGroupNowMemberList = useSetRecoilState(groupNowMemberListState);
    const userInfo = useRecoilValue(userInfoState);

    const sendPermissonApplyGroupApi = (permit, userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: userInfo.name,
        };
        permissionApplyGroup(permit, userNickName, body)
            .then((response) => {
                const { data } = inquiryGroupMemberList({
                    myNickName: userInfo.name,
                    groupName: groupNow.groupName,
                })
                    .then((response) => {
                        setGroupNowMemberList(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendWarnGroupMemberApi = (userNickName) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: userInfo.name,
        };
        warnGroupMember(userNickName, body)
            .then((response) => {
                const { data } = inquiryGroupMemberList({
                    myNickName: userInfo.name,
                    groupName: groupNow.groupName,
                })
                    .then((response) => {
                        setGroupNowMemberList(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendWithdrawGroupApi = (userNickNameWillBeAdmin) => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: userInfo.name,
        };
        withdrawGroup(userNickNameWillBeAdmin, body)
            .then((response) => {
                const { data } = inquiryGroupMemberList({
                    myNickName: userInfo.name,
                    groupName: groupNow.groupName,
                })
                    .then((response) => {
                        setGroupNowMemberList(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };
    const propDatas = {
        navigation,
        groupNow,
        setGroupNow,
        groupNowMemberList,
        setGroupNowMemberList,
        sendPermissonApplyGroupApi,
        sendWarnGroupMemberApi,
        sendWithdrawGroupApi,
    };
    return <GroupSettingScreen {...propDatas} />;
};

export default GroupSettingContainer;
