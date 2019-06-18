FROM node:10-stretch

RUN npm install -g @angular/cli && ng config -g cli.packageManager yarn
WORKDIR /merukari