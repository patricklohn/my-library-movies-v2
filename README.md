## Biblioteca de filmes favoritos 

**Apresentação:**
O software é para uso basico para voce efetuar o cadastro de filmes que forem do seu interesse para deixar salvo além da sua memoria.
O programa é construido encima de Node.js com banco de dados para armanezar as informações inseridas.    

**Tecnologias Utilizadas:**
1. Linguagem do backEnd: JavaScript;
2. Contrução do Front: Handlebars; 
3. Ambiente de execução: Node.js;
4. Banco de dados: MySQL;

**Bibliotecas Utilizadas e suas versões**

1.   "express": "^4.21.1",
2.   "express-handlebars": "^8.0.1",
3.   "mysql": "^2.18.1",
4.   "mysql2": "^3.11.4",
5.   "nodemon": "^3.1.7"

## Instalação
Segue alguns passos utéis para instalação: 

* 1 -> Abrir o seu editor de codigo abrir o terminal e executar o comando: git clone https://github.com/patricklohn/my-library-moviesV2.git;
* 2 -> O projeto possui algumas tecnologias favor verificar elas e deixalas funcionando no seu ambiente. ex: Node e MySQL;
* 3 -> Após confirmar se todas as técnologias estão funcionando favor instalar as dependecias abrindo o terminal e executando o comando npm install; 
* 4 -> Agora precisamos configurar o banco de dados no projeto voce pode abrir o arquivo db/config.js e colocar as informações do seu banco de dados;

Obs: Configuração do Banco de Dados para o Projeto
1. Criando a Tabela e Colunas do Banco de Dados
Se você está configurando o banco de dados do zero, execute o seguinte comando SQL para criar a tabela movies com todas as colunas necessárias:

Copiar código sql
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    avaliacao INT,
    categoria VARCHAR(255),
    linkImg VARCHAR(2500),
    descricao VARCHAR(1000),
    situacao BOOLEAN
);
Nota: Certifique-se de conectar o projeto ao banco de dados antes de executar o comando acima.

2. Adicionando Colunas a uma Tabela Existente
Se a tabela movies já foi criada, mas está faltando alguma coluna, você pode adicioná-las com o seguinte comando SQL:

Copiar código sql
ALTER TABLE movies
ADD COLUMN name VARCHAR(255),
ADD COLUMN avaliacao INT,
ADD COLUMN categoria VARCHAR(255),
ADD COLUMN linkImg VARCHAR(2500),
ADD COLUMN descricao VARCHAR(1000),
ADD COLUMN situacao BOOLEAN;

3. Renomeando uma Coluna Existente
Caso você tenha criado uma coluna com o nome errado e não deseja alterar o código da aplicação, use este comando para renomeá-la diretamente no banco de dados.

Exemplo: Renomeando a coluna LinkImg para imagem_link:

sql
Copiar código
ALTER TABLE movies
RENAME COLUMN LinkImg TO imagem_link;

* 5 -> Agora que já fizemos todos os processos e o banco esta configurado podemos executar o programa dando um npm start; 

