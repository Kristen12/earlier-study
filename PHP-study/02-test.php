<?php
	echo "<table width=800 border=1>";
	for($i=1;$i<=9;$i++){
		echo "<tr>";
		for ($j=1; $j<=$i; $j++) { 
			echo "<td>";
			echo "$i*$j=".$i*$j." ";
			echo "</td>";
		}
		echo "</tr>";
	}

	echo "</table>";

	echo "<br>";

	echo "<table width=800 border=1>";
	for ($a=9; $a>=1; $a--) { 
		echo "<tr>";
		for ($b=1; $b<=$a; $b++) { 
			echo "<td>";
			echo "$a*$b=".$a*$b." ";
			echo "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
?>