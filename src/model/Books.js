import * as fs from 'fs'
import axios from 'axios'
var database = './src/data/books.json'


async function getAllBook () {
  return JSON.parse(await fs.promises.readFile(database))
}

async function searchBookId (id) {
  return JSON.parse(await fs.promises.readFile(database)).filter(book => book.id === id)
   
}

async function searchBookName (name) {
  var all = JSON.parse(await fs.promises.readFile(database))
  return all.filter(book => book.nome.toLowerCase() == name.toLowerCase())
}

async function insert (newBook) {
  var all = JSON.parse(await fs.promises.readFile(database))
  if (all.filter(book => book.id == newBook.id).length <= 0) {
    all.push(newBook)
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

async function putM (modifyBook) {
  var all = JSON.parse(await fs.promises.readFile(database))
  var oldM = all.filter(book => book.id == modifyBook.id)
  if (oldM != '') {
    all.forEach(e => {
      if (e.id == modifyBook.id) {
        e.nome = modifyBook.nome
        e.autor = modifyBook.autor
        e.editora = modifyBook.editora
        e.data = modifyBook.data
        e.descrição = modifyBook.descrição
      }
    })
    fs.promises.writeFile(database, JSON.stringify(all, null, 2))
    return true
  } else {
    return false
  }
}
/* Realizei a Requisição utilizando axios para facilitar a implementação e retornei apenas as informações relevantes dos livros utilizando o .map()*/
async function getGoogleBooks (name) {
  
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
