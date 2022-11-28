
#Build image from Dockerfile_mysql
docker build -t mysql:v1 .

#Run image
docker run --name=mysql-v1 -p 5556:3306 -dt mysql:v1

#Access mysql
docker exec -it mysql-v1 mysql -u root -P 5556 -p
