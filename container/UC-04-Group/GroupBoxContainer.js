const GroupBoxContainer = (props) => {
    const { item, id } = props;

    const propDatas = { item, id };
    return <GroupBox {...propDatas} />;
};

export default GroupBoxContainer;
