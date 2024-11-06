aws s3 sync s3://cloudvm-web.techsupport.com.vn html/
docker stop my-static-website
docker rm my-static-website

docker build -t my-static-website .
docker run --name my-static-website -d -p 8080:80 my-static-website
