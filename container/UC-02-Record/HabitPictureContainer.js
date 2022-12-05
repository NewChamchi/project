import { useRef, useState } from "react";
import HabitPictureScreen from "../../component/UC-02-Record/HabitPictureScreen";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
    habitImageState,
    samplePictureScreenState,
} from "../../recoil/UC-02-Record";
import AWS from "aws-sdk";
import axios from "axios";
import { Alert } from "react-native";
import path from "react-native-path";
import { readAsStringAsync } from "expo-file-system";
import { RNS3 } from "react-native-upload-aws-s3";

let test = 0;

const HabitPictureContainer = (props) => {
    const { navigation } = props;
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const image = useRecoilValue(habitImageState);
    const setImage = useSetRecoilState(habitImageState);
    const [captureVisible, setCaptureVisible] = useState(false);
    const myCameraRef = useRef();
    const samplePictureScreen = useRecoilValue(samplePictureScreenState);
    const setSamplePictureScreen = useSetRecoilState(samplePictureScreenState);
    const [sampleImage, setSampleImage] = useState(null);
    const [isSampleCapture, setIsSampleCapture] = useState(false);
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState("");

    const toggleCameraType = () => {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    };
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
            });

            if (!result.canceled) {
                isSampleCapture
                    ? setSampleImage(result.assets[0].uri)
                    : setImage(result.assets[0].uri);
                uploadFile(isSampleCapture, result.assets[0].uri);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const snapPicture = async () => {
        if (myCameraRef.current) {
            try {
                const options = { quality: 1, base64: true };
                let photo = await myCameraRef.current.takePictureAsync(options);

                isSampleCapture
                    ? setSampleImage(photo.uri)
                    : setImage(photo.uri);
                uploadFile(isSampleCapture, photo.uri);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const ACCESS_KEY = ""; // 커밋하기 전에는 항상 지워야함
    const SECRET_ACCESS_KEY = ""; // 커밋하기 전에는 항상 지워야함
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "my-react-native-bucket";

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const uploadFile = (isSampleCapture, file) => {
        const params = {
            uri: file,
            name: isSampleCapture ? "target.jpg" : "input.jpg",
            type: "image/jpg",
        };

        const options = {
            bucket: S3_BUCKET,
            region: REGION,
            accessKey: ACCESS_KEY,
            secretKey: SECRET_ACCESS_KEY,
            successActionStatus: 201,
        };

        console.log(file);

        RNS3.put(params, options)
            .then((response) => {
                if (response.status !== 201)
                    throw new Error("Failed to upload image to S3");
                console.log(response.body);
            })
            .catch((err) => console.log(err));
    };

    const compareImage = () => {
        const body = {
            target: `https://my-react-native-bucket.s3.ap-northeast-2.amazonaws.com/target.jpg`,
            input: `https://my-react-native-bucket.s3.ap-northeast-2.amazonaws.com/input.jpg`,
        };

        axios
            .post("http://172.20.10.10:5000/api/ImgSimilarity", body)
            .then((response) => {
                console.log(response["data"]);
                if (response["data"] == true) {
                    Alert.alert("성공", "인증이 성공되었습니다", [
                        {
                            text: "예",
                            onPress: () => {},
                            style: "cancel",
                        },
                    ]);
                } else if (response["data"] == false) {
                    Alert.alert("실패", "인증이 실패되었습니다", [
                        {
                            text: "예",
                            onPress: () => {},
                            style: "cancel",
                        },
                    ]);
                }
            })
            .catch((err) => console.log(err));
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
        uploadFile,
        sampleImage,
        setSampleImage,
        isSampleCapture,
        setIsSampleCapture,
        compareImage,
    };
    return <HabitPictureScreen {...propDatas} />;
};

export default HabitPictureContainer;
