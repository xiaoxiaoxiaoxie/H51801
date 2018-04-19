require(["/js/config.js"],function () {
	require(["jquery","cookie","load"],function($){
		$(".attrs0 span").mouseenter(function(){
			$(".attrs0 .h_size").css("display","block");
		});
		$(".attrs0 span").mouseleave(function(){
			$(".attrs0 .h_size").css("display","none");
		});
		
		$(".attrs span").mouseenter(function(){
			$(".attrs .h_size").css("display","block");
		});
		$(".attrs span").mouseleave(function(){
			$(".attrs .h_size").css("display","none");
		});
	});
});