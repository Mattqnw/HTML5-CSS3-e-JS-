const express= require('express')
const app = express()


//rotas

app.get("/",function(req,res){
    res.send("Página principal")
})

app.get("/server",function(req,res){
    res.sendFile(__dirname + "/index.html")
   
})

app.listen(8082,function(){
    console.log("Servidor rodando!")
})