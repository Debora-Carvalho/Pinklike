import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Imagem 1",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Imagem 2",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Imagem 3",
        imagem: "https://placecats.com/millie/300/150",
    }
];

const app =  express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000!");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex( (post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

//para nao precisar ficar reiniciando o servidor, comando node --watch server.js
// posso consultar os códigos de comunicação/status htpp, pelo site http.cat