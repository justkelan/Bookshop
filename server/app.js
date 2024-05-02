import express from 'express'
import cors from 'cors'
import {PORT, MongoDBURL} from './config.js'
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const app = express()

app.use(cors())
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

app.get('/', (req, res)=> {
   return res.status(200).send ("<h1>Wuh gin on!</h1>")
})

app.get('/shop', (req, res)=> {
//    return res.status(232).send ("<h1>YO! is my shop.</h1>")
   
      myBooks.find().toArray()
      .then(response=>{
       // console.log(response)
       res.status(200).send(response)
      })
      .catch(err=>console.log(err))
       //return res.status(232).send (`<a href = '/'> Book: ${data.id}</a> `)
})


app.get('/shop/:id', (req, res)=> {
    const data = req.params
    
    const filter ={
    "_id" :  new ObjectId(data.id)
}
   myBooks.findOne(filter)
   .then(response=>{
    // console.log(response)
    res.status(200).send(response)
   })
   .catch(err=>console.log(err))
    //return res.status(232).send (`<a href = '/'> Book: ${data.id}</a> `)
})
   

   

app.post('/admin/savebook',(req, res)=> {
    const data = req.body
    if(!data.Title)
        return res.status(400).send({message:"No Title Found"})
    if(!data.Author)
        return res.status(400).send({message:"No Author Found"})
    if(!data.Price)
        return res.status(400).send({message:"No Price Found"})

    myBooks.insertOne(data, (error, response)=>{
        if (error){
            console.log("An error occurred!")
            return res.sendStatus(500)
        }
    })
    return res.status(201).send(JSON.stringify(data))
})

app.delete('/admin/remove/:id', (req, res)=>{
    const data = req.params

    const filter ={
        "_id" :  new ObjectId(data.id)
    }
       myBooks.deleteOne(filter)
       .then(response=>{
        // console.log(response)
        res.status(200).send(response)
       })
       .catch(err=>console.log(err))
})

app.put('/admin/update/:id/:price', (req, res)=>{
    const docData = req.body
    const data = req.params


    const filter = {
        "_id": new object(data.id)
        }

    const upDoc = {
        $set: {
            "price": data.price
        }
    }

    myBooks.updataOne(filter, upDoc)
    .then(response=>{
        res.status(200).send(response)
    })
    .catch(err=>console.log(err))
})