require(["/js/config.js"],function () {
	require(["jquery","cookie", "load","carousel",],function($){
		$(".main_banner").carousel({//调用原生的carousel方法
			imgs:[{src:"/images/banner1.jpg"},
			{src:"/images/banner2.jpg"},
			{src:"/images/banner3.jpg"},
			{src:"/images/banner4.jpg"},
			{src:"/images/banner5.jpg"},
			{src:"/images/banner6.jpg"}
			],
			width:996,//图片宽
			height:450,
			duration:1000,
			type:"fade"
		})
	});
});