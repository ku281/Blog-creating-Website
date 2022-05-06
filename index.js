import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Router from './routes/route.js';
const app=express();
app.use(cors())
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
const PORT=8000;
app.listen(PORT,()=>console.log("server is running successfully on port 8000"));
console.log("server is running");
//Router.post('/create',()=>{

//})
Connection();
console.log("jhjsdjkjdk");