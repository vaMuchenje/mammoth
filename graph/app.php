<?php
ini_set('display_errors','on');
?>

<?php
    $con = mysql_connect("localhost","json","json") or die('Could not connect: ' . mysql_error());
    mysql_select_db("json", $con);

    $json_string = 'audio_clips.json';
    //read the json file contents
    $jsondata = file_get_contents($json_string);

    //convert json object to php associative array
    $obj = json_decode($jsondata,true);

   //  $obj = json_encode($jsondata, JSON_PRETTY_PRINT);

//echo json_encode($obj);
   // echo json_encode($obj, JSON_PRETTY_PRINT);
   //  echo json_encode($obj, JSON_NUMERIC_CHECK);
//print_r($obj);

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

echo $arr->{'array'};


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




