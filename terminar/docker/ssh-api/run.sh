docker stop ssh-api
docker rm ssh-api
# Xây dựng hình ảnh Docker
docker build -t ssh-api .

# Chạy container
docker run --name ssh-api -dt -p 5678:5000 -p 7688:7688 ssh-api
