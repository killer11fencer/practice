require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {CONNECTION_STRING,SERVER_PORT} = process.env
const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance);
    console.log(dbInstance.listTables())
    app.listen(SERVER_PORT,()=>console.log('server port',SERVER_PORT))
}).catch(err=>console.log('error on server',err))
