const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.post('/', (req,res)=>{

});


app.listen(5000,() => {
    console.log("Started on PORT 5000");
});

module.exports = app;