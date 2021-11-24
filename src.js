const visitas = [];

/* const visitas = [
    {fecha: "2021-11-12", finca: "Altagracia", lote: "lote 4", labor: "primera abonada", area: "4", tecnico: "Anibal Zamora"},
    {fecha: "2021-11-16", finca: "Bellavista", lote: "lote 1", labor: "seguimiento", area: "1", tecnico: "Pedro Jimenez"},
    {fecha: "2021-11-18", finca: "La bonita", lote: "lote 3", labor: "segunda abonada", area: "2", tecnico: "Orlando Perez"},
    {fecha: "2021-11-20", finca: "la Ultima curva", lote: "lote 25", labor: "primera revision ", area: "semillero", tecnico: "Jose Palacio"},
    {fecha: "2021-11-22", finca: "AlTaGraCiA", lote: "lote 7", labor: "tercera abonada", area: "5", tecnico: "Luisa Jaramillo"},
    {fecha: "2021-12-12", finca: "la indomable", lote: "lote 43", labor: "capacitacion", area: "1", tecnico: "Omar Sepulveda"},
]; */

const insertarVisita = (fecha, finca, lote, labor, area, tecnico) => {
    // Se crea la visita de un nuevo usuario como objeto
    let visita = {
        "fecha": fecha,
        "finca": finca, 
        "lote": lote, 
        "labor": labor, 
        "area": area, 
        "tecnico": tecnico
    }
    visitas.push(visita);
 };

// const visita0 = insertarVisita("2021-11-12","Altagracia","Lote 4","primera abonada","4","Anibal Zamora");
// console.log(visita0);

const filtrarResultados = (key, value) => {
    let filtrados = [];

    for(let i in visitas){
        /* console.log("Contador: "+i);
        console.log(visitas[i]);
 */
        let visita = visitas[i];
        for(let keyVal in visita){
            let key1 = keyVal;
            let value1 = visita[keyVal];

            if(key === key1 && value.toLowerCase() === value1.toLowerCase()){
                filtrados.push(visita);
            }

            
            /* console.log("Key= "+key1);
            console.log("Value= "+value1); */
        }
        /* console.log(visitas[i]);
        console.log(value1.toLowerCase());*/
        //console.log(filtrados); 
        
        
    }
    //console.log(filtrados);
    return filtrados;

    //return console.log("Llave "+key1+" encontrad@!");
};

module.exports.filtrarResultados = filtrarResultados;
module.exports.insertarVisita = insertarVisita;
module.exports.visitas = visitas;

/* let arreglo = filtrarResultados('finca', 'Altagracia');
console.log("Resultado: ......");
console.log(arreglo); */