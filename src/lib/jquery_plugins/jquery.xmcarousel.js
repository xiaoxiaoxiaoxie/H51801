/*
 * 轮播图插件
 */
// ;
// (function($){
// 	function Carousel({imgs, width, height,duration}) {
// 		this.imgs = imgs; // 待轮播图片的数组，数组元素是对象，包括图片路径与链接地址的属性
// 		this.width = width; // 轮播图宽度
// 		this.height = height; // 轮播图高度
// 		this.duration = duration; // 轮播切换时间间隔
// 		this.currentIndex = 0; // 当前显示图片的索引
// 		this.nextIndex = 1; // 即将显示图片的索引
// 		this.allImgs = null; // 所有待轮播的图片盒子
// 		this.circles = null; // 所有小圆点
// 		this.prev = null; // 向上
// 		this.next = null; // 向下
// 		this.timer = null; // 轮播计时器
// 		this.container = null; // 轮播图最外层容器
// 	}

// 	Carousel.prototype = {
// 		constructor : Carousel,
// 		init : function(container) { // 初始化，动态生成布局结构
// 			this.container = container;
// 			let content = `
// 				<!-- 图片 -->
// 				<ul class="imgs"></ul>
// 				<!-- 小圆点 -->
// 				<div class="pages"></div>
// 				<!-- 向前/后 -->
// 				<div class="prev">&lt;</div>
// 				<div class="next">&gt;</div>`;
// 			// 将布局框架结构加入容器中
// 			$(container).addClass("xmcarousel").html(content);
// 			/* 动态添加图片与小圆点的布局 */
// 			let liHtml = "", iHtml = "";
// 			for (let i = 0, len = this.imgs.length; i < len; i++) {
// 				liHtml += `<li><a href="${this.imgs[i].href}"><img src="${this.imgs[i].src}"></a></li>`;
// 				iHtml += "<i></i>";
// 			}
// 			$(".imgs", container).html(liHtml); // 将li添加到ul中
// 			$(".pages", container).html(iHtml); // 将 i 添加到 div.pages 中
// 			// 动态设置布局盒子大小
// 			$(".imgs, .imgs li", container).css({
// 				width : this.width,
// 				height : this.height
// 			});
// 			$(".pages", container).css("width", this.width);
// 			$(container).css("width", this.width);
// 			// 显示第一张图片
// 			$(".imgs li:first", container).show();
// 			$(".pages i:first", container).addClass("current");
// 			// 找出所有轮播图片、小圆点
// 			this.allImgs = $(".imgs li", container);
// 			this.circles = $(".pages i", container);
// 			this.prev = $(".prev", container);
// 			this.next = $(".next", container);

// 			// 注册事件监听
// 			this.register();
// 		},
// 		move : function(){ // 轮播切换图片
// 			// 当前显示淡出，即将显示淡入
// 			this.allImgs.eq(this.currentIndex).fadeOut();
// 			this.allImgs.eq(this.nextIndex).fadeIn();
// 			// 小圆点样式变换
// 			this.circles.eq(this.currentIndex).removeClass("current");
// 			this.circles.eq(this.nextIndex).addClass("current");
// 			// 修改索引
// 			this.currentIndex = this.nextIndex;
// 			this.nextIndex++;
// 			if (this.nextIndex >= this.imgs.length)
// 				this.nextIndex = 0;
// 		},
// 		autoPlay : function(){
// 			this.timer = setInterval(()=>{
// 				this.move();
// 			}, this.duration);
// 		},
// 		register : function(){
// 			/* 鼠标移入移出容器，停止/重启自动轮播 */
// 			this.container.hover(()=>{
// 				clearInterval(this.timer);
// 			}, ()=>{
// 				this.autoPlay();
// 			});
// 			/* 小圆点移入 */
// 			let _this = this;
// 			this.circles.mouseover(function(){
// 				// 获取当前移入小圆点在所有兄弟元素中的索引
// 				let index = $(this).index();
// 				if (_this.currentIndex === index)
// 					return;
// 				_this.nextIndex = index;
// 				_this.move();
// 			});
// 			/* 向上、下翻页 */
// 			this.prev.click(()=>{
// 				this.nextIndex = this.currentIndex - 1;
// 				if (this.nextIndex < 0)
// 					this.nextIndex = this.imgs.length - 1;
// 				this.move();
// 			});
// 			this.next.click(()=>{
// 				this.move();
// 			});
// 		}
// 	};

