<?php
$directory = 'files/public/';

if (is_dir($directory)) {
    $files = scandir($directory);
    $files = array_diff($files, array('.', '..'));

    if (count($files) > 0) {
        echo '<h2>List of Files:</h2>';
        echo '<ul>';
        foreach ($files as $file) {
            echo '<li>' . $file . '</li>';
        }
        echo '</ul>';
    } else {
        echo 'No files found in the directory';
    }
} else {
    echo 'Directory not found';
}
?>
