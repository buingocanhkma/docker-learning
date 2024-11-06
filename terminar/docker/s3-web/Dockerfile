# Bước 1: Chọn hình ảnh Nginx làm hình ảnh cơ sở
FROM nginx:alpine

# Bước 2: Sao chép tệp cấu hình Nginx (tuỳ chọn)
COPY nginx.conf /etc/nginx/nginx.conf

# Bước 3: Sao chép các tệp tĩnh vào thư mục phục vụ của Nginx
COPY ./html /usr/share/nginx/html

# Bước 4: Mở cổng 80
EXPOSE 80

# Bước 5: Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]

