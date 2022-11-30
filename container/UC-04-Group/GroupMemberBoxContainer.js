import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquirygroupMemberInfo } from "../../api/group";
import GroupMemberBox from "../../component/UC-04-Group/GroupMemberBox";
import { groupNowMemberState, groupNowState } from "../../recoil/UC-04-Group";

const GroupMemberBoxContainer = (props) => {
    const { item, navigation } = props;
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNowMember = useSetRecoilState(groupNowMemberState);

    const sendInquiryGroupMemberInfoApi = () => {
        const body = {
            groupName: groupNow.groupName,
            myNickName: item.nickName,
        };

        inquirygroupMemberInfo(body)
            .then((response) => {
                setGroupNowMember(response.data);
                console.log(response.data);
                navigation.navigate("GroupMemberDetail");
            })
            .catch((err) => console.log(err));
    };
    const propDatas = {
        item,
        navigation,
        sendInquiryGroupMemberInfoApi,
    };
    return <GroupMemberBox {...propDatas} />;
};

export default GroupMemberBoxContainer;
