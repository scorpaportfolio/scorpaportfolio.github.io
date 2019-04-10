<?php

$recepient = "scorpab@mail.ru";
$sitename = "My portfolio";

$name = trim($_POST["Name"]);
$phone = trim($_POST["Phone"]);
$email = trim($_POST["E-Mail"]);
$text = trim($_POST["Text"]);
$file = trim($_POST["File"]);
$message = "Имя: $name \nТелефон: $phone \nE-Mail: $email \nТекст: $text \nФайл: $file";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");