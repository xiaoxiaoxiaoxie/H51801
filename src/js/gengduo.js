require(["/js/config.js"],function () {
	require(["jquery","cookie","load"],function($){
		$.get('/html/include/gengduo.html',function(data){
			$(".gengduo").prepend(data);
		});
	});
});