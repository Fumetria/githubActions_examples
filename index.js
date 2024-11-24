const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Benvingut!');
});

app.listen(PORT, () => {
    console.log(`Aplicació escoltant al port ${PORT}`);
});