// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";

//import React Native chart Kit for different kind of Chart
import { LineChart, ProgressChart } from "react-native-chart-kit";

// const MyBezierLineChart = () => {
//     return (
//         <>
//             <LineChart
//                 data={{
//                     labels: [],
//                     datasets: [
//                         {
//                             data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//                         },
//                     ],
//                 }}
//                 width={Dimensions.get("window").width - 16} // from react-native
//                 height={220}
//                 yAxisLabel={"Rs"}
//                 chartConfig={{
//                     backgroundColor: "#1cc910",
//                     backgroundGradientFrom: "#eff3ff",
//                     backgroundGradientTo: "#efefef",
//                     decimalPlaces: 2, // optional, defaults to 2dp
//                     color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
//                     style: {
//                         borderRadius: 16,
//                     },
//                 }}
//                 bezier
//                 style={{
//                     marginVertical: 8,
//                     borderRadius: 16,
//                 }}
//             />
//         </>
//     );
// };

const MyLineChart = () => {
    return (
        <>
            <Text style={styles.header}>차트1</Text>
            <LineChart
                data={{
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};

const MyProgressChart = () => {
    return (
        <>
            <Text style={styles.header}>차트3</Text>
            <ProgressChart
                data={[0.4, 0.6, 0.8]}
                width={Dimensions.get("window").width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};

const CreateHabitRecordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                        paddingHorizontal: 10,
                        backgroundColor: "#DFDFDF",
                    }}
                >
                    대분류 선택 :
                </Text>
                <ScrollView
                    horizontal={true}
                    style={{
                        flex: 1,
                        backgroundColor: "#DFDFDF",
                    }}
                >
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            게임
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            담배
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            술
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            운동
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            책
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>
                            기타
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 15, backgroundColor: "white" }}>
                <ScrollView>
                    <Text style={styles.header}>차트1</Text>
                    <View style={styles.container}>
                        <View>
                            {/*Example of Bezier LineChart*/}
                            {/* <MyBezierLineChart /> */}
                            {/*Example of LineChart*/}
                            <MyLineChart />
                            {/*Example of Progress Chart*/}
                            <MyProgressChart />
                            {/*Example of Bar Chart*/}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 10,
    },
    header: {
        textAlign: "center",
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});
export default CreateHabitRecordScreen;
