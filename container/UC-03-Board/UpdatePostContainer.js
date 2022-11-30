import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    inquiryPostAll,
    inquiryPostById,
    updatePostById,
} from "../../api/board";
import UpdatePostScreen from "../../component/UC-03-Board/UpdatePostScreen";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const UpdatePostContainer = (props) => {
    const { updateScreen, setUpdateScreen } = props;
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const [postTitle, setPostTitle] = useState("");
    const [postContents, setPostContents] = useState("");
    const sendUpdatePostByIdApi = () => {
        const body = {
            title: postTitle,
            content: postContents,
        };
        console.log(postNow.id);
        updatePostById(postNow.id, body)
            .then((response) => {
                inquiryPostAll(0)
                    .then((response) => {
                        setPostList(response["data"]);
                        inquiryPostById(postNow.id)
                            .then((response) => {
                                setPostNow(response["data"]);
                            })
                            .catch((error) => console.log(error));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };
    const propsData = {
        postList,
        setPostList,
        postNow,
        setPostNow,
        sendUpdatePostByIdApi,
        updateScreen,
        setUpdateScreen,
        postTitle,
        setPostTitle,
        postContents,
        setPostContents,
    };
    return <UpdatePostScreen {...propsData} />;
};

export default UpdatePostContainer;
