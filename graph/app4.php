<?php
ini_set('display_errors','on');
?>

<?php
    $con = mysql_connect("localhost","json","json") or die('Could not connect: ' . mysql_error());
    mysql_select_db("json", $con);

   // $json = 'audio_clips.json';

    $str_data = file_get_contents("audio_clips.json");
$data = json_decode($str_data,true);



function echo_array($a, $key){
    foreach($a as $key1 => $array1){
        if(!is_array($array1)){
            echo "$key $key1 : $array1<br/>";
        }else{
            echo_array($array1,"$key $key1");
        }
    }
}
echo_array($data,'');








?>




