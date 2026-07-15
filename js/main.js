// 在控制台打印字符串：test
// console.log("test");

// html标签（包括图片等）都加载结束时，执行下面代码
(function($) {

	"use strict";
	
	// 在控制台打印字符串：test
	// console.log("test");	
	
	// 自定义fullHeight函数，实现功能：为js-fullheight类添加height属性，设置数值为浏览器窗口高度
	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	// 调用函数，执行设置操作
	fullHeight();	
	
	
	// 自定义轮播效果
	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	//调用轮播图函数
	carousel();	
	
	
	// 动态数字
	var counter = function() {
	  // 滚动监听
	  $('#section-counter').waypoint( function( direction ) {
				// 如果向下滚动，并且元素属于ca-animated类别，再开始执行数字滚动效果
	  			if( direction === 'down' && !$(this.element).hasClass('ca-animated') ) {
	  
	  				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	  				$('.number').each(function(){
	  					var $this = $(this),
	  						num = $this.data('number');
	  						console.log(num);
	  					$this.animateNumber(
	  					  {
	  					    number: num,
	  					    numberStep: comma_separator_number_step
	  					  }, 7000
	  					);
	  				});
	  				
	  			}
	  
	  		} , { offset: '95%' } )

	}
	//调用动态数字函数
	counter();
	

})(jQuery);