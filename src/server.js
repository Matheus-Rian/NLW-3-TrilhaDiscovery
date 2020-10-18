//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Iniciando o express(Biblioteca)
const server = express()
server
//Utilizando os arquivos estáticos
.use(express.static('public'))

//configurar tempate engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


//Ligar server
server.listen(5500) 