<?php
// ** Cài đặt thông tin cơ sở dữ liệu - Bạn có thể lấy thông tin này từ nhà cung cấp hosting của mình ** //
/** Tên cơ sở dữ liệu của bạn */
define( 'DB_NAME', 'wordpress' );

/** Tên người dùng cơ sở dữ liệu */
define( 'DB_USER', 'wordpress' );

/** Mật khẩu cơ sở dữ liệu */
define( 'DB_PASSWORD', 'W0rdpr3ss' );

/** Địa chỉ máy chủ cơ sở dữ liệu (thường là localhost) */
define( 'DB_HOST', 'techsupport.cf48iuyi8s31.us-east-1.rds.amazonaws.com:5432' );

/** Loại bảng mã ký tự cho cơ sở dữ liệu. */
define( 'DB_CHARSET', 'utf8' );

/** Kiểu phân loại cơ sở dữ liệu. */
define( 'DB_COLLATE', '' );

/**# TẠO MẶT ĐỊNH NỀN CHO DỰ ÁN CỦA BẠN.  BẠN CÓ THỂ THAY ĐỔI NÓ, NHƯNG HÃY CẨN THẬN VỚI CÁC GIÁ TRỊ NÀY NẾU CÓ THỂ. */
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

/**# Cấu hình WordPress */
$table_prefix = 'wp_';

/** Bật chế độ gỡ lỗi. */
define( 'WP_DEBUG', false );

/** Đường dẫn tuyệt đối đến thư mục WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Thiết lập biến WordPress. */
require_once ABSPATH . 'wp-settings.php';

