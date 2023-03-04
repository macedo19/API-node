const express = require('express')

// Express
const app = express()

// Banco
const conn = require('./db/conn')

//Models
const User = require('./models/Filme')

// Routes
const filmesRoutes = require('../api_node/routes/filmesRoutes')


// Config para obter os dados do body em Json
// ------------------------------------------------------
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
// -----------------------------------------------

// Routes
app.use('/filmes/', filmesRoutes)


// // Sincronização com banco
conn.sync().then(()=> {
    app.listen(3000)
}).catch((err) => console.log(err))