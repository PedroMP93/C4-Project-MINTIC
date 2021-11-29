//import fetch from 'cross-fetch';
//import fetch from 'node-fetch';
//global.fetch = require("node-fetch");
//import "isomorphic-fetch";
//const fetch = require("node-fetch");

//const visitas = [];

/* const visitas = [
    {fecha: "2021-11-12", finca: "Altagracia", lote: "lote 4", labor: "primera abonada", area: "4", tecnico: "Anibal Zamora"},
    {fecha: "2021-11-16", finca: "Bellavista", lote: "lote 1", labor: "seguimiento", area: "1", tecnico: "Pedro Jimenez"},
    {fecha: "2021-11-18", finca: "La bonita", lote: "lote 3", labor: "segunda abonada", area: "2", tecnico: "Orlando Perez"},
    {fecha: "2021-11-20", finca: "la Ultima curva", lote: "lote 25", labor: "primera revision ", area: "semillero", tecnico: "Jose Palacio"},
    {fecha: "2021-11-22", finca: "AlTaGraCiA", lote: "lote 7", labor: "tercera abonada", area: "5", tecnico: "Luisa Jaramillo"},
    {fecha: "2021-12-12", finca: "la indomable", lote: "lote 43", labor: "capacitacion", area: "1", tecnico: "Omar Sepulveda"},
]; */

const insertarVisita = async(fecha, finca, lote, labor, area, tecnico) => {
    // Se crea la visita de un nuevo usuario como objeto
    //const fetch = require('node-fetch');
    let visita2send = {fecha, finca, lote, labor, area, tecnico};
    

    //let fetch = await import('node-fetch');
    let response = await fetch("https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit", 
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({visita2send})
    });
    
    return await response.json();
     
 };

// const visita0 = insertarVisita("2021-11-27","Altagracia","Lote 4","primera abonada","4","Anibal Zamora");
// console.log(visita0);

const filtrarResultados = async (key, value) => {
    //const fetch = require("node-fetch");
    let response = await fetch('https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit');
    let visitasAPI = await response.json();
        
    let filtrados = [];
    const objFiltrado = Object.entries(visitasAPI);
    const encontrado = objFiltrado.filter(function ([key1, value1]){
        return key1 == key;
        return value1.toLowerCase() == value.toLowerCase();
    });

    const newVisitas = Object.fromEntries(encontrado);
    return newVisitas;
    console.log("Hola: "+ newVisitas);
};


module.exports.filtrarResultados = filtrarResultados;
module.exports.insertarVisita = insertarVisita;
//module.exports.visitas = visitas;

/* let vistaAgregada = insertarVisita('2021-11-27','Altagracia','Lote 43','primera abonada','4','Anibal Zamora2');
let arreglo = filtrarResultados("finca", "Altagracia");
console.log("Resultado: ......");
//console.log(arreglo);
console.log(vistaAgregada); */
