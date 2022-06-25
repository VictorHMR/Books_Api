import Books from '../model/Books.js'

async function listAll (req, res) {
  console.log('ok')
  var book = await Books.getAllBook()
  res.send(book)
}

async function searchId(req, res) {
  var book = await Books.searchBookId(req.query.id)
  res.send(book)
}

async function searchName(req, res) {
  var book = await Books.searchBookName(req.params.name)
  book != '' ? res.send(book) : res.send('Não Encontrado')
}

async function insertBook(req, res) {
  var data = req.body
  var msg = await Books.insert(
    data.id,
    data.nome,
    data.autor,
    data.editora,
    data.data,
    data.descrição
  )
  msg ? res.send('Adicionado!') : res.send('Não foi possivel Adicionar!')
}

async function deleteBook(req, res) {
  var data = req.body
  var msg = await Books.deleteM(data.id)
  msg ? res.send('Deletado!') : res.send('Ocorreu um erro, tente novamente!')
}

async function updateBook(req, res) {
  var data = req.body
  var msg = await Books.putM(
    data.id,
    data.nome,
    data.autor,
    data.editora,
    data.data,
    data.descrição
  )
  msg ? res.send('Atualizado!') : res.send('Ocorreu um erro, tente novamente!')

}


/* Para a questão 2, resolvi utilizar o Google Books API para fazer uma pesquisa passada pelo usuário sobre livros*/
async function getGoogleBooks(req, res){
  var data = req.query.name
  var qnt = await Books.getGoogleBooks(data)
  res.send({Quantidade: qnt.length, Books: qnt})
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
