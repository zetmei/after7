//rwd全size共用
$(function(){
    //取消連結虛線
        $("a").focus(function(){
          $(this).blur();
        }); 
      //preload圖片
        var images = new Array()
        function preload() {
          for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
          }
        }
        preload(
          "images/all/nav04.png",
          "images/all/nav05.png"

        )

    //nice scroll卷軸
     $("html").niceScroll({cursorcolor:"#454545",cursorborder :"0",cursoropacitymax:0.5,zindex:999999}); 
 

    //至頂按鈕topBtn
      var winTop = $(window).scrollTop();

      $('.top_btn').on('click', goToTop);  
      function goToTop(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 0
        }, 1000,'linear');
      }
       $('.m_top_btn').on('click', goToTop);  
      function goToTop(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 0
        }, 1000,'linear');
      }


      //選單內品牌LOGO換圖
      //服飾
      $(".brand_box1_img01 img").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".brand_box1_img01 img").eq(0).parent().siblings().children().fadeOut(0);
      $('.brand_box1_li01 li').mouseover(
             function(){  
                  var NOW=$(this).index();        
                  $(".brand_box1_img01 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box1_img01 img").parent().siblings().children().fadeOut(0);
             }
      );
      $('.brand_box1_li02 li').mouseover(
             function(){  
                  var NOW=$(this).index();          
                  $(".brand_box1_img02 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box1_img02 img").parent().siblings().children().fadeOut(0);
             }
      );
      //配件
      $(".brand_box2_img01 img").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".brand_box2_img01 img").eq(0).parent().siblings().children().fadeOut(0);
      $('.brand_box2_li01 li').mouseover(
             function(){  
                  var NOW=$(this).index();        
                  $(".brand_box2_img01 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box2_img01 img").parent().siblings().children().fadeOut(0);
             }
      );
      $('.brand_box2_li02 li').mouseover(
             function(){  
                  var NOW=$(this).index();          
                  $(".brand_box2_img02 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box2_img02 img").parent().siblings().children().fadeOut(0);
             }
      );
      //化妝品
      $(".brand_box3_img01 img").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".brand_box3_img01 img").eq(0).parent().siblings().children().fadeOut(0);
      $('.brand_box3_li01 li').mouseover(
             function(){  
                  var NOW=$(this).index();        
                  $(".brand_box3_img01 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box3_img01 img").parent().siblings().children().fadeOut(0);
             }
      );
      $('.brand_box3_li02 li').mouseover(
             function(){  
                  var NOW=$(this).index();          
                  $(".brand_box3_img02 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box3_img02 img").parent().siblings().children().fadeOut(0);
             }
      );
      //食物
      $(".brand_box4_img01 img").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".brand_box4_img01 img").eq(0).parent().siblings().children().fadeOut(0);
      $('.brand_box4_li01 li').mouseover(
             function(){  
                  var NOW=$(this).index();        
                  $(".brand_box4_img01 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box4_img01 img").parent().siblings().children().fadeOut(0);
             }
      );
      $('.brand_box4_li02 li').mouseover(
             function(){  
                  var NOW=$(this).index();          
                  $(".brand_box4_img02 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box4_img02 img").parent().siblings().children().fadeOut(0);
             }
      );
      //其他
      $(".brand_box5_img01 img").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".brand_box5_img01 img").eq(0).parent().siblings().children().fadeOut(0);
      $('.brand_box5_li01 li').mouseover(
             function(){  
                  var NOW=$(this).index();        
                  $(".brand_box5_img01 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box5_img01 img").parent().siblings().children().fadeOut(0);
             }
      );
      $('.brand_box5_li02 li').mouseover(
             function(){  
                  var NOW=$(this).index();          
                  $(".brand_box5_img02 img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  $(".brand_box5_img02 img").parent().siblings().children().fadeOut(0);
             }
      );




     //判定IE8
     $(function(){
     var WHAT = navigator.userAgent;
     if(WHAT.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0|MSIE 8.0)/)){
      // alert("123")
     window.location="update.html";
     }
    });


});


