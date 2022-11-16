import UpdatePostScreen from "../../component/UC-03-Board/UpdatePostScreen";

const UpdatePostContainer = ({ navigation }) => {
    const propsData = {
        navigation,
    };
    return <UpdatePostScreen {...propsData} />;
};

export default UpdatePostContainer;
