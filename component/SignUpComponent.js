import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { deviceHeight } from "../DeviceInfo";
import { CommonStyle } from "../style/CommonStyle";

const SignUpComponent = (props) => {
    const {
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        passwordCompare,
        setPasswordCompare,
        trySignUp,
    } = props;
    return (
        <SafeAreaView style={{ alignItems: "center", height: deviceHeight }}>
            {/* <Text style={{ fontSize: 15, paddingRight: 10 }}>이름 : </Text> */}
            <ScrollView style={{ width: "100%", height: "100%" }}>
                <View></View>
                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newName) => setName(newName)}
                    value={name}
                    placeholder="이름"
                ></TextInput>

                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    value={email}
                    keyboardType="email-address"
                    placeholder="이메일"
                ></TextInput>

                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    value={password}
                    keyboardType="password"
                    placeholder="비밀번호"
                    secureTextEntry={true}
                ></TextInput>
                <TextInput
                    style={CommonStyle.textInput}
                    onChangeText={(newPasswordCompare) =>
                        setPasswordCompare(newPasswordCompare)
                    }
                    value={passwordCompare}
                    keyboardType="password"
                    placeholder="비밀번호 확인"
                    secureTextEntry={true}
                ></TextInput>
                <View
                    style={{
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "flex-end",
                        marginTop: 250,
                    }}
                >
                    <TouchableOpacity
                        style={CommonStyle.button}
                        onPress={trySignUp}
                    >
                        <Text style={{ fontSize: 20 }}>회원 가입</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpComponent;
