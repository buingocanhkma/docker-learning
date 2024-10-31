# Sử dụng Ubuntu làm base image
FROM python:3.8-slim

# Đặt timezone và cài đặt các gói cần thiết
ENV TZ=Asia/Kolkata \
    DEBIAN_FRONTEND=noninteractive

# Cài đặt các gói cần thiết, bao gồm cả Python và pip
RUN apt-get update && \
    apt-get install -y tzdata python3 python3-pip && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Cài đặt các gói cần thiết cho ttyd và các thư viện phụ thuộc
RUN apt-get install -y \
    build-essential \
    cmake \
    git \
    libjson-c-dev \
    libwebsockets-dev \
    libssl-dev \
    pkg-config \
    sshpass

# Clone và cài đặt ttyd từ mã nguồn
RUN git clone --branch 1.6.3 https://github.com/tsl0922/ttyd.git && \
    cd ttyd && \
    mkdir build && \
    cd build && \
    cmake .. && \
    make && \
    make install

# Sao chép ứng dụng Flask vào container
COPY app.py /app/app.py
COPY templates/ /app/templates/
COPY requirements.txt /app/requirements.txt  

# Đặt thư mục làm việc
WORKDIR /app

# Cài đặt các thư viện Python cần thiết
RUN pip3 install --no-cache-dir -r requirements.txt

# Expose cổng cho Flask và ttyd
EXPOSE 5000 7688

# Khởi động Flask app
CMD ["python3", "app.py"]

