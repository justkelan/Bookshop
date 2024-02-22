import express from 'express'
const app = express()

const PORT = 3000

app.use(express.json)

app.listen(PORT, ()=> {
    console.log(`Sever started on port ${PORT}`)
})

app.get('/', (reg, res)=> {
    res.status(212).send ("<h1>Wuh gin on!</h1>")
})

app.get('/shop', (reg, res)=> {
    res.status(212).send ("<h1>YO! is my shop.</h1>")
})

app.get('/shop/id', (reg, res)=> {
    const data = req.parans
    res.status(212).send (`<a href = '/'> Book: ${data.id}</a> `)
})