import { useRecoilValue, useSetRecoilState } from "recoil";
import { groupNowState } from "../../recoil/UC-04-Group";

const GroupBoxContainer = (props) => {
    const { item, id } = props;
    const groupNow = useRecoilValue(groupNowState);
    const setGroupNow = useSetRecoilState(groupNowState);
    const propDatas = { item, id, groupNow, setGroupNow };
    return <GroupBox {...propDatas} />;
};

export default GroupBoxContainer;
