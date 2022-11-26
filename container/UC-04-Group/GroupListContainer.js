import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryGroupList } from "../../api/group";
import { inquiryCategoryAll } from "../../api/record";
import GroupListScreen from "../../component/UC-04-Group/GroupListScreen";
import { categoryListState, categoryNowState } from "../../recoil/CommonRecoil";
import { groupListState } from "../../recoil/UC-04-Group";

const GroupListContainer = ({ navigation }) => {
    const groupListByCategory = useRecoilValue(groupListState);
    const setGroupListByCategory = useSetRecoilState(groupListState);
    const categoryList = useRecoilValue(categoryListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);

    useEffect(() => {
        console.log(groupListByCategory);
        const { data } = inquiryGroupList(categoryNow["name"])
            .then((response) => {
                setGroupListByCategory(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const propDatas = {
        navigation,
        groupListByCategory,
        setGroupListByCategory,
        categoryList,
        categoryNow,
        setCategoryNow,
    };
    return <GroupListScreen {...propDatas} />;
};

export default GroupListContainer;
