require(["config"],function () {
	require(["jquery","template","cookie","carousel","load"],function($,template,cookie,carousel){
		// 轮播图
		$(".deta_banner").carousel({//调用原生的carousel方法
			imgs:[
			{src:"/images/deta_banner3.jpg"},
			{src:"/images/deta_banner2.jpg"},
			{src:"/images/deta_banner4.jpg"},
			{src:"/images/deta_banner6.jpg"}
			],
			width:640,//图片宽
			height:640,
			duration:3000,
			type:"fade"
		});

		// 模板引擎
		$.getJSON("/mock/list.json",function(data){
			
			// 使用 artTemplate 渲染
			let html = template("art_tempt", {products : data.res_body.products});
			// 显示
			$(".deta").prepend(html);

			$(".right").on("click"," .span1,.span2",function () {
				/*
				$(this).css("color","skyblue");*/
				let zu = $(this).parents(".right");
					
					if(zu.hasClass(".span1")){
						$(".span2").css("color","#999");
						$(".span1").css("color","skyblue");
					}
				
					else if(zu.hasClass(".span2")){
						$(".span1").css("color","#999");
						$(".span2").css("color","skyblue");
					}

			});
		});
	});
});