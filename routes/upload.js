var express = require('express');

var fileUpload = require('express-fileupload');
var fs = require('fs');


var app = express();

var Usuario = require('../models/usuario');
var Sdr = require('../models/situacionRiesgo');
var Parcial = require('../models/solucionParcial');
var Parche = require('../models/solucionParche');
var Ideal = require('../models/solucionIdeal');


// default options
app.use(fileUpload());


app.put('/:tipo/:id', (req, res, next) => {

    var tipo = req.params.tipo;
    var id = req.params.id;

    // tipos de colección
    var tiposValidos = ['usuarios', 'sdrs', 'ideales', 'parciales', 'parches', 'procedimientos'];
    if (tiposValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Tipo de colección no es válida',
            errors: { message: 'Tipo de colección no es válida' }
        });
    }


    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No selecciono nada',
            errors: { message: 'Debe de seleccionar una imagen' }
        });
    }

    // Obtener nombre del archivo
    var archivo = req.files.imagen;
    var nombreCortado = archivo.name.split('.');
    var extensionArchivo = nombreCortado[nombreCortado.length - 1];

    // Sólo estas extensiones aceptamos
    var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extension no válida',
            errors: { message: 'Las extensiones válidas son ' + extensionesValidas.join(', ') }
        });
    }

    // Nombre de archivo personalizado
    // 12312312312-123.png
    var nombreArchivo = `${ id }-${ new Date().getMilliseconds() }.${ extensionArchivo }`;


    // Mover el archivo del temporal a un path
    var path = `./uploads/${ tipo }/${ nombreArchivo }`;

    archivo.mv(path, err => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err
            });
        }


        subirPorTipo(tipo, id, nombreArchivo, res);

    });

});



function subirPorTipo(tipo, id, nombreArchivo, res) {

    if (tipo === 'usuarios') {

        Usuario.findById(id, (err, usuario) => {

            if (!usuario) {
                return res.status(400).json({
                    ok: true,
                    mensaje: 'Usuario no existe',
                    errors: { message: 'Usuario no existe' }
                });
            }


            var pathViejo = './uploads/usuarios/' + usuario.img;

            // Si existe, elimina la imagen anterior
            if (fs.existsSync(pathViejo)) {
                fs.unlink(pathViejo);
            }

            usuario.img = nombreArchivo;

            usuario.save((err, usuarioActualizado) => {

                usuarioActualizado.password = ':)';

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de usuario actualizada',
                    usuario: usuarioActualizado
                });

            });


        });

    }

    if (tipo === 'sdrs') {

        Sdr.findById(id, (err, sdr) => {

            if (!sdr) {
                return res.status(400).json({
                    ok: true,
                    mensaje: 'SDR no existe',
                    errors: { message: 'Sdr no existe' }
                });
            }

            var pathViejo = './uploads/sdrs/' + sdr.img;

            // Si existe, elimina la imagen anterior
            if (fs.existsSync(pathViejo)) {
                fs.unlink(pathViejo);
            }

            sdr.img = nombreArchivo;

            sdr.save((err, sdrActualizado) => {

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de SDR actualizada',
                    sdr: sdrActualizado
                });

            });

        });
    }

    if (tipo === 'ideales') {

        Ideal.findById(id, (err, ideal) => {

            if (!ideal) {
                return res.status(400).json({
                    ok: true,
                    mensaje: 'solucion ideal no existe',
                    errors: { message: 'solucion ideal no existe' }
                });
            }

            var pathViejo = './uploads/ideales/' + ideal.img;

            // Si existe, elimina la imagen anterior
            if (fs.existsSync(pathViejo)) {
                fs.unlink(pathViejo);
            }

            ideal.img = nombreArchivo;

            ideal.save((err, idealActualizado) => {

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de solucion ideal actualizada',
                    usuario: idealActualizado
                });

            });

        });
    }

    if (tipo === 'parciales') {

        Parcial.findById(id, (err, parcial) => {

            if (!parcial) {
                return res.status(400).json({
                    ok: true,
                    mensaje: 'solucion parcial no existe',
                    errors: { message: 'solucion parcial no existe' }
                });
            }

            var pathViejo = './uploads/parciales/' + parcial.img;

            // Si existe, elimina la imagen anterior
            if (fs.existsSync(pathViejo)) {
                fs.unlink(pathViejo);
            }

            parcial.img = nombreArchivo;

            parcial.save((err, parcialActualizado) => {

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de solucion parcial actualizada',
                    usuario: parcialActualizado
                });

            });

        });
    }

    if (tipo === 'parches') {

        Parche.findById(id, (err, parche) => {

            if (!parche) {
                return res.status(400).json({
                    ok: true,
                    mensaje: 'solucion parche no existe',
                    errors: { message: 'solucion parche no existe' }
                });
            }

            var pathViejo = './uploads/parches/' + parche.img;

            // Si existe, elimina la imagen anterior
            if (fs.existsSync(pathViejo)) {
                fs.unlink(pathViejo);
            }

            parche.img = nombreArchivo;

            parche.save((err, parcheActualizado) => {

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de solucion parche actualizada',
                    usuario: parcheActualizado
                });

            });

        });
    }
}



module.exports = app;