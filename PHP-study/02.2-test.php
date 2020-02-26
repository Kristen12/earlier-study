<?php
	echo "<table width=800 border=1>";
	for($i=9;$i>=1;$i--){
		echo "<tr>";
		for($j=1;$j<=9-$i;$j++){
			echo "<td>";
			echo "&nbsp;";
			echo "</td>";
		}
		//再打算式
		for($m=1;$m<=$i;$m++){
			echo "<td>";
			echo $i." * ".$m." = ".($i*$m);
			echo "</td>";
		}
		
		echo "</tr>";
	}
	echo "</table>";

	echo "<br>";
	echo "<table width=800 border=1>";
	for ($a=1; $a <=9; $a++) { 
		echo "<tr>";
		for ($b=9-$a; $b>=1 ; $b--) { 
			echo "<td>";
			echo "&nbsp;";
			echo "</td>";
		}
		for ($c=1; $c <=$a ; $c++) { 
			echo "<td>";
			echo $a."*".$c."=".($a*$c);
			echo "</td>";
		}
		echo "</tr>";
	}
	

?>