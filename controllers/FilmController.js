// Include Produtos
const { where } = require('sequelize')
const Filmes = require('../models/Filme')
const conn = require('../db/conn')

exports.createFilme = async (req, res) => {

    let {titulo, description, categoria} = ""

    // Testes no Postamn ELSE.

    titulo = req.query.titulo
    description = req.query.description
    categoria = req.query.categoria
    

    const data = {
        titulo,
        description,
        categoria
    }

    try{
        const repost = await Filmes.create(data)
        res.status(201).json(repost)
    }catch(error){
        console.log(error)
    }

}

// Get Produtos
exports.getFilmes = async (req, res, next) => {
  
    const filmes = await Filmes.findAll({ raw: true})

    res.status(200).json(filmes)
}

// Atualizar um produto
exports.updateFilme = async (req, res, next) => {
  
    let {titulo, description, categoria,id } = ""

    titulo = req.query.titulo
    description = req.query.description
    categoria = req.query.categoria
    id = req.query.id

    
    const data = {
        titulo,
        description,
        categoria,
    }

    try {

        const updateProd = await Filmes.update(data, {where: {id : id}})
        res.status(200).json(updateProd)
    

    }catch(error){
        console.log(error)
    }
}

exports.deleteFilmes = async (req, res, next) => {
    const id = req.query.id;

    let query =  "DELETE FROM filmes  WHERE id = " + id

    try{
        conn.query(query, function(error){  
            if(error){
                console.log(error)
            }
    
        });
    }catch(error){
        console.log(error)
    }

    const filmes = await Filmes.findAll({ raw: true})

    res.status(200).json(filmes)
}
