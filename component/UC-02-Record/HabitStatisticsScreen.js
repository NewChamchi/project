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
const LineChartComponent = (props) => {
    const { datas } = props;

    return (
        <View>
            <LineChart
                data={{
                    labels: [],
                    datasets: [
                        {
                            data: [1, 5, 5, 9, 15, 18, 10, 6, 5, 4],
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
                style={{
                    margin: 10,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};
const HabitStatisticsScreen = (props) => {
    const categoryList = useRecoilValue(categoryListState);
    const [categoryNow, setCategoryNow] = useRecoilState(categoryNowState);
    const [amountTotalList, setAmountTotalList] = useState(null);
    const [periodTotalList, setPeriodTotalList] = useState(null);
    useEffect(() => {
        inquiryAmountAll(
            categoryList.find((item) => item.name == categoryNow["name"]).id
        )
            .then((response) => {
                setAmountTotalList(response["data"].totalAmountCount);
                inquiryPeriodAll(
                    categoryList.find(
                        (item) => item.name == categoryNow["name"]
                    ).id
                )
                    .then((response) => {
                        setPeriodTotalList(response["data"].totalPeriodCount);
                        console.log(response["data"]);
                    })
                    .catch((err) => console.log(`기간 통계 조회 오류 ${err}`));
            })
            .catch((err) => console.log(`정량 통계 조회 오류 ${err}`));
    }, [categoryNow]);
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
                            <Text
                                style={{
                                    margin: 10,
                                    fontSize: 20,
                                }}
                            >
                                습관 정량 통계
                            </Text>
                            {amountTotalList ? (
                                <LineChartComponent datas={amountTotalList} />
                            ) : (
                                false
                            )}
                            {/* <Text
                                style={{
                                    margin: 10,
                                    fontSize: 20,
                                }}
                            >
                                습관 시간 통계
                            </Text>
                            {periodTotalList ? (
                                <LineChartComponent datas={periodTotalList} />
                            ) : (
                                false
                            )} */}
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
});
export default HabitStatisticsScreen;
