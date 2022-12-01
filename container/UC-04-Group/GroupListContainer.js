import { useIsFocused } from "@react-navigation/native";
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
    const [order, setOrder] = useState("name");
    const [orderList, setOrderList] = useState(["name", "number"]);
    const isFocused = useIsFocused();
    useEffect(() => {
        console.log(categoryNow["name"]);
        inquiryGroupList(categoryNow["name"], order)
            .then((response) => {
                setGroupListByCategory(response["data"]);

                console.log(groupListByCategory);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [order, isFocused]);
    const propDatas = {
        navigation,
        groupListByCategory,
        setGroupListByCategory,
        categoryList,
        categoryNow,
        setCategoryNow,
        order,
        setOrder,
        orderList,
    };
    return <GroupListScreen {...propDatas} />;
};

export default GroupListContainer;
