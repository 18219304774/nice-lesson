/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-02 18:31:32
 * @version $Id$
 */




/*---index---*/
$(function(){
	head_font();
	logoul();
	goahead_style();
	secound();
	three();
	four();
	fiver();
	foot();
	$(window).resize(function(){
		logoul();
		goahead_style();
		three();
		fiver();
		foot();
	});
});

function head_font(){
	var $span1=$('.head_font1').width()+1,
		$span2=$('.head_font2').width()+1;
	$('.head_font1').css({
		'display':'block',
		'line-height':'60px',
		'width':$span1,
		'margin':'0 auto'
	});
	$('.head_font2').css({
		'display':'block',
		'line-height':'30px',
		'width':$span2,
		'margin':'0 auto'
	})
	$('.top_li div').css({
		'height':$('.top_li').height()+10
	})
	$('.top_li:odd div').css({
		'top':'0px'
	})
}

function goahead_style(){
	var $spanw=$('#goto span').width()+1,
		$spanh=$('#goto span').height()+1;
	$('#goto').css({
		'border':'7px solid rgba(8,96,1,0.5)',
		'top':$('#head').height()-$('#goto').height()/2-7,
		'left':$('#head').width()/2-$('#goto').width()/2-7
	});
	$('#goto span').css({
		'display':'block',
		'width':$spanw,
		'height':$spanh,
		'margin':'0px auto'
	});
}

function secound(){
	$('#secound>div:first-child').css({
		'width':$('#secound>div:first-child span').width()+2,
		'margin':'0 auto 25px'
	});

}

function three(){
	var jiaoan_li=0,shiyian_li=0,zhuangti_li=0;
	
	$('.jiaoan').each(function(index){
		jiaoan_li=jiaoan_li > $(this).find('a').width() ? jiaoan_li : $(this).find('a').width();
	});
	$('.shiyian').each(function(index){
		shiyian_li=shiyian_li > $(this).find('a').width() ? shiyian_li : $(this).find('a').width();
	});

	shiyian_li=($('.three_font').width()-shiyian_li)/2,
	jiaoan_li=($('.three_font').width()-jiaoan_li)/2;
	var jiaoshi=[three_li_a('.jiaoan',jiaoan_li),
				three_li_a('.shiyian',shiyian_li),
				three_li_a('.zhuangti',zhuangti_li)];

	$('.three_font ul').each(function(index){
		$(this).css({
			'margin-left':jiaoshi[index]+'px',
		})
	})
	$('.three_font:eq(1)').css({
		'margin':'0 '+parseInt((($('#three').width()-$('.three_font').width()*3)-1)/2)+'px',

	});
	
}

function three_li_a(docu,varname){
	$(docu).each(function(index){
		varname=varname > $(this).find('a').width() ? varname : $(this).find('a').width();
	});
	varname=($('.three_font').width()-varname)/2;
	return varname;
}

function four(){
	$('.four_img').each(function(index){
		var ind=index+1;
		$(this).css({
			'background':'url("img/four_img_'+ind+'.jpg") center no-repeat',
			'background-size':'cover'
		});
	})
}

function fiver(){
	$('.textarea').css({
		'width':$('#fiver').width()-70,
	})
}

function foot(){
	var $width=$('#fiver').width();
	$('.fimg').css({
		'width':$width,
	});
	$('.foot_img').each(function(index){
		var posi;
		if(index==0){posi=0;}
		if(index==1){posi=($width-$(this).width())/2;}
		if(index==2){posi=$width-$(this).width();}
		$(this).css({
			'background':'#f6f6f6 url(img/foot_'+(index+1)+'.png) center center no-repeat',
			'left':posi+'px'
		});
	})
}

function logoul(){
	if(document.documentElement.clientWidth<1200){
		var topjian=parseInt((document.documentElement.clientWidth-$('#logo').width()-$('#top ul').width())/4);
		topjian=topjian>10 ? topjian : 10;
		$('#top #logo').css({
			'margin-left':topjian+'px'
		});
		$('#top ul').css({
			'margin-right':topjian+'px'
		});
	}else{
		$('#top #logo').css({
			'margin-left':'128px'
		});
		$('#top ul').css({
			'margin-right':'118px'
		});
	}
}


/*-------------lesson---------------*/
$(function(){

	lesson_menuli();
	lesson_menu_a();
	$(window).resize(function(){
		lesson_menuli();
		lesson_menu_a();
	})
})


function lesson_menu_a(){
	$('.menuli').find('a').css({
		'display':'block',
		'width':$('.menuli').width()
	})
}
function lesson_menuli(){
	var linum=$('.menuli');
	$('.menuli').css({
		'width':$('#menuul').width()/linum.length
	})
}
