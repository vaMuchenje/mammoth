<?php
    $json=file_get_contents("https://spreadsheets.google.com/feeds/list/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/od6/public/basic?alt=json");
    $file = $fopen("https://spreadsheets.google.com/feeds/list/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/od6/public/basic?alt=json", 'r');
$fileText = fread($file, filesize($file));
$arr = json_decode($fileText, true); //i prefer associative array in this context

echo "<table>";
foreach($arr as $k=>$v)
    echo "<tr><td>$k</td><td>$v</td></tr>";
echo "</table>";


?>