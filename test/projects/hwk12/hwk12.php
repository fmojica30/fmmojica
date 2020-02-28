<?php
if ($_POST["load"] == "confirm"){
  confirm();
} else {
  initial();
}

function initial() {
  //Reading the file and getting an array from it of time and name pairs
  //xxx in the array means no person has signed up yet 
  $file = fopen("./signup.txt","r");  
  $arr = array();
  while (!feof($file)) {
    $line = fgets($file);
    $line = rtrim($line);
    $try = explode(" ", $line);
    $arr[$try[0]] = $try[1];
  }
  fclose($file);
  $script = $_SERVER['PHP_SELF'];

  print <<<TOP
<html>
<head>
<title>Signup</title>
<link rel="stylesheet" href="./master.css">
</head>
<body>
<div class="wrapper">
<form action="$script" method="post">
<table>
<tr>
<td>Time</td><td>Name</td>
</tr>
TOP;

  foreach ($arr as $key => $value){
    if ($value == "xxx"){
      print <<<ROW
<tr>
<td>$key</td><td><input type="text" name=$key></td>
</tr>
ROW;
    } else {
      print<<<ROW
<tr>
<td>$key</td><td>$value</td>
</tr>
ROW;
    }
  }
  print <<<END
</table>
<input type = "submit" value = "Submit" />
<input type = "hidden" name = "load" value = "confirm" />
</form>
</div>
</body>
</html>
END;
}

function confirm() {
  //getting the script method 
  $eight = $_POST["8am"];
  $nine = $_POST["9am"];
  $ten = $_POST["10am"];
  $eleven = $_POST["11am"];
  $twelve = $_POST["12pm"];
  $one = $_POST["1pm"];
  $two = $_POST["2pm"];
  $three = $_POST["3pm"];
  $four = $_POST["4pm"];
  $five = $_POST["5pm"];

  updateFile($eight, $nine, $ten, $eleven, $twelve, $one, $two, $three, $four, $five);

  $script = $_SERVER['PHP_SELF'];
  
  print <<<RESULTS
<html>
<head>
<title>Signup</title>
<link rel="stylesheet" href="./master.css">
</head>
<body>
<div class="wrapper">
<form action="$script" method="post">
<table>
<tr>
<td>Time</td><td>Name</td>
</tr>
<tr>
<td>8am</td><td>$eight</td>
</tr>
<tr>
<td>9am</td><td>$nine</td>
</tr>
<tr>
<td>10am</td><td>$ten</td>
</tr>
<tr>
<td>11am</td><td>$eleven</td>
</tr>
<tr>
<td>12pm</td><td>$twelve</td>
</tr>
<tr>
<td>1pm</td><td>$one</td>
</tr>
<tr>
<td>2pm</td><td>$two</td>
</tr>
<tr>
<td>3pm</td><td>$three</td>
</tr>
<tr>
<td>4pm</td><td>$four</td>
</tr>
<tr>
<td>5pm</td><td>$five</td>
</tr>
</table>
<input type = "submit" value = "Confirm" />
<input type = "hidden" name = "load" value = "goback" />
</form>
</div>
</body>
</html>
RESULTS;
}

function updateFile($eight, $nine, $ten, $eleven, $twelve, $one, $two, $three, $four, $five) {
  $file = fopen("./signup.txt", "w");
  $times = array();
  $times[] = $eight;
  $times[] = $nine;
  $times[] = $ten;
  $times[] = $eleven;
  $times[] = $twelve;
  $times[] = $one;
  $times[] = $two;
  $times[] = $three;
  $times[] = $four;
  $times[] = $five;

  $timeStr = array(0 => "8am", 1 => "9am", 2 => "10am", 3 => "11am", 4 => "12pm",  5 => "1pm", 6 => "2pm", 7 => "3pm", 8 => "4pm", 9 => "5pm");
  
  for ($i = 0; $i < 10; $i++) {
    if ($times[$i]) {
      $str = $timeStr[$i] . " " . $times[$i] . "\n";
      fwrite($file, $str);
    } else {
      $str = $timeStr[$i] . " " . "xxx" . "\n";
      fwrite($file, $str);
    }
  }
  fclose($file);
}
?>