<base href="<?php echo site_url();?>">
<?php echo site_url();?>
<meta charset="utf-8">

<form action="blog/do_add" method="post">
	标题:<input type="text" name="title">
	<select name="catalog">
		<?php
			foreach($cata as $value){
		?>
		<option value="<?php echo $value->catalog_id?>"><?php echo $value->catalog_name;?></option>
		<?php
			}
		?>
	</select><br />
	<textarea cols=20 rows=10 name="con"></textarea><br />
	<input type="submit" name="sub" value="添加文章">
	
</form>