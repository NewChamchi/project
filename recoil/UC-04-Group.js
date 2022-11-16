import { atom } from "recoil";
import { nowDate } from "../container/CommonContainer";

export const groupListState = atom({
    key: "groupListState",
    defalut: [
        {
            information: {
                category: "게임",
                title: "타이틀",
                owner: "아무개",
                fullCount: 200,
            },
            member: [
                {
                    nickname: "홍길동",
                    email: "1",
                    startTime: nowDate(),
                },

                {
                    nickname: "임꺽정",
                    email: "2",
                    startTime: nowDate(),
                },

                {
                    nickname: "이순신",
                    email: "3",
                    startTime: nowDate(),
                },
            ],
        },
    ],
});
