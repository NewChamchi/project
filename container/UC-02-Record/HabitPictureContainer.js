import { useRef, useState } from "react";
import HabitPictureScreen from "../../component/UC-02-Record/HabitPictureScreen";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    habitImageState,
    samplePictureScreenState,
} from "../../recoil/UC-02-Record";

const HabitPictureContainer = (props) => {
    const { navigation } = props;
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const image = useRecoilState(habitImageState);
    const setImage = useSetRecoilState(habitImageState);
    const [captureVisible, setCaptureVisible] = useState(false);
    const myCameraRef = useRef();
    const samplePictureScreen = useRecoilState(samplePictureScreenState);
    const setSamplePictureScreen = useSetRecoilState(samplePictureScreenState);

    const toggleCameraType = () => {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    };
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const snapPicture = async () => {
        console.log("myCameraRef", myCameraRef);
        if (myCameraRef.current) {
            const options = { quality: 0.5, base64: false };
            let photo = await myCameraRef.current.takePictureAsync(options);
            setImage(photo.uri);
            console.log(photo);
        }
    };

    const propDatas = {
        navigation,
        type,
        setType,
        permission,
        requestPermission,
        image,
        setImage,
        captureVisible,
        setCaptureVisible,
        toggleCameraType,
        pickImage,
        snapPicture,
        myCameraRef,
        samplePictureScreen,
        setSamplePictureScreen,
    };
    return <HabitPictureScreen {...propDatas} />;
};

export default HabitPictureContainer;
