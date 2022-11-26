import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryPostById } from "../../api/board";
import PostBox from "../../component/UC-03-Board/PostBox";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { postNowState } from "../../recoil/UC-03-Board";
import { categoryNameToIcon } from "../CommonContainer";

const PostBoxContainer = (props) => {
    const { navigation, item, id } = props;
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    useEffect(() => {
        const getPostById = () => {
            const { data } = inquiryPostById(id)
                .then((response) => {
                    setPostNow(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getPostById();
    }, [postNow]);
    const propsData = { navigation, postNow, setPostNow };
    return <PostBox {...propsData} />;
};

export default PostBoxContainer;
