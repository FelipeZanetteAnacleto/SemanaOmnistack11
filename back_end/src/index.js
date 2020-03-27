const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

// rota: localhost:porta
// recurso: o que vem dps da / na rota

/* Metodo HTTP:
      GET: Busca uma informação do back-end;
      POST: Cria uma informação no back-end;
      PUT: Alterar uma informação no back-end;
      DELETE: Deletar uma informação no back-end;
*/
/*
    Tipos de Parâmetros:
        Query Params: Parâmetros nomeados enviados na rota a após ? (filtros, paginação);
        Route Params: Parâmetros utilizados para identificar recursos;
        Request Body: O corpo da requisição, utilizado para criar ou alterar recursos;
*/

/*
Banco SQL:
    Driver: SELECT * FROM users
    Query Builder: table('user').select('*').where('')
*/