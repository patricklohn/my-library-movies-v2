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

Obs: Caso não queira efetuar ajustes no codigo recomendo criar as informações de maneira que esteja no banco. 
Após criar o seu Banco e adicionar no projeto recomendo executar esse comando SQL para criar a table e as colunas de forma que o codigo ira interpretar. 

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    avaliacao INT,
    categoria VARCHAR(255),
    linkImg VARCHAR(2500),
    descricao VARCHAR(1000),
    situacao BOOLEAN
);

Caso voce já tenha criado a table movies manualmente voce pode criar os campos manualmente tambem seguindo o padrão do codigo ou executar esse outro comando SQL. 

ALTER TABLE movies
ADD COLUMN name VARCHAR(255),
ADD COLUMN avaliacao INT,
ADD COLUMN categoria VARCHAR(255),
ADD COLUMN linkImg VARCHAR(2500),
ADD COLUMN descricao VARCHAR(1000),
ADD COLUMN situacao BOOLEAN;

Caso voce precise renomear alguma coluna caso tenha digitado errado e não queira mexer no codigo fonte da aplicação voce pode alterar direto no banco executando esse outro codigo. Segue exemplo: 

ALTER TABLE produtos
RENAME COLUMN LinkImg TO imagem_link;

* 5 -> Agora que já fizemos todos os processos e o banco esta configurado podemos executar o programa dando um npm start; 

