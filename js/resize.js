// $( window ).resize(function() {
//         //alert('winTop');
//         //top_btn跑出消失
//             var _width = $win.width();

//             if(_width>=600){
//                             //history.go(0);
//                             //alert('winTop');
//                             //本頁重整= =
//                             window.location.replace(window.location.href);
//                             // window.location.assign(window.location.href);
//                             //上一頁
//                             //history.back();
//                             // $('.mobile_nav').hide();
//                            //$('.mobile_nav').slideToggle(0);
//                            //$('nav').slideUp(200);
  

//             }else{
//          //        $(window).scroll(
//          //              function(){
//                           //$("article").off("click")
//                           //$('.mobile_nav').show();



//             //           }
//             //      )
//             };
// });    

//resize orientationchange視窗大小改變時的變化
		//東西(手機板選單、搜尋bar)給我收起來
$(window).on("resize orientationchange",function(){

      $(".mobile_nav").slideUp();
      $(".hide_search").slideUp();
      

      
      

    }).resize();