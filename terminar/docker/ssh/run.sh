docker stop ssh-interface
docker rm ssh-interface
docker build -t web-ssh-interface .
docker run --name ssh-interface -d -p 7682:7681 web-ssh-interface

