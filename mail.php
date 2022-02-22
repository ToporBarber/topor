<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['$phone'];

$to = "info@toporbarber.us";

$subject = "Mail From Website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@toporbarber.us" . "\r\n" .
"CC: rob@toporbarber.us";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
