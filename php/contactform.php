<?php
if(isset($_POST['submit'])){
    $name= $_POST['name'];
    $mailfrom= $_POST['email'];
    $message= $_POST['message'];

    $mailto="ajmalnizam246@gmail.com";
$headers="From: ".$mailfrom;
$txt="you have recieved email from " .$name. ".\n\n".$message;

mail($mailto,$headers, $txt);
header("Location: thankyou.html?mailsend");
}


?>

