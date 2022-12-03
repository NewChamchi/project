// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Button,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import HabitPictureSampleContainer from "../../container/UC-02-Record/HabitPictureSampleContainer";

const HabitPictureScreen = (props) => {
    const {
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
    } = props;

    if (!permission) {
        // Camera permissions are still loading
        return <SafeAreaView />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <SafeAreaView style={{ flex: 1, margin: 30 }}>
                <Text
                    style={{
                        textAlign: "left",
                        fontSize: 20,
                        color: "tomato",
                        marginBottom: 30,
                    }}
                >
                    카메라 기능을 이용하기 위해서는 접근 허가가 필요합니다.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={requestPermission}
                >
                    <Text>접근 허가</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, margin: 30 }}>
            {captureVisible ? (
                <>
                    <View style={styles.cameraContainer}>
                        <Camera
                            style={styles.camera}
                            type={type}
                            ref={myCameraRef}
                        >
                            <View style={styles.cameraButtonContainer}>
                                <TouchableOpacity
                                    style={styles.cameraButton}
                                    onPress={toggleCameraType}
                                >
                                    <Text style={styles.text}>
                                        <MaterialCommunityIcons
                                            name="camera-flip"
                                            size={25}
                                        />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.cameraButton}
                                    onPress={() => {
                                        console.log("test");
                                        isSampleCapture ? false : uploadFile();
                                        setCaptureVisible(!captureVisible);
                                    }}
                                >
                                    <Text style={styles.text}>
                                        <MaterialCommunityIcons
                                            name="backspace-outline"
                                            size={25}
                                        />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.cameraButton}
                                    onPress={() => {
                                        snapPicture();
                                    }}
                                >
                                    <Text style={styles.text}>
                                        <MaterialCommunityIcons
                                            name="circle"
                                            size={25}
                                        />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>
                </>
            ) : (
                <>
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => pickImage()}
                            >
                                <Text>샘플 사진 가져오기</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setIsSampleCapture(true);
                                    setCaptureVisible(!captureVisible);
                                }}
                            >
                                <Text>샘플 사진 찍기</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setIsSampleCapture(false);
                                    setCaptureVisible(!captureVisible);
                                }}
                            >
                                <Text>인증 사진 찍기</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => pickImage(isSampleCapture)}
                            >
                                <Text>인증 사진 가져오기</Text>
                            </TouchableOpacity>
                        </View> */}
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    uploadFile();
                                }}
                            >
                                <Text>사진 보내기</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    navigation.navigate("HabitPictureSample");
                                }}
                            >
                                <Text>샘플 사진 보기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 3,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 300,
        margin: 16,
    },
    cameraContainer: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    cameraButtonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    cameraButton: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});
export default HabitPictureScreen;
