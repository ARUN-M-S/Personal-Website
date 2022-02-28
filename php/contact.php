<?php
//variable setting
$name =$_REQUEST['name'];
$email =$_REQUEST['email'];
$message =$_REQUEST['message'];

//check input fields 
if(empty($name) || empty($email) ||empty($message) ){
    echo "please fill all the fields";
}else{
    mail("ajmalnizam246@gmail.com", "Website message", $message,"From:$name<$email>");
    echo"<script type='text/javascript'> alert('your message sent succesfully')</script>";

}


?>
