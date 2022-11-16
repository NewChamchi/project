import { useState } from "react";
import HabitPictureScreen from "../../component/UC-02-Record/HabitPictureScreen";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";

const HabitPictureContainer = (props) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage] = useState(null);
    const [captureVisible, setCaptureVisible] = useState(false);

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
    const propDatas = {
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
    };
    return <HabitPictureScreen {...propDatas} />;
};

export default HabitPictureContainer;
