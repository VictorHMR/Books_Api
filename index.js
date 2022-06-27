import express from "express";
import bodyParser from "body-parser";
import itemRouter from "./routes/Router_books.js"


const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(itemRouter.router);

app.listen(6100, ()=>{
  console.log("App rodando na porta: http://localhost:6100")
})

