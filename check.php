<?php 

	header("Access-Control-Allow-Origin:*");
	
	// 获取待注册的用户名
	$phone = $_GET["phone"];

	/* 查询数据库中是否存在注册的用户信息 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");

	// 设置读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	// 选择数据库
	mysql_select_db("aishang");
	// 创建查询语句
	$sql = "SELECT COUNT(*) FROM users WHERE phone='$phone'";
	// 执行SQL语句，返回执行查询结果集
	$result = mysql_query($sql);
	
	// 判断是否存在
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] >= 1) // 用户存在
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"手机号已存在"}}';
		else // 用户不存在
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"手机号可用"}}';
	} else {
		echo '{"res_code":-1, "res_error":"服务器异常，用户检测出错", "res_body":{}}';
	}

	// 关闭数据库连接
	mysql_close();
 ?>