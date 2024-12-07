const express = require("express")
const exphbs = require("express-handlebars")
const pool = require('./db/config')

// Configurações do server

const app = express()
const port = 4000; 

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/cadastrarMovie', (req, res)=>{
    res.render('home')
})

// Rotas de POST

app.post('/movie/update-movie',(req,res)=>{
    const id = req.body.id;
    const avaliacao = req.body.avaliacao;
    const categoria = req.body.categoria;
    const imagemMovie = req.body.imagemMovie;
    const descricao = req.body.descricao;
    const situacao = req.body.situacao;

    const returnSQL = `UPDATE movies SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?;`
    const data = ["avaliacao",avaliacao,"categoria",categoria,"linkImg",imagemMovie,"descricao",descricao,"situacao",situacao,"id",id]
    pool.query(returnSQL,data,function(err,data){
        if(err){
            console.log(err)
            return
        }

        res.redirect("/")
    })

})

app.post('/moivie/deleteId',(req,res)=>{
    const id = req.body.id;

    const returnSQL = `DELETE FROM movies WHERE id = ${id}`

    pool.query(returnSQL,function(err,data){
        if(err){
            console.log(err)
            return
        }

        res.redirect("/")
    })
})

app.post('/movies/insermovie',(req,res)=>{
    const movie = req.body.movie;
    const avaliacao = req.body.avaliacao;
    const categoria = req.body.categoria;
    const imagemMovie = req.body.imagemMovie;
    const descricao = req.body.descricao

    const comandSQL = `INSERT INTO movies (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)`
    const data = ['name', 'avaliacao', 'categoria', 'linkImg', 'descricao', 'situacao', movie,avaliacao,categoria,imagemMovie,descricao, 1]

    pool.query(comandSQL, data, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/')
    })
})

//Rotas de GET

app.get('/movies', (req,res)=>{
    const returnSQL = "SELECT * FROM movies"

    pool.query(returnSQL, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const movies = data
        res.render('movies', {movies})
    })
})

app.get('/',(req,res)=>{
    const returnSQL = "SELECT * FROM movies WHERE ?? = ?;"
    const data = ["situacao",1]
    pool.query(returnSQL,data,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const moviesAll = data
        res.render('moviesall',{moviesAll})
    })
})

app.get('/movie/:id',(req,res) =>{
    const id = req.params.id
    const returnSQL = `SELECT * FROM movies WHERE ?? = ?` 
    const data = ['id',id]
    pool.query(returnSQL,(err,data)=>{
        if(err){
            console.log(err)
            return
        }

        const movie = data[0]
        res.render('movie', {movie})
    })
})

app.get('/movies/edit/:id',(req,res) =>{
    const id = req.params.id;
    const returnSQL = `SELECT * FROM movies WHERE ?? = ?` 
    const data = ['id',id]
    pool.query(returnSQL,data,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const movie = data[0]
        
        res.render('editMovie',{movie})
    })
})

app.get('/movies/search', (req, res) => {
    const query = req.query.q || ''; // Captura a query string
    const sql = `SELECT * FROM movies WHERE name LIKE ? AND situacao = 1`; // Busca usando LIKE
    const params = [`%${query}%`]; // Adiciona % para buscas parciais

    pool.query(sql, params, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Erro ao buscar filmes.");
        }
        res.json(data); // Retorna os resultados como JSON
    });
});

//Escutando o server
app.listen(port,() =>{
    console.log(`Programa rodando na porta ${port}. Acesse o link do serviço http://localhost:${port}/`)
})