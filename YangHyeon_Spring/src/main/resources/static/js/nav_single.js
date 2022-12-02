var k2FuncNav = (function () {

	// GNB init
	var $gnb = $('.head_navi .ul_1');
	var $gnbDepth1Anchor = $('.head_navi .a_1');
	var $gnbDepth2Anchor = $('.head_navi .a_2');
	var $gnbDepth3Anchor = $('.head_navi .a_3');
	var $gnbDepth2 = $('.head_navi .div_2');
	var $gnbDepth3 = $('.head_navi .div_3');

	var $gnbBtnOpen = $('.head_util .btn_mgnb');
	var $gnbBtnClose = $('.head_navi .btn_mgnb_close');
//	var $gnbBtnGlobal = $('.head_navi .mobile_global');

	var $gnbBox = $('.head_navi');
	var $blackBg = $('.black_bg');

    //GNB RemoveClass1
    var gnbRemoveClass1 = function () {
//		$gnbDepth1Anchor.removeClass('on');
//		$gnbDepth2.removeClass('on');
//		$gnbDepth2.hide();
		$gnbDepth2.slideUp('fast');
		$('.pageNavigation').hide();
    };

    //GNB RemoveClass2
    var gnbRemoveClass2 = function () {
//		$gnbDepth2Anchor.removeClass('on');
//		$gnbDepth3.removeClass('on');
//		$gnbDepth3.hide();
		$gnbDepth3.slideUp('fast');
    };

	// GNB Common 
	var gnbCommon = function() {
		
		// 모든 새창태그(a)에 new_win 클래스 추가 //
		$('a[target=_blank]').addClass('new_win');
	
		// add .have class on the div //
		$('.ul_1 > li').each(function(index, item) {
			if($(this).children('.div_2').length > 0) {
				$(this).addClass('have');
				$(this).parent('ul').addClass('have');
			}
		});
		$('.ul_2 > li').each(function(index, item) {
			if($(this).children('.div_3').length > 0) {
				$(this).addClass('have');
				$(this).parent('ul').addClass('have');
			}
		});

		$('.ul_3 > li').each(function(index, item) {
			if($(this).children('.div_4').length > 0) {
				$(this).addClass('have');
				$(this).parent('ul').addClass('have');
			}
		});
		$('.ul_4 > li').each(function(index, item) {
			if($(this).children('.div_5').length > 0) {
				$(this).addClass('have');
				$(this).parent('ul').addClass('have');
			}
		});
		$('.ul_5 > li').each(function(index, item) {
			if($(this).children('.div_6').length > 0) {
				$(this).addClass('have');
				$(this).parent('ul').addClass('have');
			}
		});

		// 하위메뉴갯수를 count숫자 형태의 클래스를 추가 */
		$('.ul_1').each(function(index, item) {
			$(this).addClass('count' + $(this).children('li').length);
		});
		$('.ul_2').each(function(index, item) {
			$(this).addClass('count' + $(this).children('li').length);
		});
		$('.ul_3').each(function(index, item) {
			$(this).addClass('count' + $(this).children('li').length);
		});
		$('.ul_4').each(function(index, item) {
			$(this).addClass('count' + $(this).children('li').length);
		});
		$('.ul_5').each(function(index, item) {
			$(this).addClass('count' + $(this).children('li').length);
		});

	};

	// GNB Pc //
    var gnbPc = function () {
		
		// 1depth
		$gnbDepth1Anchor.off('click');
		$gnbDepth1Anchor.on('click', function(e) {			
			gnbRemoveClass1();
			if($(this).attr('target') == "_blank") {
				window.open($(this).attr('href'));
			} else {
				e.preventDefault();
				$(this).next('div').slideDown();				
			}
		});

		$gnb.off('mouseleave');
		$gnb.on('mouseleave', function () {
			gnbRemoveClass1();
		});

		// 2depth
		$gnbDepth2Anchor.off('click');
		$gnbDepth2Anchor.on('click', function(e) {
			if($(this).attr('target') == "_blank") {
				e.preventDefault();
				window.open($(this).attr('href'));
			}
		});

		// 3depth
		$gnbDepth3Anchor.off('click');
		$gnbDepth3Anchor.on('click', function(e) {
			if($(this).attr('target') == "_blank") {
				e.preventDefault();
				window.open($(this).attr('href'));
			}
		});
	};

    // GNB Mobile
    var gnbMobile = function () {

        //1Dep
		$gnbDepth1Anchor.off('click');
		$gnbDepth1Anchor.on('click', function (e) {
			e.preventDefault();
			console.log('ok');
			if($(this).next('div').length > 0) {
				if($(this).next('div').css('display') == "block") {
					$(this).next('div').slideUp();
					$(this).parent().removeClass('haveOpen').addClass('have');
				} else {
					gnbRemoveClass1();
					$(this).next('div').slideDown();
					$(this).parent().siblings('li').has('div').removeClass('haveOpen').addClass('have');
					$(this).parent().removeClass('have').addClass('haveOpen');
				}
			}
		});

        //2Dep
        $gnbDepth2Anchor.off('click');
        $gnbDepth2Anchor.on('click', function () {			
			if($(this).next('div').length > 0) {
				if($(this).next('div').css('display') == "block") {
					$(this).next('div').slideUp();
					$(this).parent().removeClass('haveOpen').addClass('have');
				} else {
					gnbRemoveClass2();
//					$(this).next('div').slideToggle();
//					$(this).parent().toggleClass('have haveOpen');
					$(this).next('div').slideDown();
					$(this).parent().siblings('li').has('div').removeClass('haveOpen').addClass('have');
					$(this).parent().removeClass('have').addClass('haveOpen');
				}
			}
        });

        //3Dep hass 2Dep
		$gnbDepth2Anchor.siblings('div').siblings('a').on('click', function (e) {
            e.preventDefault();
        });

        //Menu Open
//		$gnbBtnOpen.off('click');
        $gnbBtnOpen.on('click', function () {
			$(this).removeClass('on');
			$gnbBtnClose.addClass('on');
//			$gnbBtnGlobal.addClass('on');
			$gnbBox.addClass('on');
			$blackBg.addClass('on');
			$('body').addClass('activemNav');	// 한성대에서 추가
            // 서브페이지라면 해당메뉴 열려있게 //
			if(!$("body").hasClass('main')) {
				var $gnbFirst = $('.head_navi .li_1._active .a_1');
				var $gnbDepth2AnchorActive = $('.head_navi .a_2._active');
				$gnbFirst.trigger('click');	// 강제로 이벤트발생
				$gnbDepth2AnchorActive.trigger('click');	// 강제로 이벤트 발생
            }
		});

        //Menu Close
		$gnbBtnClose.off('click');
		$gnbBtnClose.on('click', function () {
			$(this).removeClass('on');
			$gnbBtnOpen.addClass('on');
			$gnbBox.removeClass('on');
			$blackBg.removeClass('on');
		  $('body').removeClass('activemNav');	// 한성대에서 추가
		});
    }

    return {

		// GNB Common
		gnbCommon: gnbCommon(),

		//GNB
        gnb: function () {
            var windowSize = $(window).width();
            if (windowSize < 1281) {
				gnbMobile();
            } else {
				gnbPc();
            }
        }	
    }

})();

window.addEventListener('load', function (e) { k2FuncNav.gnb(); });
window.addEventListener('resize', function (e) { k2FuncNav.gnb(); });

$(document).ready(function () {

});
 