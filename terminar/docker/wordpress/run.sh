docker stop wordpress-apache
docker rm wordpress-apache
docker build --no-cache -t web-wp-apache .
docker run --name wordpress-apache -d -p 8088:80 web-wp-apache
