require(["/js/config.js"],function() {
	require(["jquery","cookie","load"],function($){
		
		/* 验证注册的手机号是否被占用 */
		// 标记手机号是否被占用
		let isExist = false,//false表示米有备占用
			
			phone = /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/; 
		$(".phone").blur(function(){
			$.getJSON("http://localhost/php/check.php",{phone:$(this).val()},
				function(data){
					if (phone.test($('.phone').val()) && $('.phone').val !=="") {
						if (data.res_body.status === 1){
							$("#useridmsg").text("*该手机号已被注册，请重新输入");
							isExist = true;//不往下执行
						}
						else{
							$("#useridmsg").show().text("手机号未被注册可用");
							isExist = false;
						} 
					}else{
						$("#useridmsg").text("手机号格式不正确或手机号不能为空");
						isExist=true;
					}	
			});
		});


				//验证密码
				$('.password').blur(function () {
					if($(".password").val().length<6){
					 	$("#password").text("密码长度不符合要求");
					 	isExist=true;//不往下执行
					}else{
						//*************
						console.log("11111111");
						$("#password").show().text("密码格式正确");

						  //验证两次密码是否一致
						$(".repassword").blur(function () {
						    if($(".password").val() !=  $(".repassword").val()) { 
							   $("#repassword1").text("两次密码不一致");
							   	isExist=true;//不往下执行

								//********************
							   console.log('1');
						     }else { 
						  		$("#repassword1").text("两次密码一致");
							    isExist = false;
						   } 
						});
					}
				});
		/* 提交注册表单，注册用户 */
		$(".ajaxForm").submit(function(){
			if (!isExist) { // 手机号未被占用，则提交注册信息
				$.ajax({
					type : "post",
					url : "http://localhost/php/register.php",
					data : $(this).serialize(),
					dataType : "json",
					success : function (data) {
						console.log(data.res_code);
						if (data.res_code === 0) {
							$.cookie.json = true;
							$.cookie("loginuser",data.res_body,{path:"/"});
							location="/html/login.html";
						}else{
							//************
							console.log("adsadasdasd");
			 				alert("用户注册失败，请稍后再试");
			 			}
					}
				});
			}
			return false;
		});
	});
});