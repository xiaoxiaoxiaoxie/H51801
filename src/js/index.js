require(["config"], function(){
	require(["jquery", "template","carousel","load"], function($,template,carousel){
		$(".main_banner").carousel({//调用原生的carousel方法
			imgs:[
			{src:"/images/banner1.jpg"},
			{src:"/images/banner2.jpg"},
			{src:"/images/banner3.jpg"},
			{src:"/images/banner4.jpg"}
			],
			width:1263,//图片宽
			height:333,
			duration:3000,
			type:"fade"
		});
	});
});