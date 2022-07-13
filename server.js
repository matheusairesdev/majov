const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/:name', (req,res)=>{
    res.send("Hello, "+req.params.name);
});

app.get('/', (req,res)=>{
    res.send("Hello, Matheus");
});

const port = 7000;
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
});