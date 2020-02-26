<?php
	if(isset($_GET['sub'])){
		$num1=$_GET['num1'];
		$num2=$_GET['num2'];
		$ysf=$_GET['ysf'];
		$sum=0;
		$a=false;
		if(is_numeric($num1) && is_numeric($num2)){
			$a=true;
		}
		
		
		
		//echo $num1."||".$num2."||".$ysf;
		if($a==true){
			switch($ysf){
				case "+":
					$sum=$num1+$num2;
					break;
				case "-":
					$sum=$num1-$num2;
					break;
				case "*":
					$sum=$num1*$num2;
					break;
				case "/":
					$sum=$num1/$num2;
					break;
				case "%":
					$sum=$num1%$num2;
					break;
				default:
					echo "输入有误";
					
			}
		}
		
		
	}


?>


<meta charset="utf-8">
<table width=500 align='center' border=1>
<caption><h1>计算器</h1></caption>
<form action="test3.php" method="get">
	<tr>
		<td>
			<input type="text" name="num1" value="<?php echo $num1;?>">
		</td>
		<td>
			<select name="ysf">
				<option value="+"<?php echo $ysf=='+'?'selected':'';?>>+</option>
				<option value="-"<?php echo $ysf=='-'?'selected':'';?>>-</option>
				<option value="*"<?php echo $ysf=='*'?'selected':'';?>>×</option>
				<option value="/"<?php echo $ysf=='/'?'selected':'';?>>/</option>
				<option value="%"<?php echo $ysf=='%'?'selected':'';?>>%</option>
			</select>
		</td>
		<td>
			<input type="text" name="num2" value="<?php echo $num2?>">
		</td>
		<td>
			<input type="submit" name="sub" value="计算">
		</td>
	</tr>	
</form>
<?php
	if(isset($_GET['sub'])){
		echo "<tr>";
		echo "<td colspan=4>";
		if($a==true){
			echo "结果为:".$num1." $ysf ".$num2." = ".$sum;
		}else{
			echo "输入不是数字";
		}
		
		echo "</td>";
		echo "</tr>";
	}

?>
</table>