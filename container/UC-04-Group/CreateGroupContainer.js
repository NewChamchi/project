import { useRecoilValue } from "recoil";
import { createGroup } from "../../api/group";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { groupListState } from "../../recoil/UC-04-Group";

const CreateGroupContainer = ({ navigation }) => {
    const groupListByCategory = useRecoilValue(groupListState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const [groupName, setGroupName] = useState;
    const userInfo = useRecoilValue(userInfoState);
    const sendCreateGroupApi = () => {
        const body = {
            groupName: groupName,
            groupType: categoryNow.name,
            nickName: userInfo.name,
        };
        createGroup(body)
            .then((response) => {
                console.log(response);
                const { data } = inquiryGroupList(groupType)
                    .then((response) => {
                        console.log(response);
                        setGroupListByCategory(data);
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => console.log(error));
    };
    const propDatas = {
        navigation,
        categoryNow,
        groupName,
        setGroupName,
        sendCreateGroupApi,
    };
    return <CreateGroupScreen {...propDatas} />;
};

export default CreateGroupContainer;
