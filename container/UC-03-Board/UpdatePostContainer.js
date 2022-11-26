import { useRecoilValue, useSetRecoilState } from "recoil";
import { inquiryPostById } from "../../api/board";
import UpdatePostScreen from "../../component/UC-03-Board/UpdatePostScreen";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const UpdatePostContainer = ({ navigation }) => {
    const postList = useRecoilValue(postListState);
    const setPostList = useSetRecoilState(postListState);
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const sendUpdatePostByIdApi = () => {
        updatePostById(postNow.id)
            .then((response) => {
                const { listData } = inquiryPostAll()
                    .then((response) => {
                        setPostList(listData);
                    })
                    .catch((error) => console.log(error));
                const { data } = inquiryPostById(postNow.id)
                    .then((response) => {
                        setPostNow(data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };
    const propsData = {
        navigation,
        postList,
        setPostList,
        postNow,
        setPostNow,
        sendUpdatePostByIdApi,
    };
    return <UpdatePostScreen {...propsData} />;
};

export default UpdatePostContainer;
