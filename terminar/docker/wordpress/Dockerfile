# Sử dụng base image là WordPress
FROM wordpress:latest

# Cài đặt các gói cần thiết cho PostgreSQL
# Cài đặt các gói cần thiết cho PostgreSQL
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libpq-dev \
    postgresql-client \
    && docker-php-ext-install pdo pdo_pgsql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Thiết lập các biến môi trường cho kết nối RDS
# Bạn có thể thay thế giá trị dưới đây bằng thông tin kết nối của mình
#ENV WORDPRESS_DB_HOST=techsupport.cf48iuyi8s31.us-east-1.rds.amazonaws.com:5432
#ENV WORDPRESS_DB_USER=wordpress
#ENV WORDPRESS_DB_PASSWORD=W0rdpr3ss
#ENV WORDPRESS_DB_NAME=wordpress


# Thay đổi thư mục làm việc
WORKDIR /var/www/html
ADD wp-config.php /var/www/html/
RUN chown www-data:www-data wp-config.php

# Bắt đầu Apache khi container khởi động
CMD ["apache2-foreground"]
