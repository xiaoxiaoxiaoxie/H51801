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
	});
});