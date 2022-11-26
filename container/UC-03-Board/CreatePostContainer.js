import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CreatePostScreen from "../../component/UC-03-Board/CreatePostScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
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

    const findHabitIdByHabitName = () => {
        const habitId = habitRecordList.find(
            (item) => item.name == habitName
        ).id;
        return habitId;
    };

    const sendCreatePostApi = () => {
        const habitId = findHabitIdByHabitName();
        const body = {
            title: postTitle,
            content: postContents,
        };
        createPost(habitId, body)
            .then((response) => {})
            .catch((error) => {
                console.log(error);
            });
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
        habitRecordList,
        habitName,
        setHabitName,
        sendCreatePostApi,
    };
    return <CreatePostScreen {...propsData} />;
};

export default CreatePostContainer;
