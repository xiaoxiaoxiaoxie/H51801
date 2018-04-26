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
			$(".deta_temp").prepend(html);

			
			//选择商品类型 
			$(".span1").click(function(){
				$(".span1").css("color","skyblue");


				/* 加入购物车 */
				
				// 使用事件委派
				$(".deta_temp").delegate(".span1", "click", function(e){
					// 阻止默认行为：默认超级链接点击跳转
					e.preventDefault();
					// 将当前选购商品信息获取到
					let prod = {
						id : $(this).parents(".deta_temp").find(".id").text(),
						title : $(this).parents(".deta_temp").find(".right span").text(),
						price : $(this).parents(".deta_temp").find(".money").text().slice(1),
						amount : 1
					};
					// 配置 cookie 插件，自动在JS值与JSON字符串之间转换
					$.cookie.json = true;
					// 获取 cookie 中已保存的 购物车
					let _products = $.cookie("products") || [];
					// 判断原购物车中是否已存在选购商品
					let index = exist(prod.id, _products);

					if (index === -1) // 不存在
						// 将当前选购商品添加到数组中保存
						_products.push(prod);
					/*else // 存在
						// 修改数量
						_products[index].amount++;*/
					// 将购物车再保存回 cookie 中
					$.cookie("products", _products, {expires:7, path:"/"});
					// 加载购物车成功：抛物线
					
				});

				/*********************************************/
				/* 数量加/减、输入修改 */
				/*********************************************/
				$(".number").on("click", ".reduce,.plus", function(){
					$.cookie.json = true;
					// 获取 cookie 中已保存的 购物车
				let _products = $.cookie("products") || [];
					// 获取修改数量的商品id
					let _id = $(this).data("id").toString();
					// 获取数组中的元素下标
					let _index = exist(_id, _products);
					// 数量加/减
					if ($(this).is(".plus")){
						_products[_index].amount++;
					}
					else{
						if (_products[_index].amount <= 1)
							return;
						_products[_index].amount--;
					}

					// 覆盖保存cookie
					$.cookie("products", _products, {expires:7, path:"/"});
					// 显示修改结果
					$(this).siblings(".amount").val(_products[_index].amount);
					// 显示小计
					let _sub = _products[_index].price * _products[_index].amount;
					$(this).parent().next().text(_sub.toFixed(2));

					// 计算合计
					// calcTotal();
				});

				$(".number").on("blur", ".amount", function(){
					$.cookie.json = true;
					// 获取 cookie 中已保存的 购物车
				let _products = $.cookie("products") || [];
					// 获取修改数量的商品id
					let _id = $(this).data("id");
					// 获取数组中的元素下标
					let _index = exist(_id, _products);
					// 判断输入数据的地格式
					if (!/^[1-9]\d*$/.test($(this).val())){
						$(this).val(_products[_index].amount);
						return;
					}

					// 修改数组中对应元素的数量
					_products[_index].amount = $(this).val();

					// 覆盖保存cookie
					$.cookie("products", _products, {expires:7, path:"/"});
					// 显示小计
					let _sub = _products[_index].price * _products[_index].amount;
					$(this).parent().next().text(_sub.toFixed(2));

					// 计算合计
					// calcTotal();
				});

				});
				/*$(".span2").click(function(){
					$(".span1").css("color","#999");
					$(".span2").css("color","skyblue");
				});
				*/
				

				function exist(id, products) {
					var existIndex = -1;
					$.each(products, function(index, prod){
						if(prod.id === id) {
							existIndex = index;
							return false;
						}
					});
					return existIndex;
				}
			/*
			// 计算合计
			function calcTotal() {
				let sum = 0;
				$(".ck_prod:checked").each(function(index, element){
					sum += Number($(this).parents("tr").find(".sub").text());
				});
				$(".total").text("$" + sum.toFixed(2));
			}*/
				
		});
	});
});