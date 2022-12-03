import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const CategoryEditScreen = (props) => {
    const { categoryList } = props;
    <SafeAreaView style={{ flex: 1 }}>
        <View
            style={{
                flex: 3,
                padding: 10,
                margin: 16,
            }}
        >
            {categoryList
                ? categoryList.map((item) => (
                      <Text
                          style={{
                              padding: 10,
                              width: 300,
                              margin: 16,
                              fontSize: 25,
                          }}
                      >
                          {item.name}
                      </Text>
                  ))
                : false}
        </View>
        <View style={{ flex: 4, justifyContent: "flex-start" }}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("UpdateUser")}
                >
                    <Text>나의 정보 수정</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => logoutAlert(sendLogoutApi)}
                >
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            </View>

            {userInfo.role != "ROLE_ADMIN" ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => WithdrawAlert(sendWithdrawApi)}
                    >
                        <Text>회원 탈퇴</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                false
            )}
            {userInfo.role == "ROLE_ADMIN" ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("UserAllInfo")}
                    >
                        <Text>모든 유저 정보</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                false
            )}
        </View>
    </SafeAreaView>;
    return;
};

export default CategoryEditScreen;
