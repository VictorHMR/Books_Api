import * as fs from 'fs'
import axios from 'axios'
var database = './data/books.json'

async function getAllBook () {
  return JSON.parse(await fs.promises.readFile(database))
}

async function searchBookId (id) {
  var all = JSON.parse(await fs.promises.readFile(database))
  var result = all.filter(book => book.id === id)
  return result
}

async function searchBookName (name) {
  var all = JSON.parse(await fs.promises.readFile(database))
  var result = all.filter(book => book.nome.toLowerCase() == name.toLowerCase())
  return result
}

async function insert (id, nome, autor, editora, data, descrição) {
  var all = JSON.parse(await fs.promises.readFile(database))
  if (all.filter(book => book.id == id).length <= 0) {
    all.push({
      id: id,
      nome: nome,
      autor: autor,
      editora: editora,
      data: data,
      descrição: descrição
    })
    fs.promises.writeFile(database, JSON.stringify(all, null, 2))
    return true
  } else {
    return false
  }
}

async function deleteM (id) {
  var all = JSON.parse(await fs.promises.readFile(database))
  if (all.filter(book => book.id == id).length == 1) {
    all = all.filter(book => book.id != id)
    fs.promises.writeFile(database, JSON.stringify(all, null, 2))
    return true
  } else {
    return false
  }
}

async function putM (id, nome, autor, editora, data, descrição) {
  var all = JSON.parse(await fs.promises.readFile(database))
  var oldM = all.filter(book => book.id == parseInt(id))
  if (oldM != '') {
    all.forEach(e => {
      if (e.id == id) {
        e.nome = nome
        e.autor = autor
        e.editora = editora
        e.data = data
        e.descrição = descrição
      }
    })
    fs.promises.writeFile(database, JSON.stringify(all, null, 2))
    return true
  } else {
    return false
  }
}

async function getGoogleBooks (name) {
  var cont = 0
 
  return  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${name}&printType=books&_limit=10`)
    .then(data => {
      var request = []
      var books = data.data.items
      request = books.map(book => {
          return book = {
            id: book.id,
            nome: book.volumeInfo.title,
            autor: book.volumeInfo.authors,
            editora: book.volumeInfo.publisher,
            data: book.volumeInfo.publishedDate,
            descrição: book.volumeInfo.description
          }
      })
      
      return request
    })
}

export default {
  getAllBook,
  searchBookId,
  searchBookName,
  insert,
  deleteM,
  putM,
  getGoogleBooks
}
