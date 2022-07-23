const express = require("express");

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
 })
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/:name', (req,res)=>{
    res.send("Hello, "+req.params.name);
});

app.get('/', (req,res)=>{
    res.send({success:true, message:"Oi, meu amor! Quero  dsdfsdf  que saiba que você é e está se tornando muito especial na minha vida. Desculpa eu não ser o melhor namorado, mas eu prometo que vou tentar ser. Graças a você dei um grande passo de pesquisa pro meu TCC. Isso é uma maquina virtual que pode ser acessado por quanquer canto do mundo e que será a rota da API da minha aplicação pro TCC. Um beijo do seu namoradinho que te ama mauito! (vou tentar ser menos estressado, prometo)"});
});

const port = 7000;
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
});