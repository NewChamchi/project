import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { inquiryAmountAll, inquiryPeriodAll } from "../../api/record";
import HabitStatisticsScreen from "../../component/UC-02-Record/HabitStatisticsScreen";
import { categoryListState, categoryNowState } from "../../recoil/CommonRecoil";

const HabitStatisticsContainer = () => {
    const categoryList = useRecoilValue(categoryListState);
    const [categoryNow, setCategoryNow] = useRecoilState(categoryNowState);
    const [amountTotalList, setAmountTotalList] = useState(null);
    const [periodTotalList, setPeriodTotalList] = useState(null);
    const [amountMyIndex, setAmountMyIndex] = useState(null);
    const [periodMyIndex, setPeriodMyIndex] = useState(null);
    const isFocused = useIsFocused();
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
    }, [categoryNow, isFocused]);

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
    };
    return <HabitStatisticsScreen {...propDatas} />;
};

export default HabitStatisticsContainer;
