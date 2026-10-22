const express = require('express');

const aplicacion = express();

const PUERTO = process.env.PORT || 3000;

aplicacion.get('/ping', (solicitud, respuesta) => {
    respuesta.status(200).json({
        mensaje: 'La API funciona correctamente',
        estado: 'ok'
    });
});

aplicacion.listen(PUERTO, '0.0.0.0', () => {
    console.log(`API funcionando en el puerto ${PUERTO}`);
});