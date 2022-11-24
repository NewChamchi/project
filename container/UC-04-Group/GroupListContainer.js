import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryGroupList } from "../../api/group";
import { inquiryCategoryAll } from "../../api/record";
import { groupListState } from "../../recoil/UC-04-Group";

const GroupListContainer = ({ navigation }) => {
    const groupListByCategory = useRecoilValue(groupListState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const categoryList = useRecoilValue(categoryList);
    const getGroupListByCategory = (groupType) => {
        const { data } = inquiryGroupList(groupType)
            .then((response) => {
                console.log(response);
                setGroupListByCategory(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const propDatas = {
        navigation,
        groupListByCategory,
        setGroupListByCategory,
        getGroupListByCategory,
        categoryList,
    };
    return <GroupListScreen {...propDatas} />;
};

export default GroupListContainer;
