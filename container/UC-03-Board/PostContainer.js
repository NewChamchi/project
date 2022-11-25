import { useRecoilValue, useSetRecoilState } from "recoil";
import PostScreen from "../../component/UC-03-Board/PostScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { postListState, postNowState } from "../../recoil/UC-03-Board";

const PostContainer = ({ navigation }) => {
    const postNow = useRecoilValue(postNowState);
    const setPostNow = useSetRecoilState(postNowState);
    const userInfo = useRecoilValue(userInfoState);
    // const onClickRecommended = () => {
    //     postNow.information.recommended.includes(userInfo.memberId)
    //         ? setPostNow(postNow.information.recommended.filter(userInfo.memberId))
    //         : postNow.information.recommended.push(userInfo.memberId);
    // };
    const propsData = {
        navigation,
        postNow,
        setPostNow,
    };
    return <PostScreen {...propsData} />;
};

export default PostContainer;
