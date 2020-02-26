<?php
	include "conn.php";
	if(isset($_POST['sub'])){
		$title=$_POST['title'];
		$con=$_POST['con'];
		
		//拼sql的字符串
		$sql="insert into blog(bid,title,content,time) values(null,'$title','$con',now())";
		
		//把这个字符串发送给数据库
		$query=mysqli_query($link,$sql);
		if($query){
			echo "<script>location='index.php'</script>";
			//echo "ok";
		}else{
			echo "error";
		}
		//insert  update  delete 多少行受到了影响
		
		//select 返回结果集
	}

?>

<meta charset="utf-8">
<form action="add.php" method="post">
	标题:<input type="text" name="title"><br />
	内容:<textarea cols=20 rows=10 name="con"></textarea><br />
	<input type="submit" name="sub" value="添加文章">
</form>