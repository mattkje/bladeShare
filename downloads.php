<?php
// Directory where your files are stored
$filesDir = 'https://folk.ntnu.no/mattikj/Files/downloads/';

// Get all files in the directory
$files = scandir($filesDir);

// Output the file list as an HTML unordered list
echo '<ul class="file-list">';
foreach ($files as $file) {
    if ($file != '.' && $file != '..') {
        $fileURL = $filesDir . $file;
        echo '<li><a href="' . $fileURL . '" download>' . $file . '</a></li>';
    }
}
echo '</ul>';
?>
