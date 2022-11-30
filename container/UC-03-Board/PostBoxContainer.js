import { useEffect, useState } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import { inquiryPostById } from "../../api/board";
import PostBox from "../../component/UC-03-Board/PostBox";
import { categoryNowState, loadingState } from "../../recoil/CommonRecoil";
import { postNowState } from "../../recoil/UC-03-Board";
import { categoryNameToIcon } from "../CommonContainer";

const PostBoxContainer = (props) => {
    const { navigation, item, id } = props;
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    useEffect(() => {
        const getPostById = () => {
            inquiryPostById(id)
                .then((response) => {
                    setPostNow(response["data"]);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getPostById();
    }, []);
    const propsData = { navigation, item, id, postNow, setPostNow };
    return <PostBox {...propsData} />;
};

export default PostBoxContainer;
