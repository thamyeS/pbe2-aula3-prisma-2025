const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente');
const telefone = require('./controllers/telefone');
const pedidos = require('./controllers/pedido');

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

router.post('/clientes',Cliente.create);
router.get('/clientes',Cliente.read);
router.patch('/clientes/:id',Cliente.update);
router.delete('/clientes/:id',Cliente.remove);

router.post('/telefone',telefone.create);
router.get('/telefone',telefone.read);
router.patch('/telefone/:id',telefone.update);
router.delete('/telefone/:id',telefone.remove);

router.post('/pedidos',pedidos.create);
router.get('/pedidos',pedidos.read);
router.patch('/pedidos/:id',pedidos.update);
router.delete('/pedidos/:id',pedidos.remove);

module.exports = router;