#Put the alpine with nginx installed image as image's base
FROM nginx:alpine

#Copy all of the online portfolio's files in the html folder of the nginx server to display it
COPY . /usr/share/nginx/html

#Using the host's port 80 
EXPOSE 80