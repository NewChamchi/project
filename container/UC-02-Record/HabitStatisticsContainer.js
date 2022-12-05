import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    inquiryAmountAll,
    inquiryMyAmount,
    inquiryMyPeriod,
    inquiryPeriodAll,
} from "../../api/record";
import HabitStatisticsScreen from "../../component/UC-02-Record/HabitStatisticsScreen";
import { categoryListState, categoryNowState } from "../../recoil/CommonRecoil";
import { habitRecordListState } from "../../recoil/UC-02-Record";

const HabitStatisticsContainer = () => {
    const categoryList = useRecoilValue(categoryListState);
    const [categoryNow, setCategoryNow] = useRecoilState(categoryNowState);
    const [habitRecordList, setHabitRecordList] =
        useRecoilState(habitRecordListState);
    const [amountTotalList, setAmountTotalList] = useState(null);
    const [periodTotalList, setPeriodTotalList] = useState(null);
    const [amountMyIndex, setAmountMyIndex] = useState(null);
    const [periodMyIndex, setPeriodMyIndex] = useState(null);
    const [amountTenPercentIndex, setAmountTenPercentIndex] = useState(null);
    const [periodTenPercentIndex, setPeriodTenPercentIndex] = useState(null);
    const amountLabels = [
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
    ];

    const periodLabels = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
        "12월+",
    ];
    const isFocused = useIsFocused();
    // useEffect(() => {
    //     inquiryAmountAll(
    //         categoryList.find((item) => item.name == categoryNow.name).id
    //     )
    //         .then((response) => {
    //             setAmountTotalList(response.data);
    //             inquiryPeriodAll(
    //                 categoryList.find((item) => item.name == categoryNow.name)
    //                     .id
    //             )
    //                 .then((response) => {
    //                     setPeriodTotalList(response.data);
    //                     console.log(response.data.totalPeriodCount);
    //                 })
    //                 .catch((err) => console.log(`기간 통계 조회 오류 ${err}`));
    //         })
    //         .catch((err) => console.log(`정량 통계 조회 오류 ${err}`));
    // }, [categoryNow, isFocused]);

    const calculateAmountTenPercentIndex = (listData) => {
        let sumAmountCount = 0;
        listData.totalAmountCount.map((item) => (sumAmountCount += item));
        let ninePercent = sumAmountCount * 0.9;
        let accumulator = 0;
        let RIndex = 0;
        listData.totalAmountCount.map((item, index) => {
            accumulator += item;
            if (accumulator >= ninePercent) {
                RIndex = index;
                return RIndex;
            }
        });
        return RIndex;
    };

    const calculatePeriodTenPercentIndex = (listData) => {
        // 이거 위의 함수랑 합쳐서 한 개로 할 수 있는 건데 이상하게 만듬
        let sumPeriodCount = 0;
        listData.totalPeriodCount.map((item) => (sumPeriodCount += item));
        let ninePercent = sumPeriodCount * 0.9;
        let accumulator = 0;
        let RIndex = 0;
        listData.totalPeriodCount.map((item, index) => {
            accumulator += item;
            if (accumulator >= ninePercent) {
                RIndex = index;
                return RIndex;
            }
        });
        return RIndex;
    };

    const calculateMyAmountIndex = (listData, myData) => {
        let amountLabelUnit = listData.max / 10;
        console.log("amountLable" + amountLabelUnit);
        let myDataAccmulator = myData.myTotalAmount;
        console.log("myDataA" + myDataAccmulator);
        let index;
        for (index = 0; myDataAccmulator <= amountLabelUnit * index; index++) {
            console.log("index in for" + index);
        }
        return index;
    };

    const calculateMyPeriodIndex = (listData, myData) => {
        // 이것도 위 함수랑 합쳐서 하나로 만들 수 있음;
        let periodLableUnit = 1000 * 3600 * 24 * 30;
        let myDataAccmulator = myData.myTotalPeriod;
        let index;
        for (index = 0; myDataAccmulator <= periodLableUnit * index; index++) {}
        return index;
    };
    useEffect(() => {
        const getChartData = async () => {
            try {
                // console.log(
                //     categoryList.find((item) => item.name == categoryNow.name).id
                // );
                const { data: amountListData } = await inquiryAmountAll(
                    categoryList.find((item) => item.name == categoryNow.name)
                        .id
                );
                setAmountTotalList(amountListData);
                setAmountTenPercentIndex(
                    calculateAmountTenPercentIndex(amountListData)
                );

                const { data: myAmountData } = await inquiryMyAmount(
                    habitRecordList.find(
                        (item) => item.categoryName == categoryNow.name
                    ).id
                );
                setAmountMyIndex(
                    calculateMyAmountIndex(amountListData, myAmountData)
                );
                const { data: periodListData } = await inquiryPeriodAll(
                    categoryList.find((item) => item.name == categoryNow.name)
                        .id
                );
                setPeriodTotalList(periodListData);
                setPeriodTenPercentIndex(
                    calculatePeriodTenPercentIndex(periodListData)
                );

                const { data: myPeriodData } = await inquiryMyPeriod(
                    habitRecordList.find(
                        (item) => item.categoryName == categoryNow.name
                    ).id
                );
                setPeriodMyIndex(
                    calculateMyPeriodIndex(periodListData, myPeriodData)
                );
            } catch (err) {
                console.log("차트 데이터 조회 에러 발생");
                console.log(err);
                if (isFocused) {
                    Alert.alert(
                        "습관 생성 필요",
                        "습관을 생성해야만 조회가 가능합니다.",
                        [
                            {
                                text: "확인",
                                style: "cancel",
                            },
                        ]
                    );
                }
            }
        };
        getChartData();
    }, [isFocused]);

    const propDatas = {
        categoryList,
        categoryNow,
        setCategoryNow,
        amountTotalList,
        setAmountTotalList,
        periodTotalList,
        setPeriodTotalList,
        amountMyIndex,
        periodMyIndex,
        amountTenPercentIndex,
        periodTenPercentIndex,
        amountLabels,
        periodLabels,
    };
    return <HabitStatisticsScreen {...propDatas} />;
};

export default HabitStatisticsContainer;
