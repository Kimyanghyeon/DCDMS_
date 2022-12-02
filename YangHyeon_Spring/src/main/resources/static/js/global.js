var k2Func = (function () {

  //	console.log('gnb3');

  /*******************************************************
     * Common - Remove Trash CSS
     *******************************************************/
  var removeCss = function () {
	$("link[rel=stylesheet][href*='/Web-home/content/skin/skin0/style.css']").remove();
	$("link[rel=stylesheet][href*='/Web-home/_SITES/css/common/common.css']").remove();
	$("link[rel=stylesheet][href*='/Web-home/_UI/css/lang/common_ko.css']").remove();
	$("link[rel=stylesheet][href*='/Web-home/_UI/css/common/normalize.css']").remove();
  }

  /*******************************************************
     * Common - Sub Menu Nav
     *******************************************************/
  var setMenuText = function() {
	//		setTimeout(function() {
	var $getText1 = $.trim($('.head_navi .a_1._active').text());
	$('.wrap_sub_visual .container .visual_intro strong').text($getText1);
	//			console.log($getText1);
	//		}, 200);
  };

  var getMenuText = function () {
	setTimeout(function () {
	  var $getText1 = $.trim($('.head_navi .a_1._active').text());
	  var $getText2 = $.trim($('.head_navi .a_2._active').text());
	  var $getText3 = $.trim($('.head_navi .a_3._active').text());
	  var $pageTitle1 = $('#pagetitle1');
	  var $pageTitle2 = $('#pagetitle2');
	  var $pageTitle3 = $('#pagetitle3');


	  if(jQuery.type($getText1) !== 'undefined' && $getText1 != "") {
		$pageTitle1.append('<button class="pageNavigationBtn" title="펼치기">' + $getText1 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle1.remove();
	  }

	  if(jQuery.type($getText2) !== 'undefined' && $getText2 != "") {
		$pageTitle2.append('<button class="pageNavigationBtn" title="펼치기">' + $getText2 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle2.remove();
	  }

	  if(jQuery.type($getText3) !== 'undefined' && $getText3 != "") {
		$pageTitle3.append('<button class="pageNavigationBtn" title="펼치기">' + $getText3 + '</button><ul class="pageNavigation"></ul>');
	  } else {
		$pageTitle3.remove();
	  }

	}, 100);
  };

  var getMenuList = function () {
	setTimeout(function () {
	  var getMenuList1 = function () {
		var $getMenuResult1 = $('.head_navi .a_1').each(function (index, item) {
		  $('#pagetitle1 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  }

	  var getMenuList2 = function () {
		var $getMenuResult2 = $('.head_navi .li_1._active .a_2').each(function (index, item) {
		  $('#pagetitle2 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  }

	  var getMenuList3 = function () {
		var $getMenuResult3 = $('.head_navi .li_1._active .a_2._active').siblings('div').find('.a_3').each(function (index, item) {
		  $('#pagetitle3 > ul').append('<li><a href="' + $(this).attr('href') + '" target="' + $(this).attr('target') + '">' + $.trim($(this).text()) + '</a></li>');
		});
	  }

	  getMenuList1();
	  getMenuList2();
	  getMenuList3();
	}, 100);
  };

  var setMenuList = function () {
	setTimeout(function () {
	  var $subNavTitle = $('.sub_navi > ul > li > button');
	  var $subNavDiv = $('.sub_navi > ul > li > ul');

	  //			$subNavTitle.click(function () {
	  $subNavTitle.on('click', function() {
		if($(this).next('ul').css('display') == "none") {
		  $(this).attr('title','접기');
		  $(this).next('ul').slideDown();
		} else {
		  $(this).attr('title','펼치기');
		  $(this).next('ul').slideUp();
		}
	  });
	  //			$subNavDiv.mouseleave(function () {
	  $subNavDiv.on('mouseleave', function() {
		$subNavDiv.slideUp();
		$(this).siblings('button').attr('title','펼치기');
	  });
	}, 200);
  };

  /*******************************************************
     * Common - SNS
     *******************************************************/
  var snsToggle = function () {
	var $snsOpenBtn = $('button.sub_share');
	var $snsCloseBtn = $('.box_sub_share button.close');
	var $snsBox = $('.box_sub_share');
	$snsOpenBtn.on('click', function () {
	  $snsBox.slideDown("fast");
	  return false;
	});
	$snsCloseBtn.on('click', function () {
	  $snsBox.slideUp("fast");
	  return false;
	});
  }

  var snsShare = function () {
	var $snsFaceBook = $(".box_sub_share .fb");
	var $snsTwitter = $(".box_sub_share .tw");
	var $snsPinter = $(".box_sub_share .pin");
	var $snsKakao = $(".box_sub_share .kakao");
	var $snsFile = $('.box_sub_share .addr');

	if ($snsFaceBook.length > 0) {
	  $snsFaceBook.bind('click', function () {
		/*
                var thisTitle = $("title").html();
                popUrl = "http://www.facebook.com/sharer.php?t=" + thisTitle + "&u=" + encodeURIComponent(document.location.href);
                window.open(popUrl, "FACEBOOK");
                */
		shareFacebook();
	  });
	}

	if ($snsTwitter.length > 0) {
	  $snsTwitter.bind('click', function () {
		/*
                var thisTitle = $("title").html();
                popUrl = "http://twitter.com/share?text=" + encodeURIComponent(thisTitle) + "&url=" + encodeURIComponent(document.location.href);
                window.open(popUrl, "TWITTER");
                */
		shareTwitter();
	  });
	}

	if ($snsPinter.length > 0) {
	  $snsPinter.bind('click', function () {
		/*
                var url = encodeURI(encodeURIComponent(document.location.href));
                var title = encodeURI($("title").html());
                popUrl = "http://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
                window.open(popUrl, "BLOG");
                */
		sharePinterest();
	  });
	}

	if ($snsKakao.length > 0) {
	  $snsKakao.bind('click', function () {
		shareKakaoStory();
	  });
	}

	if ($snsFile.length > 0) {
	  $snsFile.bind('click', function () {
		copy_to_clipboard();
	  });
	}
  }

  /*******************************************************
     * Common - Table Scroll
     *******************************************************/
  var tableScroll = function () {
	setTimeout(function () {
	  var tableIcon = $('.con-table');
	  tableIcon.on('click', function () {
		$(".con-table").niceScroll({
		  cursorcolor: "rgba(1,120,221,1)",
		  cursorwidth: "1px",
		  cursorborder: "0px solid rgba(2,81,148,1)",
		  cursorborderradius: 0,
		  cursoropacitymin: 0,
		  autohidemode: 'leave',
		  scrollspeed: 0,
		  zindex: 100,
		  mousescrollstep: 30,
		  railpadding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		  }
		});
		$(this).addClass('on');
	  });
	}, 100);
  }

  /*******************************************************
     * Common - Random Sub Visual
     *******************************************************/
  var subVisual = function () {
	setTimeout(function () {
	  var subVisual = $('#wrap-visual #visual');
	  var active1Depth = $('#gnb .li_1.eQ01');
	  var active2Depth = $('#gnb .li_1.eQ02');
	  var active3Depth = $('#gnb .li_1.eQ03');
	  var active4Depth = $('#gnb .li_1.eQ04');
	  var active5Depth = $('#gnb .li_1.eQ05');

	  subVisual.removeClass();

	  if (active1Depth.hasClass('_menuOn')) {
		subVisual.addClass('m1');
	  } else if (active2Depth.hasClass('_menuOn')) {
		subVisual.addClass('m2');
	  } else if (active3Depth.hasClass('_menuOn')) {
		subVisual.addClass('m3');
	  } else if (active4Depth.hasClass('_menuOn')) {
		subVisual.addClass('m4');
	  } else if (active5Depth.hasClass('_menuOn')) {
		subVisual.addClass('m5');
	  } else {
		subVisual.addClass('none');
	  }
	}, 300);
  }

  /*******************************************************
     * Common - Sub Tab Length
     *******************************************************/
  var tabSize = function () {
	var tabLi = $('.wrap-contents .tab ul li');
	var tabLen = tabLi.length;
	var tabPer = 100 / tabLen + '%';
	if (tabLen < 4) {
	  tabLi.css('width', tabPer);
	} else {
	  tabLi.css('width', '25%');
	}
  }

  /*******************************************************
     * Common - Sub Util
     *******************************************************/
  var subUtil = function () {
	var $favoBtn = $('.sub_util .sub_favo');
	var $favoBox = $('.sub_util .box_sub_favo');
	var $favoClose = $('.sub_util .box_sub_favo .close');
	var $favoAddBtn = $('.sub_util .add');
	var $favoResetBtn = $('.sub_util .reset');

	// 즐겨찾기 창 열기 //
	$favoBtn.on('click', function () {
	  $favoBox.slideDown();
	});

	// 즐겨찾기 창 닫기 //
	$favoClose.on('click', function () {
	  $favoBox.slideUp();
	});

	// 즐겨찾기 추가 //
	$favoAddBtn.on('click', function() {
	  var pathMenuSeqs = $("#pathMenuSeqs").val().split(",");
	  var menu = "";
	  for (var i=1; i<pathMenuSeqs.length; i++) {
		if(i == pathMenuSeqs.length - 1) {
		  menu += "<strong>" + $('#top_menuTitle_' + pathMenuSeqs[i]).val() + "</strong>";
		} else {
		  menu += "<span>" + $('#top_menuTitle_' + pathMenuSeqs[i]).val() + " > " + "</span>";
		}
	  }
	  favoriteSetCookie(menu);
	  $favoBtn.focus();	// ie11 때문에 포커스를 강제로 이동			
	});

	// 즐겨찾기 초기화 //
	$favoResetBtn.on('click', function() {
	  favoriteRemoveCookieAll();
	});
  }

  /*******************************************************
     * Common - Sub Tab Mobile Munu List
     *******************************************************/
  var subMenuList = function () {
	setTimeout(function () {
	  var tabEle = $('.wrap_contents .tab .tab_div');
	  var d4Active = $('.wrap_contents .tab ul li._active a');
	  var d4Clone = d4Active.clone();
	  tabEle.prepend(d4Clone);

	  var d4Click = $('.wrap_contents .tab .tab_div > a');
	  d4Click.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings().toggleClass('open');
	  })
	}, 200);

	setTimeout(function () {
	  var tabEle = $('.tab2');
	  var d5Active = $('.wrap_contents .tab2 > ul > li._on > a');
	  var d5Clone = d5Active.clone();
	  tabEle.prepend(d5Clone);

	  var d5Click = $('.wrap_contents .tab2 > a');
	  d5Click.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings().toggleClass('open');
	  })
	}, 200);
  }

  /*******************************************************
     * Common - Page Arrow
     *******************************************************/
  var pageArrow = function () {
	if ($("body").hasClass("sub")) {
	  setTimeout(function () {
		var activePage = $('.head_navi .a_1._active');
		var activePrev = activePage.parent().prev().children('a');
		var activeNext = activePage.parent().next().children('a');
		var movePrev = $('.wrap_sub_visual a.prev');
		var moveNext = $('.wrap_sub_visual a.next');				
		var href="", txt="", target="";

		if(activePrev.length > 0) {
		  href = activePrev.attr('href');
		  target = activePrev.attr('target');
		  txt = $.trim(activePrev.text());
		  movePrev.attr('href', href).attr('target', target).text(txt).show();
		} else {
		  movePrev.hide();
		}

		if(activeNext.length > 0) {
		  href = activeNext.attr('href');
		  target = activeNext.attr('target');
		  txt = $.trim(activeNext.text());
		  moveNext.attr('href', href).attr('target', target).text(txt).show();
		} else {
		  moveNext.hide();
		}

	  }, 200);
	}
  }

  /*******************************************************
     * Common - Go To Top
     *******************************************************/
  var gotoTop = function () {
	var btnTop = $('.wrap_page_top');

	btnTop.on('click', function () {
	  $('html, body').stop().animate({ scrollTop: '0' }, 680);
	})

	$(window).scroll(function () {
	  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		btnTop.addClass('on');
	  } else {
		btnTop.removeClass('on');
	  }

	  var scrollValue = $(document).scrollTop();

	  if (scrollValue > 200) {
		btnTop.addClass('active');
	  } else {
		btnTop.removeClass('active');
	  }
	});

	/*
        $(window).scroll(function () {
            var footerPos = $('.wrap-footer .container').offset().top - 1000;

            var scroll = $(window).scrollTop();
            if (scroll > footerPos) {
                btnTop.addClass('on');
            } else {
                btnTop.removeClass('on');
            }
        });
        */
  }

  /*******************************************************
     * Common - Print
     *******************************************************/
  var printElement = function () {
	var btnPrint = $('.sub_print');
	btnPrint.on('click', function () {
	  print();
	})
  }

  return {

	//Remove Css
	removeCss: removeCss(),

	// Sub Menu Text
	setMenuText: setMenuText(),

	// Sub Menu Nav
	getMenuText: getMenuText(),
	getMenuList: getMenuList(),
	setMenuList: setMenuList(),

	//Sns Toggle
	snsToggle: snsToggle(),

	//Sns Share
	snsShare: snsShare(),

	//Table Scroll
	//        tableScroll: tableScroll(),

	//Sub Visual
	//		subVisual: subVisual(),

	//Tab Size
	//		tabSize: tabSize(),

	//Sub Util
	subUtil: subUtil(),

	//Sub Menu List
	//		subMenuList: subMenuList(),

	//Page Arrow
	pageArrow: pageArrow(),

	//Go to top
	gotoTop: gotoTop(),

	//Print
	printElement: printElement(),

	//GNB
	gnb: function () {
	  //			console.log('gnb1');
	  setMenuText();
	}
  }

})();

window.addEventListener('load', function (e) { k2Func.gnb(); });
//window.addEventListener('resize', function (e) { k2Func.gnb(); });

$(document).ready(function() {

  // 편집모드 //
  if($(location).attr('href').indexOf('contentsHtmlView.do') > -1) {
	$('body').addClass('editMode');
  }

  // 개발기간중에만 사용하는 모바일화면 보기 버튼 //
  $('#viewMobileIt').on('click', function(e) {
	e.preventDefault();
	var top = (window.screen.availHeight - 768) / 2;
	var left = (window.screen.availWidth - 420) / 2;
	if (top < 0) top = 0;
	if (left < 0) left = 0;
	window.open($(location).attr('href'), "_blank", "toolbar=yes, scrollbars=yes, resizable=no, top=" + top + ", left=" + left + ", width=420, height=768");	
  });

  // div_2 감싸기 //
  $('.div_2').wrapInner('<div class="div_2_inner"/>');


  // 통합검색 //
  $('.openSearch').on('click', function(e) {
	e.preventDefault();
	$('.wrap_search').slideDown();
  });
  $('.closeSearch').on('click', function(e) {
	e.preventDefault();
	$('.wrap_search').slideUp();
	$('.openSearch').focus();
  });

  // 주요사이트 //
  $('.open_site').on('click', function(e) {
	e.preventDefault();
	$(this).next('.site_list').slideToggle();
	$(this).toggleClass('active');
	if($(this).hasClass('active')) $(this).attr('title', '접기');
	else $(this).attr('title', '펼치기');
  });


});

$(window).scroll(function() {
  var scrollCurrent = $(document).scrollTop();
  if(scrollCurrent > 0) $('body').addClass('fix');
  else $('body').removeClass('fix');
});

// 즐겨찾기 //
function favoriteGetCookie(url) {
  var allCookies = decodeURIComponent(document.cookie);
  var pos = allCookies.indexOf(url); // pos가 -1 이면 해당 쿠키가 없다.   
  var ret = true;
  if (pos == -1) {
	ret = false;
	return ret;
  } else {
	ret = true;
	return ret;
  }
}
function favoriteSetCookie(navi) {
  var currentUrl = location.href;
  var ret = favoriteGetCookie(currentUrl);

  if (ret) {
	alert('이미 즐겨찾는 메뉴로 등록되어 있습니다.');
	favoriteGetCookieList();
  } else {
	var menuCnt = favoriteGetMenuCookieNumber();
	if (menuCnt > 5) {
	  alert('더 이상 등록 할수 없습니다.');
	} else {
	  var menu = 'menu' + menuCnt;
	  var name = navi + '@';
	  var todayDate = new Date();
	  todayDate.setDate(todayDate.getDate() + 1);
	  document.cookie = encodeURIComponent(menu) + "=" + encodeURIComponent(name + currentUrl) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	  favoriteGetCookieList();
	}
  }
}
function favoriteGetCookieList() {
  var currentPage = location.href;
  var ret = favoriteGetCookie(currentPage);
  //	var favoriteTitleButton = document.getElementById("favoriteTitleButton");	

  if (ret) {
	$('.favoriteTitle').html('<strong>이미 즐겨찾는 메뉴로 등록되어 있습니다.</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
	$(".box_sub_favo .control button.add").hide();
  } else {
	$('.favoriteTitle').html('<strong>현재 페이지를 즐겨찾는 메뉴로 등록하시겠습니까?</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
	$(".box_sub_favo .control button.add").show();
  }

  var allCookies = decodeURIComponent(document.cookie);
  var strCnt = 4;
  var favoListHtml = "";

  for (var i=1; i<6; i++) {
	var name = "";
	name = 'menu' + i;
	var pos = allCookies.indexOf(name + "="); // pos가 -1 이면 해당 쿠키가 없다.   
	if (pos > -1) {
	  var start = pos + strCnt + 1;
	  var end = allCookies.indexOf(";", start);
	  if (end == -1) end = allCookies.length;
	  var value = allCookies.substring(start, end);

	  var idx = value.indexOf("@", 0);
	  var menu = value.substring(1, idx);
	  var menuUrl = value.substring(idx + 1, value.length);

	  //			var html = '<a href="'+ menuUrl + '">' + menu + '</a><a href="javascript:favoriteRemoveCookie(\'menu' + i + '\');" class="delF">삭제</a>';
	  //			$('#menu' + i).html(html);

	  favoListHtml += '<li id="menu' + i + '"><a href="' + menuUrl + '">' + menu + '</a><button type="button" onclick="favoriteRemoveCookie(\'menu' + i + '\');" class="del">삭제</button></li>';
	}
  }

  if (favoListHtml != "") {
	if ($('#favoriteList').length < 1) {
	  favoListHtml = '<ul id="favoriteList">' + favoListHtml + '</ul>';
	  $('.box_sub_favo .control').before(favoListHtml);
	} else {
	  $('#favoriteList').empty().append(favoListHtml);
	}
	$('.box_sub_favo .control button.reset').show();
  } else {
	$('#favoriteList').remove();
	$('.box_sub_favo .control button.reset').hide();
  }

}
function favoriteGetMenuCookieNumber() {
  var allCookies = decodeURIComponent(document.cookie);
  var cnt = 1;
  var name = 'menu' + cnt;
  var strCnt = name.length;

  for (var i = 1; i < 6; i++) {
	var pos = allCookies.indexOf(name + "="); // pos가 -1 이면 해당 쿠키가 없다.   
	if (pos <= -1) {
	  if (i == 1) {
		return 1;
	  } else {
		return cnt;
	  }
	} else {
	  cnt++;
	  name = "";
	  name = 'menu' + cnt;
	}
  }
  return cnt;
}
function favoriteRemoveCookie(menu) {
  document.cookie = encodeURIComponent(menu) + "=" + " " + "; path=/; max-age=" + (0);
  //	document.getElementById(menu).innerHTML = "";
  $('#' + menu).remove();
  favoriteGetCookieList();
  $('.btnFavorite').focus();	// ie11 때문에 포커스를 강제로 이동
}
function favoriteRemoveCookieAll() {
  var name = "menu";
  for (var i = 1; i < 6; i++) {
	name += i;
	document.cookie = encodeURIComponent(name) + "=" + " " + "; path=/; max-age=" + (0);
	name = "menu";
  }

  //	$('#menu1, #menu2, #menu3, #menu4, #menu5').html("");	
  $('.favoriteTitle').html('<strong>현재 페이지를 즐겨찾는 메뉴로 등록하시겠습니까?</strong>(즐겨찾는 메뉴는 최근 등록한 5개 메뉴가 노출됩니다)');
  $('#favoriteList').remove();
  $('.box-sub-favo .control button.reset').hide();
  $(".box-sub-favo .control button.add").show();

}

