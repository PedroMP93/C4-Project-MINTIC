const express = require('express');
const app = express();
const port = 5000;
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Welcom to Express");
});

app.post('/', (req,res)=>{

});


app.listen(port,() => {
    console.log(`Started on PORT ${port}`);
});

module.exports = app;