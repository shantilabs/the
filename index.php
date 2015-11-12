<?php
function is_not_dot($s) { return $s[0] != '.'; }
$dirs = array_filter(array_filter(scandir('.'), 'is_dir'), 'is_not_dot');
$dir = $dirs[array_rand($dirs)];
header("Location: /$dir/");
