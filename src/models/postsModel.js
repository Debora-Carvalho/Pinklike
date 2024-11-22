import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    //seleciona o banco de dados "pinklike-database"
    const db = conexao.db("pinklike-database");
    //seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    //retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("pinklike-database");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)   
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("pinklike-database");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})  
}