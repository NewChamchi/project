import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryGroupList } from "../../api/group";
import { inquiryCategoryAll } from "../../api/record";
import { categoryListState, categoryNowState } from "../../recoil/CommonRecoil";
import { groupListState } from "../../recoil/UC-04-Group";

const GroupListContainer = ({ navigation }) => {
    const groupListByCategory = useRecoilValue(groupListState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const categoryList = useRecoilValue(categoryListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);
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

    useEffect(() => {
        getGroupListByCategory(categoryNow.name);
    }, []);
    const propDatas = {
        navigation,
        groupListByCategory,
        setGroupListByCategory,
        getGroupListByCategory,
        categoryList,
        categoryNow,
        setCategoryNow,
    };
    return <GroupListScreen {...propDatas} />;
};

export default GroupListContainer;
