<base href="<?php echo site_url();?>">


<?php
	if(!$this->session->userdata('uid')){
		echo "<a href='user/login'>未登录</a>";
	}else{
		$name=$this->session->userdata('uname');
		echo $name." 已登录";
		echo "<a href='blog/all'>个人中心</a>";
		echo "&nbsp;&nbsp;"."<a href='user/unlogin'>注销</a>";
	}
?>

<?php
	foreach($blogs as $value){

?>
<h3>标题:<?php echo $value->title;?></h3>
<li>时间:<?php echo $value->time;?></li>
<li>作者：<?php echo $value->uname;?></li>
<p><?php echo $value->content;?></p>
<hr/>

<?php
	}
?>