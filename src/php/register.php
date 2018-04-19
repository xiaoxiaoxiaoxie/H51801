<?php
header("Access-Control-Allow-Origin:*");
//获取输入的登录用户名与密码
$phone=$_POST["mobile"];//name属性
$password=$_POST["password"];
/*在数据库中对比用户信息*/
mysql_connect("localhost:3306","root","");
mysql_select_db("h51710");
//设置读取库编码
mysql_query("set character set 'utf8'");
mysql_query("set names 'utf8'");
//
$sql="INSERT INTO users (phone,password) VALUES ('$phone','$password')";
$result=mysql_query($sql);

// 判断是否注册成功
	if ($result) {
		$sql = "SELECT id, phone,password FROM users WHERE phone='$phone'";
		$result = mysql_query($sql);
		if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			echo '{"res_code":0, "res_error":"", "res_body":'. json_encode($row) .'}';
		} else {
			echo '{"res_code":-1, "res_error":"注册用户信息查询失败", "res_body":{}}';
		}
	} else {
		echo '{"res_code":-2, "res_error":"用户注册失败，请重新注册", "res_body":{}}';
	}
//关闭数据库连接
mysql_close();

?>