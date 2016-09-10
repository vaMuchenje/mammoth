<?php
ini_set('display_errors','on');
?>


<?php
//$json_string = 'SAMPLEDATA-Long.json';
//$json_string = 'test.json'; // path and name of the file
//$json_string = '../audio_clips.json';
$json_string = '../audio_clips-beautify.json';

$jsondata = file_get_contents($json_string);
$obj = json_decode($jsondata,true);
print_r($obj);
?>