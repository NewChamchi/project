import { useRecoilValue, useSetRecoilState } from "recoil";
import HabitPictureSampleScreen from "../../component/UC-02-Record/HabitPictureSampleScreen";
import {
    habitImageState,
    samplePictureScreenState,
} from "../../recoil/UC-02-Record";

const HabitPictureSampleContainer = (props) => {
    const image = useRecoilValue(habitImageState);
    const setImage = useSetRecoilState(habitImageState);
    const samplePictureScreen = useRecoilState(samplePictureScreenState);
    const setSamplePictureScreen = useSetRecoilState(samplePictureScreenState);

    const propDatas = {
        image,
        setImage,
        samplePictureScreen,
        setSamplePictureScreen,
    };
    return <HabitPictureSampleScreen {...propDatas} />;
};

export default HabitPictureSampleContainer;
