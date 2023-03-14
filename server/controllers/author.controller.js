const Author = require('../models/author.model');
const {request,response} = require('express');

module.exports.createAuthor = (request,response) =>{
    Author.create(request.body)
        .then(author => response.json({author}))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllAuthors = (request,response) =>{
    Author.find()
        .then(author => response.json({authors:author}))
        .catch(err => response.status(400).json(err))
}

module.exports.getOneAuthor = (request,response) =>{
    Author.findOne({_id:request.params.id})
        .then(oneAuthor => response.json({author:oneAuthor}))
        .catch(err => response.status(400).json(err))
}

module.exports.updateAuthor = (request,response) =>{
    Author.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
        .then(updatedAuthor =>response.json({author:updatedAuthor}))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request,response) =>{
    Author.deleteOne({_id:request.params.id})
        .then(deleteAuthor => response.json(deleteAuthor))
        .catch(err => response.status(400).json(err))
}