// 	// 扩展 $.fn (即 jQuery.prototype)
// 	/*$.fn.extend({
// 		carousel : function({imgs, width, height,duration}){
// 			this.each(function(){
// 				let c = new Carousel({imgs, width, height,duration})
// 				c.init($(this));
// 				c.autoPlay();
// 			});
// 		}
// 	});*/
// 	$.fn.carousel = function({imgs, width, height,duration}){
// 		this.each(function(){
// 			let c = new Carousel({imgs, width, height,duration})
// 			c.init($(this));
// 			c.autoPlay();
// 		});
// 	}
// })(jQuery);


;
(function($){
	function Carousel({imgs,width,height,duration,type}){
		this.imgs=imgs;
		this.width=width;
		this.len = imgs.length;
		this.height=height;
		this.duration=duration;
		this.type=type;
		this.container=null;
		this.circleIndex=null;
		this.lis=null;
		this.ul=null;
		this.prev=null;
		this.next=null;
		this.timer=null;
		this.circles=null;
		this.currentIndex=1;
		this.nextIndex=2//这里我们默认用无缝轮播的方式
	}
	Carousel.prototype={
		constructor:Carousel,
		init:function(container){//初始化里面要做的动作是什么
			this.container=container;//动态创建html的结构
			var content=`
			<!--图片-->
			<ul class="imgs"></ul>
			<!--小圆点-->
			<div class="pages"></div>
			<!--向前/向后-->
			<div class="prev"><</div>
			<div class="next">></div>`;
			//将布局框架结构加入容器中,第一步是处理了外层的信息
			$(container).addClass("xmcarousel").html(content)
			var liHtml="";var iHtml="";
			for(var i=0;i<this.imgs.length;i++){
				iHtml+="<i></i>";
				liHtml+=`<li><a href="${this.imgs[i].href}"><img src="${this.imgs[i].src}"/></a></li>`
			};
			//第二步我们来处理内层的信息，动态添加里面的东西
			//配置好了之后，将li添加到ul中，将i添加到pages中
			$(".imgs",container).html(liHtml);
			$(".pages",container).html(iHtml);
			//放好了之后，我们就来构造无缝轮播的框架,要明白克隆的到底是谁，不是ul，是li .
			var first=$(".imgs li",container).eq(0).clone(true);//克隆第一张张图片
			console.log(first)
			var last=$(".imgs li",container).eq(this.len-1).clone(true);//克隆最后一张图片
			//克隆好了之后，我们去添加
			$(".imgs").append(first);//把第一张加到最后
			$(".imgs").prepend(last);//把最后一张加在前面
			//添加完毕了之后，索引会增加两个
			this.len+=2;
			//以上步骤是动态构建了html布局结构和图片，以下步骤我们是要设置css样式。
			$(container).css({
//			width:(this.type === "fade" ? this.width : this.width * this.len),
				width:this.width,
				height:this.height,
				overflow:"hidden"
			})
			//设置ul的样式
			this.ul=$(".imgs",container).css({
				width:(this.type === "fade" ? this.width : this.width * this.len),
				height:this.height,
				position:this.type==="fade"?"relative":"absolute"//滑动的时候是要调整位置的，所以用的的绝对定位
			})
			this.lis = $(".imgs li", container).css({
				width: this.width,
				height: this.height
			});
			//li里面放的一张一张的图，这里就是关键的关键了
			if(this.type==="fade"){//如果是淡入淡出
				this.lis.css({
					position:"absolute",
					top:0,
					left:0,
					display:"none"//让所有的突破隐藏，让第一张图片显示
				}).eq(1).show();
			}else{//是无缝轮播的时候，我们应该怎么去处理li里面的图片的信息呢
				this.ul.css({left:-1*this.width});
				this.lis.css({//如果是无缝轮播
					float:"left"//如果是无缝轮播，就要让所有的图片一排过去，就是float:left;
				})
			}
			//设置小圆点的样式
			this.circles=$(".pages",container).css({//在这一步的pages其实是装小圆点的div
				width:this.width,
			}).children("i");//到了这里circles就彻底变成了所有的小圆点了
			this.circles.first().addClass("current");
			this.prev = $(".prev", container);
			this.next = $(".next", container);
			//注册事件监听
			this.registerEventListener();
		},
		autoPlay:function(){//自动轮播就是启动计时器函数。
			this.timer = setInterval(()=>{//箭头函数是为了保持this的指向是一致的。
				this.move();
			}, this.duration);
		},
		move:function(){
			if (this.type === "fade") {
				this.fade();
			} else {
				this.slide();
			}
		},
		fade:function(){
			this.circleIndex=this.nextIndex-1;
			// 当前正显示的图片淡出，即将显示的图片淡入
			this.lis.eq(this.currentIndex).fadeOut();//我们这里默认的第一个currentIndex是为1的，所以是没有影响的
			this.lis.eq(this.nextIndex).fadeIn();
			// 小圆点样式切换，这里开始就是要考研逻辑的了，也是关键中的关键
			if(this.circleIndex>=this.len-2){
				this.circleIndex=0;
			}else if(this.circleIndex<=-1){
				this.circleIndex=this.len-3;
			}
			for(var i=0;i<this.len-2;i++){
				this.circles.eq(i).removeClass("current")//所有的小圆点样式清空
			}
			this.circles.eq(this.circleIndex).addClass("current");
			// 索引切换
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if(this.nextIndex >= this.len-1)
				this.nextIndex =this.len-4;
		},
		slide:function(){
			this.circleIndex=this.nextIndex-1;
			//计算滑动定位的位置.即将播放第几张图片的时候，左边就是几张的
			var _left = -1 * this.width * this.nextIndex;
			// 运动动画
			var _this=this;
			this.ul.stop().animate({left: _left},function(){//这里要特别注意的，是运动了之后改变索引，不是直接改变索引
				if(_this.nextIndex >= _this.len){	
				_this.currentIndex=1;//当播放到最后复制的一张图片的时候，要还原的，设置位置
				_this.nextIndex=2;
				_this.ul.css({left:-1*_this.width+"px"})
			}else if(_this.currentIndex<=0){
				_this.currentIndex=_this.len-2;
					_this.nextIndex=_this.len-1;
				_this.ul.css({left:-1*_this.width*(_this.len-2)})			
			}
			});
			// 小圆点样式切换，这里开始就是要考研逻辑的了，也是关键中的关键
			if(this.circleIndex>=this.len-2){
				this.circleIndex=0;
			}else if(this.circleIndex<=-1){
				this.circleIndex=this.len-3;
			}
			for(var i=0;i<this.len-2;i++){
				this.circles.eq(i).removeClass("current")//所有的小圆点样式清空
			}
			this.circles.eq(this.circleIndex).addClass("current");
			// 索引切换
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
		},
		registerEventListener:function(){
			//鼠标移入，移出容器
			this.container.hover(()=>{
				clearInterval(this.timer)
		},()=>{
				this.autoPlay();
		})
			// 小圆点移入
			var that = this;
			this.circles.mouseover(function(){
				var index = $(this).index();
				console.log(index)
				if(that.currentIndex-1 === index)
					return;
					else{
						
						that.nextIndex = index+1;
						that.move();
					}
				
			});
			//向前向后翻页
			this.prev.click(()=>{
				this.nextIndex = this.currentIndex-1;
				this.move();
			});
			this.next.click(()=>{
				this.move();
			});		
		},
		};
	// 即该方法可以通过 jQuery 对象的实例来调用   $()
		$.fn.extend({
		carousel : function(options){
			this.each(function(index, element){
				new Carousel(options).init($(element));
			});
		}
	});
//author:wangyiming createTime:2018.03.17
})(jQuery)
