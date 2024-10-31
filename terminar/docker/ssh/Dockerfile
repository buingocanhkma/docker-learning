# Sử dụng Ubuntu làm base image
FROM ubuntu:20.04

# Đặt timezone và cài đặt các gói cần thiết
ENV TZ=Asia/Kolkata \
    DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y tzdata && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Cài đặt các gói cần thiết cho ttyd và các thư viện phụ thuộc
RUN apt-get install -y \
    openssh-client \
    build-essential \
    cmake \
    git \
    libjson-c-dev \
    libwebsockets-dev \
    libssl-dev \
    pkg-config

# Clone và cài đặt ttyd từ mã nguồn
RUN git clone --branch 1.6.3 https://github.com/tsl0922/ttyd.git && \
    cd ttyd && \
    mkdir build && \
    cd build && \
    cmake .. && \
    make && \
    make install

# Tạo một script để cho phép người dùng nhập thông tin kết nối SSH từ giao diện web
RUN echo '#!/bin/bash\nread -p "Enter SSH Host(user@your_ipv4): " host\nssh $host' > /usr/local/bin/ssh-client && \
    chmod +x /usr/local/bin/ssh-client

# Expose cổng cho ttyd
EXPOSE 7681

# Khởi động ttyd và sử dụng script ssh-client để kết nối SSH
CMD ttyd -p 7681 /usr/local/bin/ssh-client
