import { useRecoilValue } from "recoil";
import { createGroup } from "../../api/group";
import { categoryNowState } from "../../recoil/CommonRecoil";

const CreateGroupContainer = ({ navigation }) => {
    const categoryNow = useRecoilValue(categoryNowState);
    const [groupName, setGroupName] = useState;
    const sendCreateGroupApi = () => {
        const body = {};
        createGroup(body)
            .then((response) => console.log(response))
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
