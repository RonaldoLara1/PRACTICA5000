import { modelo1 } from "../models/alumno.model.js";

modelo1.create({
    name: "Ronaldo"
})

export const test = ()=>{
    console.log("Si Funciona El Controlador")
}