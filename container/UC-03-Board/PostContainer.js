import { useRecoilValue, useSetRecoilState } from "recoil";
import PostScreen from "../../component/UC-03-Board/PostScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userNowState } from "../../recoil/UC-01-Member";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const PostContainer = ({ navigation }) => {
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const userNow = useRecoilValue(userNowState);
    const onClickRecommended = () => {
        postNow.information.recommended.includes(userNow.email)
            ? setPostNow(postNow.information.recommended.filter(userNow.email))
            : postNow.information.recommended.push(userNow.email);
    };
    const propsData = {
        navigation,
        postNow,
        setPostNow,
    };
    return <PostScreen {...propsData} />;
};

export default PostContainer;
