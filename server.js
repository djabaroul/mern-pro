const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('API Running'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Serveur Demarer sur le port ${PORT}`));
