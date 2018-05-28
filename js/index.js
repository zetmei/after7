var $win = $(window);
	
$(function(){
	
	
//幻燈片兩種尺寸圖片
	$(".slider li img").hisrc();

//幻燈片兩段輪播
	var _width = $win.width();

	if(_width<=640){
		
		$(".slider").carouFredSel({
				responsive	: true,
				scroll  : {
					duration:400,
					timeoutDuration: 3000
				},
				items		: {
					visible		: 1,
					height		: "38.388%"
				},
				prev : ".prev",
				next : ".next",
				swipe: {
						onTouch: true
				},
				pagination  : ".pagination",
		});
				

	}else{
		
		$(".slider").carouFredSel({
			responsive	: true,
			scroll  : {
				duration:1000,
				timeoutDuration: 3000
				//fx:"fade",
			},
			items		: {
				visible		: 1,
				height		: "38.388%"
			},
			prev : ".prev",
			next : ".next",
			swipe: {
					onTouch: true
			},
			pagination  : ".pagination",
		});
				
	};
	 //news slider
               $("#foo4").carouFredSel({
            auto : false,
            responsive  : true,
            items   : {
              width   : 200,
              visible   : {
                min     : 2,
                max     : 2
              },
              height    : "100%"
            },
          swipe: {
          onTouch: true
           },
          prev : ".m_prev",
          next : ".m_next"
          });
	
		
})