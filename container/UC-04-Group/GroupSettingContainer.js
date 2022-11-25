import { useSetRecoilState } from "recoil";
import { groupNowState } from "../../recoil/UC-04-Group";

const GroupSettingContainer = ({ navigation }) => {
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const propDatas = { navigation, groupNow, setGroupNow };
    return <GroupSettingScreen {...propDatas} />;
};

export default GroupSettingContainer;
