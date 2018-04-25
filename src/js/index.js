require(["config"], function(){
	require(["jquery", "template","carousel","load"], function($,template,carousel){
		// 轮播图
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

		// 使用模板引擎1
		$.getJSON("/mock/flow.json", function(data){
			// 使用 artTemplate 渲染
			let html = template("prod_temp", {products : data.res_body.products});
			// 显示
			$(".kuai_pic1").prepend(html);
		});

		// 使用模板引擎2
		$.getJSON("/mock/flowTwo.json", function(data){
			// 使用 artTemplate 渲染
			let html = template("prod_tempTwo", {products : data.res_body.products});
			// 显示
			$(".kuai_pic2>.left2").prepend(html);
		});

		// 使用模板引擎3
		$.getJSON("/mock/flowTh.json", function(data){
			// 使用 artTemplate 渲染
			let html = template("prod_tempth", {products : data.res_body.products});
			// 显示
			$(".kuai_pic2>.right2").prepend(html);
		});
		/*// 客服
	      $(function () {
	      	
		    $("#img_kf").mouseenter(function () {
		        $(this).attr("src","/images/kf2.png");
		    });

		    $("#img_kf").mouseleave(function () {
		        $(this).attr("src","/images/kf.png");
		    });

		      $("#img_kf").mouseenter(function () {
		        $(this).attr("src","/images/kf2.png");
		    });

		      let NTKF_PARAM = {
		        siteid:"kf_9412",		            
		        settingid:"kf_9412_1474855760539",	
		        uid:"",		                
		        uname:"",		    
		        isvip:"0",                       
		        userlevel:"1",		              
		        erpparam:""                  
		    }

		    console.log(NTKF_PARAM);

	      });*/
	   
	});

});