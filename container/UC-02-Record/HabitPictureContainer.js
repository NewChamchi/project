import { useRef, useState } from "react";
import HabitPictureScreen from "../../component/UC-02-Record/HabitPictureScreen";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
    habitImageState,
    samplePictureScreenState,
} from "../../recoil/UC-02-Record";
// import AWS from "aws-sdk";
import { decode as atob, encode as btoa } from "base-64";
import axios from "axios";
import { Alert } from "react-native";

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
    const [imageBase64, setImageBase64] = useState(null);
    const [sampleImage, setSampleImage] = useState(null);
    const [sampleImageBase64, setSampleImageBase64] = useState(null);
    const [isSampleCapture, setIsSampleCapture] = useState(false);
    const toggleCameraType = () => {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    };
    const pickImage = async (isSampleCapture) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            base64: true,
        });

        // console.log(result);

        if (!result.cancelled) {
            if (isSampleCapture) {
                setSampleImage(result.uri);
                setSampleImageBase64(result.base64);
            } else {
                setImage(result.uri);
                setImageBase64(result.base64);
            }
        }
    };

    const snapPicture = async () => {
        // console.log("myCameraRef", myCameraRef);
        if (myCameraRef.current) {
            const options = { quality: 0.5, base64: true };
            let photo = await myCameraRef.current.takePictureAsync(options);
            setImage(photo.uri);
            setImageBase64(photo.base64);
            // console.log(photo);
        }
    };

    const dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    };

    // const ACCESS_KEY = "AKIAVP55UL5XIVUMDEHU";
    // const SECRET_ACCESS_KEY = "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";
    // const REGION = "ap-northeast-2";
    // const S3_BUCKET = "imagefile9057";

    // AWS.config.update({
    //     accessKeyId: ACCESS_KEY,
    //     secretAccessKey: SECRET_ACCESS_KEY,
    // });

    // const myBucket = new AWS.S3({
    //     params: { Bucket: S3_BUCKET },
    //     region: REGION,
    // });

    const uploadFile = () => {
        // const target = dataURLtoFile(
        //     sampleImageBase64,
        //     "https://imagefile9057.s3.ap-northeast-2.amazonaws.com/targetSea.jpeg"
        // );
        // const input = dataURLtoFile(
        //     imageBase64,
        //     "https://imagefile9057.s3.ap-northeast-2.amazonaws.com/inputSea.jpeg"
        // );

        // const targetParams = {
        //     ACL: "public-read",
        //     Body: target,
        //     Bucket: S3_BUCKET,
        //     Key: target.name,
        // };

        // const inputParams = {
        //     ACL: "public-read",
        //     Body: input,
        //     Bucket: S3_BUCKET,
        //     Key: input.name,
        // };

        // console.log("test1");
        // myBucket
        //     .putObject(targetParams)
        //     .on()
        //     .send((err) => {
        //         if (err) console.log(err);
        //     });
        // myBucket
        //     .putObject(inputParams)
        //     .on()
        //     .send((err) => {
        //         if (err) console.log(err);
        //     });

        const body = {
            target: "https://imagefile9057.s3.ap-northeast-2.amazonaws.com/targetSea.jpeg",
            input: "https://imagefile9057.s3.ap-northeast-2.amazonaws.com/inputSea.jpeg",
        };

        console.log("test1");

        axios
            .post("http://172.20.10.10:5000/api/ImgSimilarity", body)
            .then((response) => {
                console.log(response["data"]);
                if (test == 0) {
                    Alert.alert("성공", "인증이 성공되었습니다", [
                        {
                            text: "예",
                            onPress: () => {},
                            style: "cancel",
                        },
                    ]);
                    test = 1;
                } else if (test == 1) {
                    Alert.alert("실패", "인증이 실패되었습니다", [
                        {
                            text: "예",
                            onPress: () => {},
                            style: "cancel",
                        },
                    ]);
                    test = 0;
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
        imageBase64,
        dataURLtoFile,
        sampleImage,
        setSampleImage,
        sampleImageBase64,
        setSampleImageBase64,
        isSampleCapture,
        setIsSampleCapture,
    };
    return <HabitPictureScreen {...propDatas} />;
};

export default HabitPictureContainer;
