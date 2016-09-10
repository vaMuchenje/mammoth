<?php
// Parsing this spreadsheet: https://spreadsheets.google.com/pub?key=0Ah0xU81penP1dFNLWk5YMW41dkcwa1JNQXk3YUJoOXc&hl=en&output=

https://docs.google.com/spreadsheets/d/0Ah0xU81penP1dFNLWk5YMW41dkcwa1JNQXk3YUJoOXc/edit#gid=0


//$url = 'http://spreadsheets.google.com/feeds/list/0Ah0xU81penP1dFNLWk5YMW41dkcwa1JNQXk3YUJoOXc/od6/public/values?alt=json';

//https://spreadsheets.google.com/feeds/list/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/od6/public/values?alt=json
 //https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json
 //https://spreadsheets.google.com/feeds/list/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/od6/public/basic?alt=json
 //https://docs.google.com/spreadsheets/d/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/edit?usp=sharing
 //https://docs.google.com/spreadsheets/d/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/pubhtml?gid=0&single=true
 //https://docs.google.com/spreadsheets/d/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/pub?output=csv
 
 
 //$url = 'http://spreadsheets.google.com/feeds/list/0Ah0xU81penP1dFNLWk5YMW41dkcwa1JNQXk3YUJoOXc/od6/public/values?alt=json';
 
  $url = 'http://spreadsheets.google.com/feeds/list/1g7NPiUEguYLBvSlKSBmhRUbmr9C4qUpDmRT5DBm9if8/od6/public/values?alt=json';
 
 
$file= file_get_contents($url);
$json = json_decode($file);
$rows = $json->{'feed'}->{'entry'};
foreach($rows as $row) {
  echo '<p>';
  $title = $row->{'gsx$title'}->{'$t'};
  $link = $row->{'gsx$link'}->{'$t'};
  $review = $row->{'gsx$review'}->{'$t'};
  //echo $title . ' by ' . $author . '<br>' . $review;
  //echo $title . ' <br>'. $review;
  //<A HREF="newwindow.html" TARGET="_blank">a new window</A>
  echo '<A HREF="'. $link . '" TARGET="_blank">'. $title . '</A>';

  echo '</p>';
}
// See this here: http://imagine-it.org/google/spreadsheets/showspreadsheet.php
?>