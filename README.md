# Como Executar ?
### 1) Instalar os Modulos necessários(Listados no Package.json)

### 2) Basta usar o Node ou Nodemon para executar o index e pronto ! todos os testes podem ser Feitos via postman mesmo, porém utilizei o método send() para caso seja feito na web

### 3) Os inserts, Deletes e Updates podem ser vistos Em tempo real, basta abrir o arquivo `data/books.json` em um editor de código como VSCode ou Atom e executar as requisições no PostMan


# Rotas
### CREATE)
#### - O link da rota de inserção de dados é `http://localhost:6100/insert`, os parâmetros devem ser enviados via POST e são eles: id, nome, autor, editora, data e descrição
### READ) 
#### -A primeira rota, é a rota raiz, ela tem como callback um json com todo o 'Banco de dados', ela pode ser acessada pelo link `http://localhost:6100`.
#### -Os gets com Query Params podem ser acessados pela rota: `http://localhost:6100/Query?id=` e tem como retorno um elemento puxado pelo id.
#### -Os get params podem ser acessados na rota: `http://localhost:6100/Get/` onde deve ser passado um nome após a barra para buscar por um livro.

### UPDATE)
#### - A rota de atualização pode ser acessada em `http://localhost:6100/put` e o metódo de envio deve ser PUT, além disso caso não seja preenchido algum campo, ele será substituido por vazio, porém ao menos o id deve estar preenchido.

### DELETE)
#### A rota de deleção de dados é acessada através da rota `http://localhost:6100/delete` e basta passar o id através do metódo DELETE

### Rota Exercício 2)
#### - Para acessar a questão número 2 deve-se acessar a rota `http://localhost:6100/books?` e enviar como query param o nome de um livro para ser pesquisado na base de dados do Google Books diáriamente. 



# Sobre a API
#### Como o tema da api era livre, resolvi fazer uma api sobre livros, por ser algo que na minha opinião têm sumido cada vez mais na sociedade devido a modernização, para isso fiz uma api para gerenciar os livros de uma coleção, além disso também é possivel consultar livros disponíveis na playstore com a Api que usei para a segunda questão, o Google Books API 


# Observações
#### No item 2 pede para utilizar algum método de varredura de array, neste item usei apenas o .map() porém no resto da api também utilizei o .filter()

#### - Não sabia se era necessário interface gráfica, porém como foi pedido para usar o PostMan imaginei que não.

#### - Foi dito para usar um array no inicio do controller porém achei que seria mais dinâmico utilizar um arquivo json para simular um banco de dados

#### - Não entendi muito bem a parde de criar uma rotina que executa diariamente uma consulta, então apenas fiz uma função que realiza a consulta.