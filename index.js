const express = require('express');
const app = express();
const port = 4000;
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Aplicación con ExpressJs y AWS</h1>');
});

app.use(router);

app.listen(port, ()=>{
    console.log('Aplicación Iniciada en Puerto '+port);
})