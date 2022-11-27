import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryPostAll } from "../../api/board";
import BoardScreen from "../../component/UC-03-Board/BoardScreen";
import {
    categoryListState,
    categoryNowState,
    loadingState,
} from "../../recoil/CommonRecoil";
import { postListState } from "../../recoil/UC-03-Board";

const BoardContainer = ({ navigation }) => {
    const categoryList = useRecoilValue(categoryListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const setCategoryNow = useSetRecoilState(categoryNowState);
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useRecoilState(loadingState);

    useEffect(() => {
        setLoading(!loading);

        const getPostList = () => {
            inquiryPostAll(page)
                .then((response) => {
                    console.log(response["data"]);
                    setPostList(response["data"]);
                })
                .catch((error) => {
                    console.log("에러");
                    console.log(error);
                });
        };
        getPostList();

        setLoading(!loading);
        // 임시 값이 필요함
    }, []);
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
