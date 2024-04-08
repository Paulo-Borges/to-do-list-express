const express = require('express')
const checkListRouter = require('./src/Routes/checklist')
const app = express()

app.use(express.json())

app.use('/checklist', checkListRouter)

// const log = (req, res, next) => {
//     console.log(req.body)
//     console.log(`Data: ${Date.now()}`)
//     next()
// }

// app.use(log)

// app.get('/', (req, res) => {
//     res.send('<h1>Ola Mundo!</h1>')
// })

// app.get('/json', (req, res) => {
//     console.log(req.body)
//     res.json({title: "Tarefa x", done: true})
// })


app.listen(3000, () => {
    console.log('Servidor Iniciado')
})