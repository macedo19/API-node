const express = require('express')
const router = express.Router()
const FilmController = require('../controllers/FilmController')

// localhost:3000/filmes/


// Lista filmes
router.get('/listfilmes', FilmController.getFilmes)

// Cadastrar Venda (Ok)
router.post('/cadastrofilme', FilmController.createFilme )

// Atualizar produto
router.post('/atualizafilme', FilmController.updateFilme)

//Deleta filmes
router.post('/deletefilme',  FilmController.deleteFilmes)



module.exports = router