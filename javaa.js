// string data type
// let names = "Abbos";
// let b = names.slice(1, 4);
// console.log(names.length);
// console.log(b);
// toLowerCase() text ichidagi katta harflarni kichikiga aylantirib beradi
// let str = "This Is Just Text";
// // toUpperCase() harflarni kattasiga ogirib beradi
// console.log(str.toUpperCase());
// indexOf-string ichida  malum harfning  tartib raqamini olish uchun ishlatiladi
// let str = "Salom";
// let s = str.indexOf("l");
// console.log(s);
// tyeOf()-malumotlarni qaysii data typega kirishini aniqlab beradi
// function fff() {}
// let a;
// console.log(typeof a);
// let str = 12;
// let num = "23";
// // let r = +num;
// let r = Number(num);
// let t = String(str);
// console.log(typeof t);
//
// for
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
//  string tipidagi numlar beriladi uning raqamlari yigindisi topilsin
// let num = "123452";
// console.log(typeof num[0]);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + (+num[i])
// }
// let num = "22";
// console.log(typeof num[0]);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum  = sum + (+num[i])
// }
// console.log(sum)//

// let num = "33"
// console.log(typeof[6]);
// let sum =6;
// for (let i = 6; i < num.length; i++) { sum = sum + (+num[i]) 
// }
// console.log(sum);
// let arr =[15, 23, 43, 25, 4];
// console.log(arr);
// arr.push(6)
// console.log(arr);



// let arr =["olma",8, "behi",true, "limon",false, "olcha", "olcha","olxori", "annanas", 12]
// for (let i = 0; i <arr.length; [i][0] == "o") {
//     arr.splice(i, 1);
//     console.log(arr[i]);
// } 

let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        arr2.push(arr[i]);
    }
}
arr2.sort((a, b) => b - a);
console.log(arr2);