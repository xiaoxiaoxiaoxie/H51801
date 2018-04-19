define(["jquery","cookie"],function($){
	$.ajax({
		url:"/html/include/header.html",
		type:"get",
		success:function(data){
			//加载头部
			$("header").prepend(data);
			//导入用户名
			$.cookie.json = true;
			var User = $.cookie("loginUser");
			if (User) {
				$(".User").text(User.phone);
				$(".zhuce").text("注销").click(function () {
					$.cookie("loginUser","",{expires:-1});
				$(".User").text(User.phone);
				});
			}


			//导航二级列表
			$("#nav2").mouseenter(function(){
				$(".sub_nav").css({
					"display":"block"
					// "width":"125px",
					// "text-align":"center"
				});
			// 	$(".navtwo").css({
			// 		"width":"125px",
			// 		"border":"none",
			// 		"text-align":"center",
			// 		"height":"40px"
			// 	});
			// 	$(".top").css("margin-top","10px");
			});
			$("#nav2").mouseleave(function(){
				$(".sub_nav").css("display","none");
			});
		}
	});
	let lt=false;
	$.get("/html/include/footer.html",function(data){
		$("footer").prepend(data);
		$(".footerhelp p").click(function(){
			if (!lt) {
				$(this).addClass("up");
				$(".footermenu").slideDown();

				lt=true;
			}
			else{
				$(".footermenu").slideUp();
				$(this).removeClass("up");
				lt = false;
	        }
		});
		$(".weixin").mouseenter(function(){
			$(".fenxiang").slideDown();
		});
		$(".weixin").mouseleave(function(){
			$(".fenxiang").css({
				"display":"none"
			});
		});
	});
});