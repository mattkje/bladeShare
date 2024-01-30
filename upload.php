<?php
// Check if the file is uploaded successfully
if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/';  // Specify the directory where you want to store the uploaded files
    $uploadFile = $uploadDir . basename($_FILES['file']['name']);

    // Move the uploaded file to the destination directory
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
        echo 'File uploaded successfully.';
    } else {
        echo 'Error moving file to destination directory.';
    }
} else {
    echo 'Error uploading file.';
}
?>
