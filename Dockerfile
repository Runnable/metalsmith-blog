# Full list of versions available here: https://registry.hub.docker.com/_/node/tags/manage/\n' +
FROM node:0.10.38

# Open up ports on the container
EXPOSE 80

# Add repository files to container

ENV BASE_URL=http://metalsmith-blog-staging-runnable.runnableapp.com
RUN apt-get install -y python 

#Start: Main Repository
ADD [".", "/metalsmith-blog"]
WORKDIR /metalsmith-blog
RUN npm install
RUN node index.js


#End

WORKDIR /metalsmith-blog


# Command to start the app
CMD cd build; python -m SimpleHTTPServer 80

