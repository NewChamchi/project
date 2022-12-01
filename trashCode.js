// setLoading(true);
//     const body = {
//         email: email,
//         password: password,
//     };
//     try {
//         const { data: loginData, headers: loginHeaders } = await login(
//             body
//         );
//         console.log(loginData);
//         const [cookie] = loginHeaders["set-cookie"];
//         console.log(cookie);
//         client.defaults.headers.Cookie = cookie;

//         console.log("이거 안되?");
//         // try {
//         const { data: userData } = await userSelfInfo();
//         console.log(userData);
//         setUserInfo({
//             email: email,
//             password: password,
//             memberId: loginHeaders.id,
//             name: userData.name,
//             role: "ROLE_USER",
//             // role: data.role,
//         });
//         const { data: categoryListData } = await inquiryCategoryAll();
//         setCategoryList(categoryListData.content);
//         setCategoryNow(categoryListData.content[0]);
//         console.log(categoryListData);
//         // } catch (error) {
//         //     console.log(error);
//         // }
//     } catch (error) {
//         console.log(error);
//         Alert.alert(
//             "로그인 오류",
//             "이메일 혹은 비밀번호가 정확하지 않습니다.",
//             [
//                 {
//                     text: "확인",
//                     onPress: () => {},
//                     style: "cancel",
//                 },
//             ]
//         );
//     }
//     setLoading(false);
