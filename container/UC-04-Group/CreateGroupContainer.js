import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createGroup, inquiryGroupList } from "../../api/group";
import CreateGroupScreen from "../../component/UC-04-Group/CreateGroupScreen";
import { categoryNowState } from "../../recoil/CommonRecoil";
import { userInfoState } from "../../recoil/UC-01-Member";
import { groupListState } from "../../recoil/UC-04-Group";

const CreateGroupContainer = ({ navigation }) => {
    const [groupListByCategory, setGroupListByCategory] =
        useRecoilState(groupListState);
    const categoryNow = useRecoilValue(categoryNowState);
    const [groupName, setGroupName] = useState("");
    const [nickName, setNickName] = useState("");
    const userInfo = useRecoilValue(userInfoState);
    const setUserInfo = useSetRecoilState(userInfoState);
    // useEffect(() => {
    //     console.log(categoryNow);
    // });
    const sendCreateGroupApi = () => {
        const body = {
            groupName: groupName,
            groupType: categoryNow.name,
            nickName: nickName,
        };
        createGroup(body)
            .then((response) => {
                inquiryGroupList(categoryNow["name"], "name")
                    .then((response) => {
                        setGroupListByCategory(response["data"]);
                        console.log(response["data"]);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => console.log(error));
    };
    const propDatas = {
        navigation,
        categoryNow,
        groupName,
        setGroupName,
        setNickName,
        nickName,
        sendCreateGroupApi,
    };
    return <CreateGroupScreen {...propDatas} />;
};

export default CreateGroupContainer;
