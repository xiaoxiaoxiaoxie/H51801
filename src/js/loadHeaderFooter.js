/* 加载头部尾部模块 */
define(["jquery"], function($){
	$(function(){
		$(".header").load("/html/include/header.html",function(){
			/* 鼠标移入显示二级菜单 */
			$("ul.nav>li:lt(5):gt(0)").hover(function(){
				// mouseenter
				$(this).children("ul.sub").show();
			}, function(){
				// mouseleave
				$(this).children("ul.sub").hide();
			});
			$("ul.sub").hover(function(){
				// mouseenter
				$(this).show();
			}, function(){
				// mouseleave
				$(this).hide();
			});
		});
		$(".footer").load("/html/include/footer.html");
	});
});