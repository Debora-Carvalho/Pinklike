import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000!");
});

//para nao precisar ficar reiniciando o servidor, comando node --watch server.js
// posso consultar os códigos de comunicação/status htpp, pelo site http.cat