import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const app =  express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000!");
});

async function  getTodosPosts() {
    const db = conexao.db("pinklike-database")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
};

app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});

// function buscarPostPorID(id) {
//     return posts.findIndex( (post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });

//para nao precisar ficar reiniciando o servidor, comando node --watch server.js
// posso consultar os códigos de comunicação/status htpp, pelo site http.cat