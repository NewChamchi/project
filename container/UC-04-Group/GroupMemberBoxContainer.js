import GroupMemberBox from "../../component/UC-04-Group/GroupMemberBox";

const GroupMemberBoxContainer = (props) => {
    const { item } = props;

    const propDatas = {
        item,
    };
    return <GroupMemberBox {...propDatas} />;
};

export default GroupMemberBoxContainer;
