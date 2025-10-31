// // loop Dasgal #1
// // 1
// // let text = "";
// // const n = 1;
// // for (let index = 1; index <= n; index++) {
// //   console.log("Pinecone");
// // }
// // 2
// // let text2 = "";
// // const p = 10;
// // for (let index = 1; index <= p; index++) {
// //   console.log("Pinecone" + index);
// // }
// //3 Pinecone гэж n удаа хэвлэ.
// // let text3 = "";
// // const n = 19;
// // for (let index = 1; index <= n; index++) {
// //   console.log("Pinecone" + index);
// // }
// //  20 хүртэлх сондгой тоонуудыг хэвлэ
// // for (let i = 1; i < 20; i += 2) {
// //   console.log("Pinecone" + i);
// // }
// // • 40 хүртэлх тэгш тоонуудыг хэвлэ.
// // for (let i = 0; i < 40; i += 2) {
// //   console.log(i);
// // }
// // • 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// // let um = 0;
// // for (let i = 0; i < 20; i += 2) {
// //   um = um + i;
// // }
// // console.log(um);

// // • 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.
// // let pum = 0;
// // for (let i = 1; i < 40; i += 2) {
// //   pum = pum + i;
// // }
// // console.log(pum);
// // // • Өгөгдсөн n тооны нийлбэрийг ол.
// // let mum = 0;
// // const m = 22;
// // for (let i = 1; i <= m; i++) {
// //   //   console.log(i);
// //   mum = mum + i;
// // }
// // console.log(mum);
// // • 100 гийн тоог n удаа нэм. (Example: 10, Result:1000)
// // const k = 20;
// // let sum = 0;

// // for (let i = 0; i < k; i++) {
// //   sum += 100;
// // }
// // sum += 100
// // sum = sum + 100
// // sum = 100 + 100
// // sum = 200 + 100
// // sum =300
// // console.log(sum);
// // 125 хүртэлх тооны үржвэрийг ол.
// // const l = 125;
// // let multi = 1;

// // for (let i = 1; i <= l; i++) {
// //   multi = multi * i;
// // }

// // console.log(multi);
// // • 125 хүртэлх сондгой тооны үржвэрийг ол.
// // const op = 125;
// // let multi2 = 1;

// // for (let i = 1; i <= op; i += 2) {
// //   multi2 = multi2 * i;
// // }

// // console.log(multi2);
// // // • n тооны factorial ийг ол.
// // const op2 = 4;
// // let multi3 = 1;

// // for (let i = 1; i <= op2; i++) {
// //   multi3 = multi3 * i;
// // }

// // console.log(multi3);
// // 10 аас 1 рүү буурах дарааллаар хэвлэ.
// // for (let i = 10; i >= 1; i -= 1) {
// //   console.log(i);
// // }
// // Өгөгдсөн n тооны хүрдийг харуул.
// let value = 8;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${value} * ${i} = ${value * i}`);
// }
// // Example:
// // 3*1=3
// // 3*2=6
// // 3*3=9
// // 3*4=12
// // 3*5=15
// // 3*6=18
// // 3*7=21
// // 3*8=24
// // 3*9=27
// // 3*10=30
// // 2 ийн n зэргийг ол. (Example: 5. Result:32)
// let hariu = 1;
// for (let i = 1; i <= 4; i++) {
//   hariu = hariu * 2;
// }
// console.log(hariu);
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
// const too = "123";
// let rum = 1;
// for (let i = 1; i <= 1; i++) {
//   console.log(Number(too[0]) + Number(too[1]) + Number(too[2]));
// }
// // 987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6
// const too2 = "987654";
// let counter = 0;

// for (let i = 1; i <= too2.length; i++) {
//   counter++;
// }
// console.log(counter);

