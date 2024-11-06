<?php

    /*
    File db_connect.php
    File này dùng cho các file khác include vào. Mục đích để khởi tạo kết nối CSDL
    */
    
    
    // Khai báo cấu hình kết nối CSDL. Tuỳ chỉnh ở đây nếu tham số kết nối CSDL của bạn khác
    $servername = "techsupport.cf48iuyi8s31.us-east-1.rds.amazonaws.com";
    $username = "sepay";
    $password = "Abc#13579";
    $dbname = "sepayDB";

    // Kết nối CSDL sử dụng MySQLi.
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Kiểm tra kết nối
    if ($conn->connect_error) {
        echo json_encode(['success'=>FALSE, 'message' => 'MySQL connection failed: '. $conn->connect_error]);
        die();
    }
    
?>