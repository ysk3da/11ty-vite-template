import { Test } from "../scripts/test.ts";
import { reloadOnResized } from "../scripts/utility.ts";
import "../scripts/jquery-test.js";

Test();
reloadOnResized();

// ユーザー入力を文字列として受け取る
const input = window.prompt("数字を入力してください", "42");
// 文字列を数値に変換する
const num = Number(input);
console.log(typeof num); // => "number"
console.log(num); // 入力された文字列を数値に変換したもの