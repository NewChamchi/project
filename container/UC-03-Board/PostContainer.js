import { useState } from "react";
import { Alert } from "react-native";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
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
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const [updateScreen, setUpdateScreen] = useState(false);
    const sendDeletePostByIdApi = () => {
        setLoading(true);

        deletePostById(postNow.id)
            .then((response) => {
                inquiryPostAll(0)
                    .then((response) => {
                        setPostList(response["data"]);
                        navigation.navigate("Board");
                    })
                    .catch((error) => console.log(1));
            })
            .catch((error) => console.log(2));
        setLoading(false);
    };
    const deleteAlert = () =>
        Alert.alert("게시글 삭제", "정말 삭제하시겠습니까?", [
            {
                text: "네",
                onPress: () => {
                    console.log(postNow.id);
                    sendDeletePostByIdApi();
                },
            },
            {
                text: "아니오",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
        ]);
    const sendCreateCommentApi = () => {
        setLoading(true);

        const body = { body: comment };
        console.log("test");
        createComment(userInfo.memberId, postNow.id, body).then((response) => {
            inquiryPostAll(0)
                .then((response) => {
                    console.log("댓글 전송 후 포스트 전체 조회");
                    setPostList(response["data"]);
                    inquiryPostById(postNow.id)
                        .then((response) => {
                            console.log("댓글 전송 후 현재 포스트 조회");
                            setPostNow(response["data"]);
                            console.log(response["data"]);
                        })
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        });
        setLoading(false);
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
        updateScreen,
        setUpdateScreen,
    };
    return <PostScreen {...propsData} />;
};

export default PostContainer;
