require(["config"],function () {
	require(["jquery","cookie", "load"],function($,cookie){
		
		$("#form1").on("submit", function(){
			$.ajax({
				type:"post",
				url:"http://localhost/php/login.php?",
				dataType:"json",
				data:$(this).serialize(),
				success:function(data){		
				console.log(data);	
					if (data.res_code === 0) {
						
						//保存登录成功的用户信息到 cookie 中
						$.cookie.json = true; // 自动调用JSON.stringify()、JSON.parse()来转换JS值与JSON字符串
						$.cookie("loginuser", data.res_body, {path:"/"});
						location = "/index.html";
					} else {
						alert("登录失败，请确认手机号或者密码是否正确");
					}
					
			}});

			return false;
		})
		
	});
});