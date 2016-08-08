<?php
ini_set('display_errors','on');
?>

<?php
    $con = mysql_connect("localhost","json","json") or die('Could not connect: ' . mysql_error());
    mysql_select_db("json", $con);

    //$json_string = 'audio_clips.json';
  //  $json_string = 'https://api.audioboom.com/audio_clips';
    //read the json file contents
  //  $jsondata = file_get_contents($json_string);

    //convert json object to php associative array
   // $obj = json_decode($jsondata,true);
   // $json_a = json_decode($jsondata);
   //  var_dump($json_a); // just to see the structure. It will help you for future cases




//$AudioBooAPIresponse = file_get_contents("https://api.audioboom.com/audio_clips");
$AudioBooAPIresponse = file_get_contents("https://api.audioboom.com/audio_clips/featured");
//https://audioboom.com/browse/everything-us/boos
$json = json_decode($AudioBooAPIresponse,true);
$AudioClips = $json["body"]["audio_clips"];
 
foreach ($AudioClips as $key) 
{
	$id           = $key["id"];
	$title        = $key["title"];
//	$description  = $key["description"];
	//$recorded_at  = $key["recorded_at"];
	//$location     = $key["location"]["description"];
//	$longitude    = $key["location"]["longitude"];
//	$latitude     = $key["location"]["latitude"];
	//$accuracy     = $key["location"]["accuracy"];
//	$original     = $key["urls"]["detail"];
	//$mp3          = $key["urls"]["high_mp3"];
	//$image        = $key["urls"]["image"];
	//$duration     = $key["duration"];
//	$mp3_filesize = $key["mp3_filesize"];
 
	//	Save The Files
	//$mp3_file = file_get_contents($mp3);
	//file_put_contents($id . ".mp3", $mp3_file);
 
	//$image_file = file_get_contents($image);
	//file_put_contents($id . ".jpg", $image_file);

	//print_r($id);

	echo 'ID: (' . $id . ') AND TITLE: <strong>' . $title . '</strong><br>';

}















   //  $obj = json_encode($jsondata, JSON_PRETTY_PRINT);

//echo json_encode($obj);
   // echo json_encode($obj, JSON_PRETTY_PRINT);
   //  echo json_encode($obj, JSON_NUMERIC_CHECK);
//print_r($obj);

    //echo $decoded_array['array']['window'];//example
  //  echo $decoded_array['totals']['count']["offset"]["audio_clips"][0];//example
    // echo $decoded_array['totals']['count']["offset"]["audio_clips"][0];//example

//print_r($obj);
/* Notice: Array to string conversion
foreach ($obj as $key => $value) {
    if (!is_array($value)) {
        echo $key . '=>' . $value . '<br />';
    } else {
        foreach ($value as $key => $val) {
            echo $key . '=>' . $val . '<br />';
        }
    }
}
*/


 //get the employee details
   // $id = $data['empid'];
    //$id = $data['array']['body']['audio_clips']['id'];
   // $audioid = $data['array']['window']['body']['audio_clips']['id'];
     //$audioid = $data['window'];
;

   // $name = $data['personal']['name'];
 //   $audiotitle = $data['array']['window']['body']['audio_clips']['title'];
   // $gender = $data['personal']['gender'];
   // $age = $data['personal']['age'];
   // $streetaddress = $data['personal']['address']['streetaddress'];
   // $city = $data['personal']['address']['city'];
   // $state = $data['personal']['address']['state'];
  //  $postalcode = $data['personal']['address']['postalcode'];
  //  $designation = $data['profile']['designation'];
  //  $department = $data['profile']['department'];


//print_r($audioid);

//echo $arr['array']['current_condition'][0]['temp_F'];

//$array['array']="value";

//echo $arr->{'array'};


//insert into mysql table
   // $sql = "INSERT INTO tbl_emp(empid, empname, gender, age, streetaddress, city, state, postalcode, designation, department)
   // VALUES('$id', '$name', '$gender', '$age', '$streetaddress', '$city', '$state', '$postalcode', '$designation', '$department')";

/*
    $sql = "INSERT INTO tbl_audio(audioid, audiotitle)
    VALUES('$audioid', '$audiotitle')";

    if(!mysql_query($sql,$con))
    {
        die('Error : ' . mysql_error());
    }
*/


?>


<!-- Array ( [array] => Array ( [window] => 60 [version] => 200 [timestamp] => 1454097965 [body] => Array ( [totals] => Array ( [count] => 9999 [offset] => 0 ) [audio_clips] => Array ( [0] => Array ( [id] => 4123753 [title] => the boy who saved the day [user] => Array ( [id] => 3122120 [username] => mrspiecuch [counts] => Array ( [audio_clips] => 19 [followers] => 0 [followings] => 2 ) [urls] => Array ( [profile] => https://audioboom.com/mrspiecuch [image] => https://d15mj6e6qmt1na.cloudfront.net/i/composite/%23fe9800/150x150/avatars%2Fsmile-1.svg [profile_image] => Array ( [original] => https://d15mj6e6qmt1na.cloudfront.net/i/composite/%23fe9800/150x150/avatars%2Fsmile-1.svg ) ) ) [link_style] => author [duration] => 226.487 [mp3_filesize] => 3626310 [uploaded_at] => 2016-01-29T20:05:36.000Z [recorded_at] => 2016-01-29T14:04:17.000-06:00 [uploaded_at_ts] => 1454097936 [recorded_at_ts] => 1454097857 [can_comment] => 1 [can_embed] => 1 [category_id] => 184 [counts] => Array ( [comments] => 0 [likes] => 0 [plays] => 0 ) [urls] => Array ( [detail] => https://audioboom.com/boos/4123753-the-boy-who-saved-the-day [high_mp3] => https://audioboom.com/boos/4123753-the-boy-who-saved-the-day.mp3 [wave_img] => https://d15mj6e6qmt1na.cloudfront.net/i/w/4435600 ) [tags] => Array ( ) ) [1] => Array ( [id] => 4123751 [title] => Carbondale FD 688 page received at 13:03:35 on 01/29/16 [user] => Array ( [id] => 3145601 [username] => 




