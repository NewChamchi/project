import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryGroup, inquiryGroupList, updateGroup } from "../../api/group";
import GroupUpdateScreen from "../../component/UC-04-Group/GroupUpdateScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import { groupListState, groupNowState } from "../../recoil/UC-04-Group";

const GroupUpdateContainer = (props) => {
    const [updateScreen, setUpdateScreen] = useState(false);
    const [groupName, setGroupName] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const sendUpdateGroupApi = (updateName) => {
        const body = {
            myNickName: userInfo.name,
            groupName: groupNow.groupName,
        };
        updateGroup(updateName, body)
            .then((response) => {
                const { listData } = inquiryGroupList(
                    groupNow.groupType,
                    "name"
                )
                    .then((response) => {
                        setGroupListByCategory(listData);
                        console.log(listData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                const { data } = inquiryGroup(
                    groupNow.groupName,
                    groupNow.adminNickName
                )
                    .then((response) => {
                        setGroupNow(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };
    const propDatas = {
        updateScreen,
        setUpdateScreen,
        groupName,
        setGroupName,
        sendUpdateGroupApi,
    };
    return <GroupUpdateScreen {...propDatas} />;
};

export default GroupUpdateContainer;
