import { Test } from "../scripts/test.ts";
import { reloadOnResized } from "../scripts/utility.ts";
import "../scripts/jquery-test.js";

Test();
reloadOnResized();

// ユーザー入力を文字列として受け取る
// const input = window.prompt("数字を入力してください", "42");
// // 文字列を数値に変換する
// const num = Number(input);
// console.log(typeof num); // => "number"
// console.log(num); // 入力された文字列を数値に変換したもの

const clickmeArr = document.querySelectorAll('.clickme');

clickmeArr.forEach((elm, index)=>{
  elm.addEventListener('click',(event)=>{
    // event.preventDefault();
    const evt = event.target;
    console.log(`${index}番目のイベントターゲットは${evt}です`);
    /**
     * a タグだと イベントターゲットは href の中身になり、相対パスで書いてあっても絶対パスで取得される
     *  a タグの場合は href の値に javascript: void(0) を入れる。 void(0)はundefinedを返してくれる
     * 上記を利用する理由が特にない場合は buttonタグを利用しよう。
     * spanだとバブリングせずにずっとspanをさしている
     */
  })
})

// では親要素である、liにもクリックイベントがあったらどうなる？

const liArr = document.querySelectorAll('.li');

liArr.forEach((elm, index)=>{
  elm.addEventListener('click',(event)=>{
    // event.preventDefault();
    event.stopPropagation();
    const evt = event.target;
    console.log(`liタグの${index}番目のイベントターゲットは${evt}です`);
    // イベントが取られないね
    // ボーダーを追加シてみよう
    // ボーダーをクリックすると、liのほうのイベントが取られる
    // イマイチわかりにくいので useCaptureを使って伝播をみてみる
  })
})

window.addEventListener( "DOMContentLoaded" , ()=> {
  const click = e =>{
    e.stopPropagation(); // これを入れると useCapture が false の通知が来なくなる？
    console.log( `click:currentTarget[${ e.currentTarget.id}] target[${ e.target.id}] phase[${ e.eventPhase}]` );
}
document.getElementById("div3").addEventListener("click",click, true);
document.getElementById("div2").addEventListener("click",click, true); // stopPropagation を利用して、親も子も useCapture すると、先に親が通知して、子への伝播をブロックできる
document.getElementById("div1").addEventListener("click",click, true);
});