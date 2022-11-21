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
import { LineChart, PieChart } from "react-native-chart-kit";
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    barRadius: 200,
};

const data = [
    {
        name: "3일 이하",
        count: 21500000,
        color: "tomato",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "일주일 이하",
        count: 2800000,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "한 달 이하",
        count: 527612,
        color: "yellow",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "3개월 이하",
        count: 8538000,
        color: "gray",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "1년 이하",
        count: 11920000,
        color: "blue",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
];
const LineChartComponent = () => {
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: [
                        "1주",
                        "2주",
                        "3주",
                        "4주",
                        "5주",
                        "6주",
                        "7주",
                        "8주",
                        "9주",
                        "10주",
                    ],
                    datasets: [
                        {
                            data: [
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="명"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
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
                    <View style={styles.container}>
                        <View>
                            <LineChartComponent />
                            <PieChart
                                data={data}
                                width={Dimensions.get("window").width}
                                height={220}
                                chartConfig={chartConfig}
                                accessor={"count"}
                                backgroundColor={"transparent"}
                                paddingLeft={"15"}
                                center={[0, 0]}
                                absolute
                            />
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
        height: 1000,
        backgroundColor: "white",
        justifyContent: "flex-start",
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
