import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
    createComment,
    deletePostById,
    inquiryPostAll,
    inquiryPostById,
} from "../../api/board";
import PostScreen from "../../component/UC-03-Board/PostScreen";
import { categoryNowState, loadingState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const PostContainer = ({ navigation }) => {
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const [comment, setComment] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const [loading, setLoading] = useRecoilState(loadingState);

    const sendDeletePostByIdApi = (id) => {
        setLoading(!loading);

        deletePostById(id)
            .then((response) => {
                inquiryPostAll()
                    .then((response) => {
                        setPostList(response["data"]);
                        navigation.navigate("Board");
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        setLoading(!loading);
    };
    const deleteAlert = () =>
        Alert.alert("게시글 삭제", "정말 삭제하시겠습니까?", [
            {
                text: "네",
                onPress: () => {
                    sendDeletePostByIdApi(postNow.id);
                },
            },
            {
                text: "아니오",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
        ]);
    const sendCreateCommentApi = () => {
        setLoading(!loading);

        const body = { body: comment };
        createComment(userInfo.id, postNow.id, body).then((response) => {
            inquiryPostAll(0)
                .then((response) => {
                    console.log("댓글 전송 후 포스트 전체 조회");
                    setPostList(response["data"]);
                })
                .catch((error) => console.log(error));
            inquiryPostById(postNow.id)
                .then((response) => {
                    console.log("댓글 전송 후 현재 포스트 조회");
                    setPostNow(response["data"]);
                })
                .catch((error) => console.log(error));
            setLoading(!loading);
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
        deleteAlert,
    };
    return <PostScreen {...propsData} />;
};

export default PostContainer;
