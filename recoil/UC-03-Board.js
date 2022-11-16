import { atom } from "recoil";

export const postListState = atom({
    key: "postListState",
    default: [
        {
            information: {
                category: "게임",
                title: "테스트1",
                nickname: "아무개",
                views: 5,
                recommended: ["1", "2", "3"],
            },
            contents: "테스트2",
            comment: [
                { nickname: "아무개", contents: "개추 ㅋㅋ" },
                { nickname: "홍길동", contents: "잉 기모링" },
            ],
        },
        {
            information: {
                category: "담배",
                title: "테스트1",
                nickname: "아무개",
                views: 3,
                recommended: ["1", "2"],
            },
            contents: "테스트2",
            comment: [
                { nickname: "아무개", contents: "개추 ㅋㅋ" },
                { nickname: "홍길동", contents: "잉 기모링" },
            ],
        },
        {
            information: {
                category: "술",
                title: "테스트1",
                nickname: "아무개",
                views: 5,
                recommended: ["1", "2", "3"],
            },
            contents: "테스트2",
            comment: [
                { nickname: "아무개", contents: "개추 ㅋㅋ" },
                { nickname: "홍길동", contents: "잉 기모링" },
            ],
        },
        {
            information: {
                category: "운동",
                title: "테스트1",
                nickname: "아무개",
                views: 7,
                recommended: ["1", "2", "3", "4"],
            },
            contents: "테스트2",
            comment: [
                { nickname: "아무개", contents: "개추 ㅋㅋ" },
                { nickname: "홍길동", contents: "잉 기모링" },
            ],
        },
    ],
});

export const postNowState = atom({
    key: "postNowState",
    default: {},
});
