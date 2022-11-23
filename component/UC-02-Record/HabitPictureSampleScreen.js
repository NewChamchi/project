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
    const { image, setImage, samplePictureScreen, setSamplePictureScreen } =
        props;

    return (
        <Modal
            animationType="silde"
            transparent={true}
            visible={samplePictureScreen}
            onRequestClose={() => {
                setUpdateScreen(!samplePictureScreen);
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 6 }}>
                    {image.uri && (
                        <Image
                            source={image.uri}
                            style={{
                                alignItems: "center",
                            }}
                        />
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setSamplePictureScreen(!samplePictureScreen);
                        }}
                    >
                        <Text>확인</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
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
