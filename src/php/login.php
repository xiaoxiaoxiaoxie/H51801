<?php 
	// 获取输入的登录用户名与密码

	header("Access-Control-Allow-Origin:*");
	$phone = $_POST["phone"];//name的值
	$password = $_POST["password"];
	/* 在数据库中比对用户信息 */
	$conn = mysql_connect("localhost", "root", "");
	mysql_select_db("aishang", $conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	$sql = "SELECT id, phone, password FROM `users` WHERE phone='$phone' AND password='$password'";
	// 执行查询SQL语句，返回查询结果集（类似表格）

	$result = mysql_query($sql);

	$row = mysql_fetch_array($result,MYSQL_ASSOC);

	// 判断查询结果
	if (!$row){
		echo '{"res_code":-1, "res_error":"用户名或密码错误", "res_body":{}}';
	} else {
		echo '{"res_code":0, "res_error":"", "res_body":'. json_encode($row) .'}';
	}
	
	// 关闭数据库连接
	mysql_close();
 ?>