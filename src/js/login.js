require(["/js/config.js"],function () {
	require(["jquery","cookie", "load"],function($){
		/*$(".login_k dd input").focus(function(){
			$("#useridmsg").css("display","block");
		});*/
		$(".ajaxForm").on("submit", function(){
			$.ajax({
				type:"post",
				url:"http://localhost/php/login.php",
				dataType:"json",
				data:$(this).serialize(),
				success:function(data){					
					if (data.res_code === 0) {
						// if(loginUser){
						// 	$("..btn a").html(loginUser[0].data)
						// }
						console.log("1")
						//保存登录成功的用户信息到 cookie 中
						$.cookie.json = true; // 自动调用JSON.stringify()、JSON.parse()来转换JS值与JSON字符串
						$.cookie("loginUser", data.res_body, {path:"/"});
						location = "/index.html";
					} else {
						alert("登录失败，请确认手机号或者密码是否正确");
					}
					
			}});

			return false;
		})
		

			/* dataType: "html",
		     //传送请求数据
		     data: { txtName: strTxtName, txtPass: strTxtPass },
		     success: function (strValue) { //登录成功后返回的数据
		      //根据返回值进行状态显示
		      if (strValue == "True") {//注意是True,不是true
		       $(".clsShow").html("操作提示，登录成功！" + strValue);
		      }
		      else {
		       $("#divError").show().html("用户名或密码错误！" + strValue);
		      }
		     }*/

		// });
	});
});