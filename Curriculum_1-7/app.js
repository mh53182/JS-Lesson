/*global $*/

$(function (){
  $('button').on('click', function (){
    $('ul').children().css('color', 'red');
  });
});








// 以下、5章演習

// $(function (){
//   $('.box1').slideDown(3000, function (){
//     $('.box1').css({
//       'background-color': '#0000ff',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(3000);
//   });
// });



// 以下、じゃんけんプログラム

// let user_hand = prompt('じゃんけん出して');
// while ((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
//   alert('グーチョキパーのどれか出して');
//   user_hand = prompt('じゃんけん出して');
// }
// let js_hand = getJShand();
// let judge = winLose(user_hand, js_hand);

// if(user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です');
// }else {
//   alert('またチャレンジしてね。')
// }

// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3);

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   }else if(js_hand_num == 1){
//     hand_name ="チョキ";
//   }else if(js_hand_num ==2){
//     hand_name = "パー";
//   }
//   return hand_name;
// }

// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }