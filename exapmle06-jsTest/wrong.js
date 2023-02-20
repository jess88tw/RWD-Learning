// --------------------------------------------
// Wrong 1
// --------------------------------------------
// console.log 是多少?
// ☑ 81
// ☒ NaN
var num = "9" * "9";
// console.log(num);

// --------------------------------------------
// Wrong 2
// --------------------------------------------
// y 的值為?
// ☑ true
// ☒ false
var y = "str" === "str";
// console.log(y);

// --------------------------------------------
// Wrong 3
// --------------------------------------------
// str 的值為?
// ☑ true
// ☒ false
var str = "1" == "3" || "1" == "1";
// console.log(str);

// 邏輯運算子
// && 只有在兩個運算元都是 True 時才會回傳 True, 否則回傳 false
// || 只有在兩個運算元有任一個是 True 時就會回傳 True, 否則回傳 false

// --------------------------------------------
// Wrong 4
// --------------------------------------------
// console.log 是多少?
// ☒ ['yellow','blue']
// ☑ ['yellow','red']
var colors = ["yellow", "blue", "red"];
colors.splice(1, 1);
// console.log(colors);

// slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var fruit1 = fruits.slice(3); // 從第 3 個元素切 [ 'Apple', 'Mango' ]
var fruit2 = fruits.slice(2, 4); // 從第 2 個開始切給到第 4 個 [ 'Lemon', 'Apple' ]
var fruit3 = fruits.slice(-3); // 倒數 3 個 [ 'Lemon', 'Apple', 'Mango' ]

// splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 2, "Feb"); // 從第 1 個開始, 刪除第 1 個之後的 2 個並插入 "Feb" [ 'Jan', 'Feb', 'June' ]

// --------------------------------------------
// Wrong 5
// --------------------------------------------
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   console.log(e.SOMETHING);
// });
// SOMETHING 應該是什麼才會顯示「當前瀏覽器窗口的 滑鼠 x 軸座標」?
// ☑ clientX
// ☒ innerX
// ☒ browserX

// 整理網頁座標 了解 screen、page、client 差異
// screen: 整個螢幕的解析度大小;
// page: 整個網頁內容長度;
// client: 瀏覽器窗口的大小;

// --------------------------------------------
// Wrong 6
// --------------------------------------------
// var btn = document.querySelector(".btn");
// btn.addEventListener("keydown", checkKey, false);
// 第三個參數所帶的布林值的用意是?
// ☒ 設定監聽事件暫時不執行
// ☒ 設定監聽事件只能執行一次
// ☑ 設定監聽事件為 capture 或 bubbling 機制

// 詳解↓
// DOM 事件傳遞機制：捕獲與冒泡 (capturing and bubbling)
// https://medium.com/itsems-frontend/javascript-event-bubbling-capturing-794cd2d01e61

// --------------------------------------------
// Wrong 7
// --------------------------------------------
// 如何用 JS 取得 「瀏覽器視窗高度」?
// ☒ window.Height
// ☒ windos.Width
// ☑ window.innerHeight

// 詳解↓
// window 物件讓你可以存取和操作瀏覽器的視窗
// https://www.fooish.com/javascript/window.html

// --------------------------------------------
// Wrong 8
// --------------------------------------------
var a = 123;
// console.log(windows.a);
// console.log 的值為?
// ☒ undefined
// ☑ 123
