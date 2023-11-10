$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});


// スムーススクロール
// $(function() {
//   $('#back a').on('click',function(event){
//     $('body, html').animate({
//       scrollTop:0
//     }, 800);
//     event.preventDefault();
//   });
// });



// // スワイパー
// const swiper = new Swiper('.swiper', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });