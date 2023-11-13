<?php

function miniCompiler($input) {
  $splitInput = str_split($input);
  $value = 0;

  for ($i = 0; $i < count($splitInput); $i++) {
    $action = $splitInput[$i];
    
    if($action == '#') $value = $value + 1;
    if($action == '@') $value = $value - 1;
    if($action == '*') $value = $value * $value;
    if($action == '&') echo $value;
  }
}

$start_time = microtime(true);
$input = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

miniCompiler($input);
$end_time = microtime(true); 
$execution_time = round(($end_time - $start_time) * 1000, 3);
echo "\nchallenge02: ".$execution_time."ms\n"; 
