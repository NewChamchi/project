import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryGroup, inquiryGroupList, updateGroup } from "../../api/group";
import GroupUpdateScreen from "../../component/UC-04-Group/GroupUpdateScreen";
import { userInfoState } from "../../recoil/UC-01-Member";
import { groupListState, groupNowState } from "../../recoil/UC-04-Group";

const GroupUpdateContainer = (props) => {
    const { updateScreen, setUpdateScreen } = props;
    const [groupName, setGroupName] = useState("");
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const sendUpdateGroupApi = (updateName) => {
        const body = {
            myNickName: groupNow.adminNickName,
            groupName: groupNow.groupName,
        };
        console.log(groupNow);
        console.log(body);
        updateGroup(updateName, body)
            .then((response) => {
                inquiryGroupList(groupNow.groupType, "name")
                    .then((response) => {
                        setGroupListByCategory(response["data"]);
                        console.log(response["data"]);
                        inquiryGroup(updateName, groupNow.adminNickName)
                            .then((response) => {
                                setGroupNow(response["data"]);
                            })
                            .catch((error) => console.log(error));
                    })
                    .catch((error) => {
                        console.log(error);
                    });
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
