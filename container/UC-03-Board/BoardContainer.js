import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import BoardScreen from "../../component/UC-03-Board/BoardScreen";
import {
    categoryListIconState,
    categoryNowState,
} from "../../recoil/CommonRecoil";
import { postListState } from "../../recoil/UC-03-Board";

const BoardContainer = ({ navigation }) => {
    const categoryList = useRecoilValue(categoryListIconState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);
    const postList = useRecoilValue(postListState);
    const propsData = {
        navigation,
        categoryList,
        categoryNow,
        setCategoryNow,
        postList,
    };
    return <BoardScreen {...propsData} />;
};

export default BoardContainer;
