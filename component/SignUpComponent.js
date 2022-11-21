import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const SignUpComponent = (props) => {
    const {
        navigation,
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        sendSignUpApi,
    } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, paddingRight: 10 }}>이름 : </Text>
                <TextInput
                    style={{
                        fontSize: 15,
                        borderWidth: 1,
                        width: "75%",
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
                    onChangeText={(newName) => setName(newName)}
                    value={name}
                ></TextInput>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, paddingRight: 10 }}>
                    이메일 :{" "}
                </Text>
                <TextInput
                    style={{
                        fontSize: 15,
                        borderWidth: 1,
                        width: "75%",
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    value={email}
                    keyboardType="email-address"
                ></TextInput>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    margin: 16,
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, paddingRight: 10 }}>
                    비밀번호 :{" "}
                </Text>
                <TextInput
                    style={{
                        fontSize: 15,
                        borderWidth: 1,
                        width: "75%",
                        paddingLeft: 10,
                        marginRight: 10,
                    }}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    value={password}
                    keyboardType="password"
                    secureTextEntry={true}
                ></TextInput>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <TouchableOpacity style={styles.button} onPress={sendSignUpApi}>
                    <Text>회원 가입</Text>
                </TouchableOpacity>
            </View>
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
export default SignUpComponent;
