import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { applyGroup, inquiryGroup } from "../../api/group";
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
    // 필요 없을지도?
    useEffect(() => {
        const getGroupInfo = () => {
            const { data } = inquiryGroup(
                groupNow.groupName,
                groupNow.adminNickName
            )
                .then((response) => {
                    setGroupNow(data);
                })
                .catch((error) => console.log(error));
        };
        const getGroupMemberListInfo = () => {
            const body = {
                myNickName: userInfo.name,
                groupName: groupNow.groupName,
            };
            const { data } = inquiryGroupMemberList(body)
                .then((response) => {
                    setGroupNowMemberList(data);
                })
                .catch((error) => console.log(error));
        };
        getGroupInfo();
        getGroupMemberListInfo();
    });

    const sendApplyGroupApi = () => {
        const body = {
            groupName: groupNow.groupName,
            adminNickName: groupNow.adminNickName,
            userNickName: userInfo.name,
        };
        applyGroup(body)
            .then((response) => console.log(response))
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
    };
    return <GroupScreen {...propDatas} />;
};

export default GroupContainer;
