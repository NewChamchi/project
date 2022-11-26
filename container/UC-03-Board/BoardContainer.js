import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryPostAll } from "../../api/board";
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
    const setPostList = useSetRecoilState(postListState);
    const [page, setPage] = useState(0);
    useEffect(() => {
        const getPostList = () => {
            const { data } = inquiryPostAll(page)
                .then((response) => {
                    setPostList(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getPostList();
        // 임시 값이 필요함
    });
    const propsData = {
        navigation,
        categoryList,
        categoryNow,
        setCategoryNow,
        postList,
        setPostList,
        page,
        setPage,
    };
    return <BoardScreen {...propsData} />;
};

export default BoardContainer;
