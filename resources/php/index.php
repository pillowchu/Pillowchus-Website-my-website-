<?php


// PHP program for deleting all
// file from a folder

// Folder path to be flushed
$folder_path = "php";

// List of name of files inside
// specified folder
$files = glob($folder_path . '/yes.php*');

// Delete all the files of the list
foreach ($files as $file) {
  if (is_file($file)) {
    // Deleting the given file
    unlink($file);
  }
}

?>