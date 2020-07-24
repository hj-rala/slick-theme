// 상단 메인 배너 slick
	$('.main-slider').slick({
		dots:true,
		fade:true,
		customPaging: function(slider, i) { 
			//console.log($(slider.$slides[i]).html());
			return '<button class="tab"><div class="s-indicator only-pc"><span class="inner-txt">' + $(slider.$slides[i]).find('.slide-item').attr('data-dot-title') + '</span></div><span class="s-line-fill"></span></button>';
		},
	});
	setTimeout( function(){
  		slideMove(0);
    },200);

	// 마우스 더미에 올렸을 때 멈추도록
	$('.slide-dummy, .slide-txt').mouseenter(function() {
		$(this).closest('.slider-wrap').attr('data-slick-autoplay-status', 'N');
	});

	$('.slide-dummy').mouseleave(function() {
		$(this).closest('.slider-wrap').attr('data-slick-autoplay-status', 'Y');
	});

	// 재생 및 정지 버튼 클릭
	$('.s-autoplay-btn').click(function(){
		var $sliderWrap = $(this).parent();
		
		if ( $sliderWrap.attr('data-slick-autoplay-status') == 'Y' ){
			$sliderWrap.attr('data-slick-autoplay-status', 'N');
		}
		else if ( $sliderWrap.attr('data-slick-autoplay-status') == 'N' ){
			$sliderWrap.attr('data-slick-autoplay-status', 'Y');
		}
	})

	// progressbar 다 차면 슬라이드 시키기
	setInterval(function() {
		$('.slider-wrap > .main-slider').each(function(index, node) {
			var $slider = $(node);
			
			if ( $slider.parent().attr('data-slick-autoplay-status') !== 'N' ) {
				var width = $slider.find('.slick-dots .slick-active > button > .s-line-fill').css('width');
				var buttonWidth = $slider.find('.slick-dots .slick-active > button').css('width');
				
				//console.log(width);
				if ( width == buttonWidth ) {
					$slider.slick('slickNext');
				}
			}
		});
	}, 500);
