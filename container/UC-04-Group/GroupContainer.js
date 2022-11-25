import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { applyGroup, inquiryGroup } from "../../api/group";
import {
    groupNowMemberListState,
    groupNowState,
} from "../../recoil/UC-04-Group";

const GroupContainer = ({ navigation }) => {
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const groupNowMemberList = useRecoilValue(groupNowMemberListState);
    const setGroupNowMemberList = useSetRecoilState(groupNowMemberListState);
    // 필요 없을지도?
    useEffect(() => {
        const getGroupInfo = () => {
            const { data } = inquiryGroup(
                groupNow.groupName,
                groupNow.adminNickName
            )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.log(error));
        };
        const getGroupMemberListInfo = () => {
            const { data } = inquiryGroupMemberList()
            // {인자 들어가야함}
                .then((response) => {
                    console.log(response);
                    setGroupNowMemberList(data);
                })
                .catch((error) => console.log(error));
        };
        getGroupInfo();
        getGroupMemberListInfo();
    });

    const sendApplyGroupApi = () => {
        const body = {
            /* 들어가야하는 body 값 */
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
    };
    return <GroupScreen {...propDatas} />;
};

export default GroupContainer;
