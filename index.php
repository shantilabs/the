<?php
function is_not_dot($s) { return $s[0] != '.'; }
$dirs = array_filter('is_not_dot', array_filter('is_dir', scandir('.')));
$dir = $dirs[array_rand($dirs)];
header("Location: /$dir/");
