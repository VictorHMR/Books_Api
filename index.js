import express from "express";
import bodyParser from "body-parser";
import Router from "./src/routes/Router_books.js"

var port = 6100;
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(Router.router);


app.listen(port, ()=>{
  console.log(`App rodando Em: http://localhost:${port}`)
})