//document.ready(noresize)
$(function(){

    //手機版主選單點擊
    $('.m_list').click(
            function(){
                $('.mobile_nav').stop().slideToggle(300);
            }  
    );
    //電腦版搜尋點擊 滑入
    $('.side_search').click(
            function(){
                  $('.hide_search').css({ 'display': 'block' });
                  $('.hide_search').stop().animate({right: "2%"},1200);
                   return false;
            }  
    );
           //點header 滑出
           $('.header').click(
                    function(){
                         $('.hide_search').stop().animate({right:"-20%"},1200)
                         .css({ 'display': 'none' });
                          //return false;
                    }  
            );
           //防止使用搜尋bar 滑出
            $('.hide_search').click(
                    function(){
                           return false;
                    }  
            );
            //aaaa連結到search頁面
            $('.hide_search_bar a').click(
                    function(){
                           location.href = "search.html";
                           // return false;
                    }  
            );
        //手機版選單 捲動上滑
        $(window).scroll(function(){
                
                $(".mobile_nav").slideUp(300);
        });
//浮動購物車出現
          // $('.side_bag').mouseover(function(){         
          //       $('.cart_detail').slideDown(0);
          // });
          // $('.cart_detail').mouseleave(function(){
          //       $('.cart_detail').slideUp(300);
          // });
//浮動選單出現//0803編修
      var $win = $(window);
          _width = $win.width();
          
      if(_width>=1000){       
          $('.nav li:nth-child(3)').click(function(){
                $('.float_nav01').slideToggle(300);
                $('.float_nav02').slideUp(0);
                $('.float_nav03').slideUp(0);
                $('.float_nav04').slideUp(0);
                $('.float_nav05').slideUp(0);

          });
          $('.nav li:nth-child(4)').click(function(){
                $('.float_nav02').slideToggle(300);
                $('.float_nav01').slideUp(0);
                $('.float_nav03').slideUp(0);
                $('.float_nav04').slideUp(0);
                $('.float_nav05').slideUp(0);
          });
           $('.nav li:nth-child(5)').click(function(){
                $('.float_nav03').slideToggle(300);
                $('.float_nav01').slideUp(0);
                $('.float_nav02').slideUp(0);
                $('.float_nav04').slideUp(0);
                $('.float_nav05').slideUp(0);
          });
          $('.nav li:nth-child(6)').click(function(){
                $('.float_nav04').slideToggle(300);
                $('.float_nav01').slideUp(0);
                $('.float_nav02').slideUp(0);
                $('.float_nav03').slideUp(0);
                $('.float_nav05').slideUp(0);
          });
          $('.nav li:nth-child(7)').click(function(){
                $('.float_nav05').slideToggle(300);
                $('.float_nav01').slideUp(0);
                $('.float_nav02').slideUp(0);
                $('.float_nav03').slideUp(0);
                $('.float_nav04').slideUp(0);
          });
           $('.nav li:nth-child(1)').click(function(){
                $('.float_nav_in').slideUp(300);
          });
          $('.nav li:nth-child(8)').click(function(){
                $('.float_nav_in').slideUp(300);
          });
           $('.nav li:nth-child(2)').click(function(){
                $('.float_nav_in').slideUp(300);
          });
      //次選單消失
          $('.float_nav_in').mouseleave(function(){
                $('.float_nav_in').slideUp(300);
          });
          $('.logo').click(function(){
                $('.float_nav_in').slideUp(300);
          });
          $(window).scroll(function(){
                $(".float_nav01").slideUp(300);
                $(".float_nav02").slideUp(300);
                $(".float_nav03").slideUp(300);
                $(".float_nav04").slideUp(300);
                $(".float_nav05").slideUp(300);
                //手機板一起滑上去
                $(".mobile_nav").slideUp(300);
        });

      }else{

          $(".float_nav01").slideUp(300);
          $(".float_nav02").slideUp(300);
          $(".float_nav03").slideUp(300);
          $(".float_nav04").slideUp(300);
          $(".float_nav05").slideUp(300);

      };   


     //錨點下滑(2個size)
      if(_width>=600){


                //點擊聯絡頁下滑
                $('#contact_pageBtn').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-380
                        }, 2000);
                     
                        return false;
                });

                $('#contact_pageBtn_footer').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-380
                        }, 2000);
                     
                        return false;
                });
                
                $('#contact_pageBtn_mobile').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-380
                        }, 2000);
                     
                        return false;
                });
                
                //錨點  滑動
                //他頁切換錨點用(本頁無法、firefox、IE無法)
                $(function( ) {

                  if( window.location.hash ) { // just in case there is no hash
                    $(document.body).animate({
                      'scrollTop':   $( window.location.hash ).offset().top-380
                    }, 1000);
                  }
                });






         }else{
                 

                //點擊聯絡頁下滑
                $('#contact_pageBtn').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-120
                        }, 2000);
                     
                        return false;
                });

                $('#contact_pageBtn_footer').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-120
                        }, 2000);
                     
                        return false;
                });
                
                $('#contact_pageBtn_mobile').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#contact_page').offset().top-120
                        }, 2000);
                     
                        return false;
                });
                
                //錨點  滑動
                $(function( ) {

                  if( window.location.hash ) { // just in case there is no hash
                    $(document.body).animate({
                      'scrollTop':   $( window.location.hash ).offset().top-120
                    }, 1000);
                  }
                });

 


        };  
 

//結束
});


//0622新增
//footer換英文字

var $wind = $(window);
$(document).ready(function(){

   
      _width = $wind.width();
          
      if(_width>=1000){       
         
          $(".fnav01").mouseover(function(){$(".fnav01").text("關於我們")})
          $(".fnav01").mouseout(function(){$(".fnav01").text("AFTER7")})

          $(".fnav02").mouseover(function(){$(".fnav02").text("最新消息")})
          $(".fnav02").mouseout(function(){$(".fnav02").text("NEWS")})

          $(".fnav03").mouseover(function(){$(".fnav03").text("常見問題")})
          $(".fnav03").mouseout(function(){$(".fnav03").text("FAQ")})

          $(".fnav04").mouseover(function(){$(".fnav04").text("聯絡我們")})
          $(".fnav04").mouseout(function(){$(".fnav04").text("CONTACT")})

          $(".fnav05").mouseover(function(){$(".fnav05").text(" 會員註冊")})
          $(".fnav05").mouseout(function(){$(".fnav05").text("SIGN UP")})

          $(".fnav06").mouseover(function(){$(".fnav06").text("會員登入")})
          $(".fnav06").mouseout(function(){$(".fnav06").text("LOGIN")})

          $(".fnav07").mouseover(function(){$(".fnav07").text("會員中心")})
          $(".fnav07").mouseout(function(){$(".fnav07").text("MEMBER")})
          
          $(".fnav08").mouseover(function(){$(".fnav08").text("購物袋")})
          $(".fnav08").mouseout(function(){$(".fnav08").text("SHOPING BAG")})
          
       }
})
