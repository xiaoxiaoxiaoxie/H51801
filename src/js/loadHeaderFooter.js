/* 加载头部尾部模块 */
define(["jquery","cookie"], function($,cookie){
	$.ajax({
		url:"/html/include/header.html",
		type:"get",
		success:function(data){
			//加载头部
			$(".header").prepend(data);
			//导入用户名
			$.cookie.json = true;
			var User = $.cookie("loginuser");
			if (User && $("#register_li>a").attr("href","/html/index.html")) {
				$("#login_li>a").text(User.phone);
				$("#register_li>a").text("注销").attr("href","/html/login.html").click(function () {
					$.cookie("loginuser","",{expires:-1});
				$("#login_li>a").text(User.phone);
				});
			}

			//导航二级列表
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
		
		}
	});
		

	$(".footer").load("/html/include/footer.html");
	
});