// // Өгөгдёөн тооны квадратыг ол . Example: 5 . Result: 25
// let hariu2 = 1;
// for (let i = 1; i <= 2; i++) {
//   hariu2 = hariu2 * 5;
// }
// console.log(hariu2);
// Эхний N  тооны кубын нийлбэр. Example: 4 . Result:100
// let hariu3 = 0;
// for (let i = 1; i <= 4; i++) {
//   hariu3 = hariu3 + i ** 3;
// }
// console.log(hariu3);
// // 1–30 хүртэлх тоонууд дундаас 2 болон 3-т зэрэг хуваагддаг тоонуудыг хэвлэх
// const number = 30;
// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }
// Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх
// const tooyu = 15;
// let tiimee = 1;
// for (let i = 1; i <= tiimee; i++) {
//   if (tooyu % 5 === 0 && tooyu % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (numb % 5 === 0) {
//     console.log("Buzz");
//   } else if (numb % 3 === 0) {
//     console.log("Fizz");
//   }
// }
// 1–100 хүртэлх 7-д хуваагддаггүй тоонуудыг хэвлэх
// const dal = 100;
// for (let i = 1; i <= dal; i++) {
//   if (i % 7 !== 0) {
//     console.log(i);
//   }
// }
// 1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох
// const fifthy = 50;
// let urjver = 5;
// for (let i = 1; i <= fifthy; i += 2) {
//   if (urjver % 5 === 0) {
//     console.log(`${urjver} * ${i} = ${urjver * i}`);
//   }
// }
// 1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.
// let summ = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i >= 50 && i <= 60) {
//     summ = summ + i;
//   }
// }
// console.log(summ, "niilber 50-60");
// 1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол.

// for (let n = 2; n <= 20; n++) {
//   let primetoo = true;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       primetoo = false;
//       break;
//     }
//   }
//   if (primetoo) {
//     console.log(n);
//   }
// }
// 1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол.
// let hariu4 = 0;
// const gg = 50;
// for (let i = 1; i <= gg; i += 2) {
//   hariu4 = hariu4 + i ** 3;
// }
// console.log(hariu4);
// 1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
// amgaa bagsh bodlogo 1
// 1-ээс 10 хүртэлх тооны квадратуудыг хэвлэ #1
// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 2);
// }
// // Өөрийн нэрийг бичиж эсрэгээр нь хэвлэ. Жишээ нь: Сүх -> Хүс
// const namer = "Telmuun";
// let reversed = "";
// for (let i = namer.length - 1; i >= 0; i--) {
//   reversed = reversed + namer[i];
// }
// console.log(reversed);
// // Өгөгдсөн жил зуны олимпийн жил мөн эсэхийг ол. 1896 онд эхэлсэн.
// // const year = 2024;
// // if ((year - 1896) % 4 === 0) {
// //   console.log("Зуны олимпийн жил мөн");
// // } else {
// //   console.log("Зуны олимпийн жил биш");
// // }

// // Өгөгдсөн жил өвлийн олимпийн жил мөн эсэхийг ол. 1924, 1994 онд эхэлсэн
// const year2 = 2014;

// if (year2 >= 1924) {
//   if (
//     (year2 <= 1992 && (year2 - 1992) % 4 === 0) ||
//     (year2 >= 1994 && (year2 - 1994) % 4 === 0)
//   ) {
//     console.log("олимпийн жил мөн");
//   } else {
//     console.log("олимпийн жил биш");
//   }
// }

// Хэрэглэгчээс сарын дугаар (1-12) аваад, улирал хэвлэнэ:
// 12, 1, 2: "Өвөл"
// 3, 4, 5: "Хавар"
// 6, 7, 8: "Зун"
// 9, 10, 11: "Намар"
// const month = 1;

// if (month === 12 || month === 1 || month === 2) {
//   console.log("uvul");
// } else if (month === 3 || month === 4 || month === 5) {
//   console.log("havar");
// } else if (month === 6 || month === 7 || month === 8) {
//   console.log("zun");
// } else if (month === 9 || month === 10 || month === 11) {
//   console.log("namar");
// } else {
//   console.log(1);
// // }
// // 6. Хэрэглэгчээс шатахууны төрлийг (92, 95, D) болон литр авах бөгөөд үнийг тооцно:
// // 	•	92: 2500₮/литр
// // 	•	95: 3000₮/литр
// // 	•	D: 2200₮/литр
// const fuels = "D";
// const litter = 22;

// if (fuels === "92") {
//   console.log("turul", fuels, "une", litter * 2500);
// } else if (fuels === "95") {
//   console.log("turul", fuels, "une", litter * 3000);
// } else if (fuels === "D") {
//   console.log("turul", fuels, "une", litter * 2200);
// }

// 7. yearOfBirth гэсэн хувьсагчид гараас төрсөн оныг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"
// 1 < old <= 3 үед "Toddler"
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 	•		•	21 < old үед "Adult"
