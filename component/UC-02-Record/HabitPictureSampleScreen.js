import {
    Image,
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from "react-native";

const HabitPictureSampleScreen = (props) => {
    const {
        navigation,
        image,
        setImage,
        samplePictureScreen,
        setSamplePictureScreen,
    } = props;

    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            {true && (
                <Image
                    source={{ uri: image }}
                    style={{
                        width: "90%",
                        height: "90%",
                        resizeMode: "center",
                    }}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 300,
        margin: 16,
    },
});
export default HabitPictureSampleScreen;
