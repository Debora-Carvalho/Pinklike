//importando as bibliotecas necessárias
import express from "express";
import multer from "multer";

//importando as funções
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

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
    // rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;

