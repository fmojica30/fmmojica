<html>
<head>
<title> Number of Visits </title>
</head>
<body>
<?php
  if (!isset ($_COOKIE["numVisits"]))
  {
    $numVisits = 1;
    setcookie ("numVisits", $numVisits, time()+3600*24*365);
  }
  else
  {
    $numVisits = $_COOKIE["numVisits"];
    $numVisits++;
    setcookie ("numVisits", $numVisits, time()+3600*24*365);
  }

  if (!isset ($_COOKIE["lastVisit"]) {
    $visitDate = date('Y-m-d');
    setcookie("lastVisit",$visitDate, time()+3600*24*365);
  } else {
    
  }

?>

<h3> My Website </h3>
<?php
  print "This is your visit number: ".$numVisits;
?>

</body>
</html>
