require.config({
	baseUrl : "/",
	paths : {
		jquery : "lib/jquery/jquery-1.12.4.min",
		cookie : "lib/jquery_plugins/jquery.cookie",
		zoom : "lib/jquery_plugins/jquery.elevateZoom-3.0.8.min",//放大镜的插件
		carousel : "lib/jquery-plugins/xm-carousel/jquery.xmcarousel",//轮播插件
		template : "lib/art-template/template-web",
		load : "js/loadHeaderFooter"
	},
	shim : {
		carousel : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		}
	}
});