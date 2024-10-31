# Sử dụng Docker image làm base để có Docker CLI sẵn
FROM docker:latest

# Cài đặt Python, pip và các gói cần thiết cho Flask
RUN apk add --no-cache python3 py3-pip bash

# Cài đặt các thư viện phát triển cho Python
RUN apk add --no-cache python3-dev libffi-dev gcc musl-dev

# Tạo một virtual environment
RUN python3 -m venv /venv

# Cập nhật PATH để sử dụng virtual environment
ENV PATH="/venv/bin:$PATH"

# Cài đặt Flask từ requirements.txt
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Sao chép mã nguồn vào container
COPY . /app
WORKDIR /app

# Ánh xạ Docker socket từ host để có thể chạy Docker bên trong container
VOLUME /var/run/docker.sock:/var/run/docker.sock

# Expose cổng 5000 để truy cập từ bên ngoài
EXPOSE 5000

# Chạy ứng dụng Flask
CMD ["python", "app.py"]

