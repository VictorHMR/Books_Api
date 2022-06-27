import Books from '../model/Books.js'

async function listAll (req, res) {
  var book = await Books.getAllBook()
  book != '' ? res.status(201).json(book): res.send('Banco de dados vazio ou não encontrado !')
}

async function searchId (req, res) {
  var book = await Books.searchBookId(req.query.id)
  book != '' ? res.status(201).json(book) : res.send('Não encontrado')
}

async function searchName (req, res) {
  var book = await Books.searchBookName(req.params.name)
  book != '' ?  res.status(201).json(book) : res.send('Não Encontrado')
}

async function insertBook (req, res) {
  var data = req.body
  var msg = await Books.insert({
    id: data.id,
    nome: data.nome,
    data: data.autor,
    editora: data.editora,
    data: data.data,
    descrição: data.descrição
  })
  msg ?  res.status(201).send('Adicionado!') : res.send('Não foi possivel Adicionar!')
}

async function deleteBook (req, res) {
  var data = req.body
  var msg = await Books.deleteM(data.id)
  msg ?  res.status(201).send('Deletado!') : res.send('Ocorreu um erro, tente novamente!')
}

async function updateBook (req, res) {
  var data = req.body
  var msg = await Books.putM({
    id:data.id,
    nome:data.nome,
    autor:data.autor,
    editora:data.editora,
    data:data.data,
    descrição:data.descrição
  }
  )
  msg ?  res.status(201).send('Atualizado!') : res.send('Ocorreu um erro, tente novamente!')
}



/* Para a questão 2, resolvi utilizar o Google Books API para fazer uma pesquisa passada pelo usuário sobre livros, 
Tentei utilizar o Node-cron para que fosse possível realizar a consulta diáriamente porém não consegui :( Até consegui executar a tarefa, 
porém apenas era enviado como resposta a primeira vez*/

async function getGoogleBooks (req, res) {
  var data = req.query.name
  var qnt =await Books.getGoogleBooks(data)
  res.status(201).json({ Quantidade: qnt.length, Books: qnt })
}

export default {
  listAll,
  searchId,
  searchName,
  insertBook,
  deleteBook,
  updateBook,
  getGoogleBooks
}
