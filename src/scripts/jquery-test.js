import $ from 'jquery';

console.log('use jquery');

jqueryTestTunc();
function jqueryTestTunc() {
  const targetElement = $('#jquery-elm');
  // jQueryの場合は要素のlengthで判定する
  if(targetElement.length > 0){
    targetElement.append('Jquery appended this text!');
  } else {
    console.log('targetElement is missing.');
  }
}