import express from 'express'
import {PORT, MongoDBURL} from './config.js'
import { MongoClient, ServerApiVersion } from "mongodb";
const app = express()

app.use(express.json())

const client = new MongoClient(MongoDBURL,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const booksDB = client.db("myBookShop")
const myBooks = booksDB.collection("booksCollection")

app.listen(PORT, ()=> {
    console.log(`Sever started on port ${PORT}`)
})

app.get('/', (reg, res)=> {
   return res.status(200).send ("<h1>Wuh gin on!</h1>")
})

app.get('/shop', (reg, res)=> {
   return res.status(232).send ("<h1>YO! is my shop.</h1>")
})

app.get('/shop/id', (reg, res)=> {
    const data = req.parans
   return res.status(232).send (`<a href = '/'> Book: ${data.id}</a> `)
})

app.post('/savebook',(req, res)=> {
    const data = req.body
    if (!data.title)
    return res.status(400).send("No title found.")
    
    if (!data.author)
    return res.status(400).send("No author found.")
    
    if (!data.price)
    return res.status(400).send("No price found.")

    myBooks.insertOne(data, (error, response)=>{
        if (error){
            console.log("An error occurred!")
            return res.sendStatus(500)
        }
    })
    return res.status(201).send(JSON.stringify(data))
})