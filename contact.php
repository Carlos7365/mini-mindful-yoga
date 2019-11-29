<?php

if (isset($_POST['submit'])) {
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $emaiFrom = $_POST['emailadd'];
    $interested = $_POST['interest'];
    $message = $_POST['subject'];

    $mailTo = "info@agilewebdesigns.co.uk";
    $headers = "From: ".mailForm;
    $txt = "You have received an e=mail from ".$fname."./n/n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
    
}
