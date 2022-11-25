import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createComment, inquiryPostAll } from "../../api/board";
import PostScreen from "../../component/UC-03-Board/PostScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const PostContainer = ({ navigation }) => {
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const [comment, setComment] = useState("");
    const userInfo = useRecoilValue(userInfoState);

    const sendDeletePostByIdApi = () => {
        deletePostById(postNow.id)
            .then((response) => {
                console.log(response);
                const { data } = inquiryPostAll()
                    .then((response) => {
                        console.log(response);
                        setPostList(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const sendCreateCommentApi = () => {
        const body = { body: comment };
        createComment(userInfo.id, postNow.id, body).then((response) => {
            console.log(response);
            const { listData } = inquiryPostAll()
                .then((response) => {
                    console.log(response);
                    setPostList(listData);
                })
                .catch((error) => console.log(error));
            const { data } = inquiryPostById(postNow.id)
                .then((response) => {
                    console.log(response);
                    setPostNow(data);
                })
                .catch((error) => console.log(error));
        });
    };
    const propsData = {
        navigation,
        postNow,
        setPostNow,
        sendDeletePostByIdApi,
        sendCreateCommentApi,
        comment,
        setComment,
    };
    return <PostScreen {...propsData} />;
};

export default PostContainer;
