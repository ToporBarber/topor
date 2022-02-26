<?php
//get data from form  
/*
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['phone'];

$to = "toporbarber.ny@gmail.com";

$subject = "Mail From Website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@toporbarber.us" . "\r\n" .
"CC: rob@toporbarber.us";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
*/


    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->Host       = 'smtp.gmail.com';
	$mail->Username   = 'info@toporbarber.us';
	$mail->Password   = '1041441topor';
	$mail->SMTPSecure = 'ssl';
	$mail->Port       =  465;

	$mail->setFrom('donotreply@toporbarber.us', 'Topor');

	$mail->addAddress('info@toporbarber.us');

	$mail->Subject = 'Website Message';

	$body = '<h1>Website Form</h>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}  

	$mail->Body = $body;

	//Отправление
	if(!$mail->send()) {
		$message = 'Failed To Send The Message';
	} else {
		$message = 'Message Was Sent Succesfully!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
