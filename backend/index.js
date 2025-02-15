import express from 'express'
import { PORT ,mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import booksroute from './Routes/booksroute.js'
import cors from "cors"

const app=express()

app.use(express.json())

// app.use(cors())

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))

app.get("/",(request,response)=>{
console.log(request);
 return response.status(234).send("welcome")
});

app.use('/books',booksroute)

mongoose.connect(mongoDBURL)
.then(()=>{
console.log("app connected to database");

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
})

}).catch((error)=>{
console.log(error);
})