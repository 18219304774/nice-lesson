/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-06 00:13:19
 * @version $Id$
 */

$(function(){
	/*----index---*/
	four_img();
	top_li();
	goahead();
	three_font_a();
	view_more();
})



/*---index---*/
function four_img(){
	$('.four_img').hover(function(){
		$(this).find('.find').stop().toggle(300);
		$(this).find('.litter').stop().slideToggle(300);
		$(this).find('.bgcolor').stop().fadeToggle(300);
	});
}

function top_li(){
	$('.top_li').hover(function(){
		$(this).find('div').stop().slideToggle(200);
	},
	function(){
		$(this).find('div').stop().slideToggle(200);
	})
}

function goahead(){
	var gotobgcolor=$('#goto').css('background-color');
	$('#goto').click(function(){
		var juli=$('#head').offset().top + $('#head').height();
		$('html,body').animate({scrollTop:juli},300);
	}).hover(function(){
		$(this).stop().animate({backgroundColor : '#0e9e02'},200);
	},function(){
		$(this).stop().animate({backgroundColor : gotobgcolor},200);
	})
}

function three_font_a(){
	$('.three_font ul li a ').hover(function(){
		$(this).stop().animate({
			'font-size':'17px',
			'line-height':'30px',
			'margin-left':'-5px'
		},200)
	},function(){
		$(this).stop().animate({
			'font-size':'15px',
			'line-height': '32px',
			'margin-left':'0px'
		},200)
	})

	$('.three_big_font a').hover(function(){
		$(this).stop().animate({
			'font-size':'28px',
		},200)
	},function(){
		$(this).stop().animate({
			'font-size':'25px'
		},200)
	})

	$('.three_font center > div a').hover(function(){
		$(this).parent().next().find('a').stop().animate({
			'font-size':'28px',
		},200)
	},function(){
		$(this).parent().next().find('a').stop().animate({
			'font-size':'25px'
		},200)
	})
}

function view_more(){
	var viewmorebgcolor=$('.viewmore').css('background-color');
	$('.viewmore').hover(function(){
		$(this).stop().animate({backgroundColor : '#0e9e02'},200);
	},function(){
		$(this).stop().animate({backgroundColor : viewmorebgcolor},200);
	})
}