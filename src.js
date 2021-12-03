const express = require('express');
const app = express();
//const port = 5000;
app.use(express.urlencoded({extended: false}));
app.use(express.json());
global.technical_visit = require('./technical-visit.json');


app.get('/api/agricultural-inputs/technical_visit',
    (req, res)=>{
    //console.log(visitasAPI);

    return res.json(technical_visit);
});


app.post('/api/agricultural-inputs/technical_visit', (req,res)=>{
    const fecha = req.body.fecha; 
    const finca = req.body.finca; 
    const lote = req.body.lote; 
    const labor = req.body.labor; 
    const area = req.body.area; 
    const tecnico = req.body.tecnico;

    const visita = {
        'fecha': fecha,
        'finca': finca,
        'lote': lote,
        'labor': labor,
        'area': area,
        'tecnico': tecnico
    }

    technical_visit.push(visita);

    return res.send(visita);

});

/*app.listen(port,() => {
    console.log(`Started on PORT ${port}`);
});*/

module.exports = app;