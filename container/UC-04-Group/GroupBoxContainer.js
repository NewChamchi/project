import { useRecoilValue, useSetRecoilState } from "recoil";
import GroupBox from "../../component/UC-04-Group/GroupBox";
import { groupNowState } from "../../recoil/UC-04-Group";

const GroupBoxContainer = (props) => {
    const { item, id, key, navigation } = props;
    const groupNow = useRecoilValue(groupNowState);
    const propDatas = { navigation, item, id, groupNow };
    return <GroupBox {...propDatas} />;
};

export default GroupBoxContainer;
