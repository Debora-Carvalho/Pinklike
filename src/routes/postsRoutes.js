//importando as bibliotecas necessárias
import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSucessStatus: 200
}

//importando as funções
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // permite que o servidor interprete requisições com o corpo no formato JSON
    app.use(express.json());

    app.use(cors(corsOptions))
    // rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // rota para criar um post
    app.post("/posts", postarNovoPost);
    // rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;

