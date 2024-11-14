import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { test } from './backend/controllers/alumno.controller.js';

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("Funciona la BD")
})
.catch((error)=>{
    console.log("No Jalo", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se Escucha El Servidor")
})
test()