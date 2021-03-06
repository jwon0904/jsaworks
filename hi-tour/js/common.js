$(document).ready( function() {
	//fadeOut() 시간 설정하기
	function goHide(){
		for(var i = 1; i <=4; i++){
			$(".gnb_depth2_"+ i).fadeOut("fast");
		}
	}


	//상단 메뉴 마우스오버, 탭 클리그 코드
	$(".openAll1").mouseover(function(){
		//서브메뉴 나타나기
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
	}).mouseout(function(){
		// $(".gnb_depth2_1").fadeOut("fast");
		setTimeout(goHide, 500); //0.5초
	}).blur(function(){
		setTimeout(goHide, 500);
	});

	$(".openAll2").mouseover(function(){
		//서브메뉴 나타나기
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
	}).mouseout(function(){
		// $(".gnb_depth2_2").fadeOut("fast");
		setTimeout(goHide, 500); //0.5초
	}).blur(function(){
		setTimeout(goHide, 500);
	});
	
	$(".openAll3").mouseover(function(){
		//서브메뉴 나타나기
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
	}).mouseout(function(){
		// $(".gnb_depth2_3").fadeOut("fast");
		setTimeout(goHide, 500); //0.5초
	}).blur(function(){
		setTimeout(goHide, 500);
	});

	$(".openAll4").mouseover(function(){
		//서브메뉴 나타나기
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
	}).mouseout(function(){
		// $(".gnb_depth2_4").stop().fadeOut("fast");
		setTimeout(goHide, 500); //0.5초
	}).blur(function(){
		setTimeout(goHide, 500);
	});



	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

});


$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기');
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});
