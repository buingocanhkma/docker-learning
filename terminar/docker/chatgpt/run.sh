docker stop chatgpt-webapp
docker rm chatgpt-webapp

# Build Docker image
docker build -t chatgpt-webapp .

# Chạy container và truyền API Key (nếu bạn chưa thiết lập trong Dockerfile)
docker run -dt --name chatgpt-webapp -p 5000:5000 -e OPENAI_API_KEY="YOUR_API_KEY" chatgpt-webapp
