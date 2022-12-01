import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
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
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);
    const isFocused = useIsFocused();

    useEffect(() => {
        setLoading(true);

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

        setLoading(false);
        // 임시 값이 필요함
    }, [isFocused]);
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
