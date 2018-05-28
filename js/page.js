$(function(){
            //Q&A打開關起來
            $('.qa_div_all .qa_div').click(
                 function(){      
                     var NOW1=$(this).index();  
                      $(".qa_div p:nth-child(2)").eq(NOW1).slideToggle(800);
                      $(".qa_div p:nth-child(2)").eq(NOW1).parent().siblings().find('p:nth-child(2)').slideUp(800);
                      $(".qa_div p:nth-child(2)").eq(NOW1).parent().addClass('faq_looking');
                      $(".qa_div p:nth-child(2)").eq(NOW1).parent().siblings().removeClass('faq_looking');
                 }
             );

            //商品內容頁小圖清單切換大圖
            $(".show_box img").eq(0).fadeIn(0).siblings().fadeOut(0);
            $('.list_box img').mouseover(
                   function(){  
                        var NOW=$(this).index();        
                        $(".show_box img").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                        $('.list_box img').eq(NOW).addClass('touching');
                        $('.list_box img').eq(NOW).siblings().removeClass('touching');
                   }
            );
            // $('.list_box img').mouseleave(
            //       function(){
                        
            //       }
            // );
});


$(function(){
        //top_btn跑出消失
         var $win = $(window);
             _width = $win.width();
             //menuTop = $('.top_btn').offset().top;
             winTop = $(window).scrollTop();             
                        
               //alert(winTop);
         //   //測高度
         //    // $('.series_banncontact_nav(){
         //    //             alert(winTop);
         //    //         }  
         //    // )
            if(_width>=600){
                $(window).scroll(
                      function(){
                          winTop = $(window).scrollTop();
                          if(winTop >= 100)
                            {
                              $('.top_btn').addClass('appear');
                              $('.m_top_btn').removeClass('appear');
                            }
                          else{$('.top_btn').removeClass('appear');}    
                      }
                 )
            }else{
                $(window).scroll(
                      function(){
                          winTop = $(window).scrollTop();
                          if(winTop >= 100)
                            {
                              $('.m_top_btn').addClass('appear');
                              $('.top_btn').removeClass('appear');
                            }
                          else{$('.m_top_btn').removeClass('appear');}    
                      }
                 )
            };






});

$( window ).resize(function() {
  
        //top_btn跑出消失
         var $win = $(window);
             _width = $win.width();
             winTop = $(window).scrollTop();
             

            if(_width>=600){
                $(window).scroll(
                      function(){
                          winTop = $(window).scrollTop();
                          if(winTop >= 100)
                            {
                              $('.top_btn').addClass('appear');
                              $('.m_top_btn').removeClass('appear');
                            }
                          else{$('.top_btn').removeClass('appear');}    
                      }
                 )
            }else{
                $(window).scroll(
                      function(){
                          winTop = $(window).scrollTop();
                          if(winTop >= 100)
                            {
                              $('.m_top_btn').addClass('appear');
                              $('.top_btn').removeClass('appear');
                            }
                          else{$('.m_top_btn').removeClass('appear');}    
                      }
                 )
            };
});      