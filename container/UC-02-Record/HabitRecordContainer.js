import { useRecoilValue, useSetRecoilState } from "recoil";
import HabitRecordScreen from "../../component/UC-02-Record/HabitRecordScreen";
import {
    habitRecordItemState,
    habitRecordListState,
} from "../../recoil/UC-02-Record";
const HabitRecordContainer = ({ navigation }) => {
    const habitRecordList = useRecoilValue(habitRecordListState);
    const setHabitRecordList = useSetRecoilState(habitRecordListState);
    const propDatas = {
        navigation,
        habitRecordList,
        setHabitRecordList,
    };
    return <HabitRecordScreen {...propDatas} />;
};

export default HabitRecordContainer;
