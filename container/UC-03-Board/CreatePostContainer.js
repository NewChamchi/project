import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CreatePostScreen from "../../component/UC-03-Board/CreatePostScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { postListState } from "../../recoil/UC-03-Board";

const CreatePostContainer = ({ navigation }) => {
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const [postTitle, setPostTitle] = useState("");
    const [postContents, setPostContents] = useState("");
    const sendItem = (oldPostList) => {
        setPostList(() => [
            ...oldPostList,
            {
                information: {
                    category: categoryNow.name,
                    title: postTitle,
                    nickname: "아무개",
                    views: 0,
                    recommeded: 0,
                },
                contents: postContents,
                comment: [
                    { nickname: "아무개", contents: "개추 ㅋㅋ" },
                    { nickname: "홍길동", contents: "잉 기모링" },
                ],
            },
        ]);
    };
    const propsData = {
        navigation,
        postList,
        setPostList,
        categoryNow,
        postTitle,
        setPostTitle,
        postContents,
        setPostContents,
        sendItem,
    };
    return <CreatePostScreen {...propsData} />;
};

export default CreatePostContainer;
