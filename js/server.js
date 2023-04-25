const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, esta es mi API pre configurada');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

app.get('/usuarios', (req, res) => {
    const usuarios = ['Juan', 'Ana', 'Pedro'];
    res.send(usuarios);
});
