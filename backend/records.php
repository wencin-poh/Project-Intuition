<?php


$numstring=$_POST['numstring'];
$time=substr($numstring,4,13);
$nums=substr($numstring,19);
$module=substr($numstring,0,2);
$new=0;
if(strpos($nums, "1") == false 
and strpos($nums, "2") == false
and strpos($nums, "3") == false
and strpos($nums, "4") == false
and strpos($nums, "5") == false
and strpos($nums, "6") == false
and strpos($nums, "7") == false
and strpos($nums, "8") == false
and strpos($nums, "9") == false)
{
$new=1;}


$add= "INSERT INTO modules VALUES($numstring)";
$remove= "DELETE FROM modules WHERE user_time=$time";


$link=mysqli_connect('*****.domaincommysql.com', '*****', '*****','student_responses'); 

if ($new==0){
mysqli_query($link, $remove);}

mysqli_query($link, $add);

php?>
