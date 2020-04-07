#  SAKA POC Node.js MongoDB

- npm
- node.js
- mongoDB

####Edit Hosts file:

`Linux: /etc/hosts`

`Windows: C:\Windows\System32\drivers\etc\hosts`

>127.0.0.1       mongo

####Run local enviroment(database, etc)
> cd etc/local
>
> docker-compose up


####MongoDB user /passwd
> root / tivit123


####Access MongoDB Express
> http://localhost:8081


####MongoDB Client
> https://nosqlbooster.com/downloads


####MongoDB URL
> mongodb://root:tivit123@mongo:27017/easy?authSource=admin


####Heroku deploy
> git push heroku master
####Heroku logs
> heroku logs --tail


####Swagger (Open API)
> API Docs can be accessed in URI: http://saka-nodejs-mongodb-notes-app.herokuapp.com/api-docs/


####Tests
> Tests can be done in URI: http://saka-nodejs-mongodb-notes-app.herokuapp.com/api/v1/notes
> See more in Swagger (Open API)