const historicoTecnico = async () => {
    //const fetch = require("node-fetch");
    let response = await fetch("https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit");
    let visitasAPI = await response.json();
    
    //  ------------{tecnico: nombre,visitas: cantidad, areatotal:cantidad }
    const arregloVisitas = [];
    const res = {};
    visitasAPI.forEach((obj) => {
        const tecnico = `${obj.tecnico}`;
        if (!res[tecnico]) {
            res[tecnico] = {tecnico, visitas: 0, areatotal: 0 };
        };
        res[tecnico].visitas += 1;
        res[tecnico].areatotal += obj.area;
    });

    for(let i in res){
        arregloVisitas.push(res[i]);
    }
   // console.log(arregloVisitas);
    return arregloVisitas;

   /*  let nombres = [];
    let retorno = [];
    let area = 0;
    let visita = 0;

    for(let variable of turisticSites){
        if(!nombres.includes(variable.tecnico))
            nombres.push(variable.tecnico);
    }

    for(let tec of nombres){
        for(let key of visitasAPI){
            if(tec === key.tecnico){
                area += key.area;
                visita += 1; 
            }
        }
        retorno.push({
            "tecnico": tec,
            "visitas": visita,
            "areatotal": area
        });

        area, visita = 0;
    }
    //console.log(retorno);
    return retorno */
};

module.exports.historicoTecnico = historicoTecnico;
//let arreglo2 = historicoTecnico();