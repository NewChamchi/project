import { useEffect, useState } from "react";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import { createPost, inquiryPostAll } from "../../api/board";
import CreatePostScreen from "../../component/UC-03-Board/CreatePostScreen";
import { categoryNowState, loadingState } from "../../recoil/CommonRecoil";
import { habitRecordListState } from "../../recoil/UC-02-Record";
import { postListState } from "../../recoil/UC-03-Board";

const CreatePostContainer = ({ navigation }) => {
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const habitRecordList = useRecoilValue(habitRecordListState);
    const [postTitle, setPostTitle] = useState("");
    const [postContents, setPostContents] = useState("");
    const [habitName, setHabitName] = useState("");
    const [loading, setLoading] = useRecoilStateLoadable(loadingState);

    const findHabitIdByHabitName = () => {
        const habitId = habitRecordList.find(
            (item) => item.name == habitName
        ).id;
        return habitId;
    };
    const getPostList = (page) => {
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
    const sendCreatePostApi = () => {
        setLoading((prev) => !prev);

        const habitId = findHabitIdByHabitName();
        const body = {
            title: postTitle,
            content: postContents,
        };
        createPost(habitId, body)
            .then((response) => getPostList(0))
            .catch((error) => {
                console.log(error);
            });
        setLoading((prev) => !prev);
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
        habitRecordList,
        habitName,
        setHabitName,
        sendCreatePostApi,
    };
    return <CreatePostScreen {...propsData} />;
};

export default CreatePostContainer;
