// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, { useEffect, useState } from "react";

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
import { useRecoilState, useRecoilValue } from "recoil";
import { inquiryAmountAll, inquiryPeriodAll } from "../../api/record";
import { categoryListState, categoryNowState } from "../../recoil/CommonRecoil";
// const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false, // optional
//     barRadius: 200,
// };

// const data = [
//     {
//         name: "3일 이하",
//         count: 21500000,
//         color: "tomato",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15,
//     },
//     {
//         name: "일주일 이하",
//         count: 2800000,
//         color: "green",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15,
//     },
//     {
//         name: "한 달 이하",
//         count: 527612,
//         color: "yellow",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15,
//     },
//     {
//         name: "3개월 이하",
//         count: 8538000,
//         color: "gray",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15,
//     },
//     {
//         name: "1년 이하",
//         count: 11920000,
//         color: "blue",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15,
//     },
// ];
const LineChartComponent = (props) => {
    const { datas, myIndex } = props;

    return (
        <View>
            <LineChart
                data={{
                    labels: [
                        "0",
                        "10",
                        "20",
                        "30",
                        "40",
                        "50",
                        "60",
                        "70",
                        "80",
                        "90",
                        "100",
                    ],
                    datasets: [
                        {
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
                    decimalPlaces: 0, // optional, defaults to 2dp
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
                getDotColor={(dataPoint, dataPointIndex) => {
                    if (dataPointIndex === 4) return "tomato";
                    else return "white";
                }}
                style={{
                    margin: 10,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};
const HabitStatisticsScreen = (props) => {
    const {
        categoryList,
        categoryNow,
        setCategoryNow,
        amountTotalList,
        setAmountTotalList,
        periodTotalList,
        setPeriodTotalList,
        amountMyIndex,
        periodMyIndex,
    } = props;
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
                    {categoryList
                        ? categoryList.map((item) => (
                              <TouchableOpacity
                                  style={{ justifyContent: "center" }}
                                  onPress={() => {
                                      setCategoryNow(item);
                                  }}
                              >
                                  <Text
                                      style={{
                                          fontSize: 20,
                                          paddingHorizontal: 15,
                                      }}
                                  >
                                      {item.name}
                                  </Text>
                              </TouchableOpacity>
                          ))
                        : false}
                </ScrollView>
            </View>
            <View style={{ flex: 15, backgroundColor: "white" }}>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignSelf: "flex-end",
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.text,
                                        marginRight: 0,
                                        fontSize: 15,
                                    }}
                                >
                                    사용자의 현재 위치
                                </Text>
                                <View
                                    style={{
                                        backgroundColor: "tomato",
                                        borderRadius: 10,
                                        margin: 10,
                                        marginRight: 20,
                                        width: 20,
                                        height: 20,
                                        alignSelf: "center",
                                    }}
                                />
                            </View>
                            <Text style={styles.text}>습관 정량 통계</Text>
                            {!amountTotalList ? (
                                <LineChartComponent
                                    datas={amountTotalList}
                                    myIndex={amountMyIndex}
                                />
                            ) : (
                                false
                            )}
                            <Text style={styles.text}>습관 시간 통계</Text>
                            {!periodTotalList ? (
                                <LineChartComponent
                                    datas={periodTotalList}
                                    myIndex={periodMyIndex}
                                />
                            ) : (
                                false
                            )}
                            {/* <PieChart
                                data={data}
                                width={Dimensions.get("window").width}
                                height={220}
                                chartConfig={chartConfig}
                                accessor={"count"}
                                backgroundColor={"transparent"}
                                paddingLeft={"15"}
                                center={[0, 0]}
                                absolute
                            /> */}
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
    text: {
        margin: 10,
        fontSize: 20,
        alignSelf: "center",
    },
});
export default HabitStatisticsScreen;
