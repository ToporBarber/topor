<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->Host       = 'smtp.gmail.com';
	$mail->Username   = 'info@gosht.com';
	$mail->Password   = '"q%x5V<&Zg)r\}M]zN!}';
	$mail->SMTPSecure = 'ssl';
	$mail->Port       = 465;

	$mail->setFrom('donotreply@gosht.com', 'Gosht');

	$mail->addAddress('info@gosht.com');

	$mail->Subject = 'Website Message';

	$body = '<h1>Website Form</h>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['subject']))){
		$body.='<p><strong>Subject:</strong> '.$_POST['subject'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}  

	$mail->Body = $body;

	//Отправление
	if(!$mail->send()) {
		$message = 'Failed To Send The Message';
	} else {
		$message = 'Message Was Sent Succesfully';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>