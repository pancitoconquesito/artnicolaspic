"use strict";
var express = require('express');
var app = express();
var port = 3000;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cors = require('cors');
app.use(cors());
var Client = require('pg').Client;
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'artnicolaspic',
    password: 'Zelda',
    port: 5432
});
client.connect();
app.get('/isArtista/:email', function (req, res) {
    client.query("select * from \"artista\" where \"email\"=$1", [req.params.email], function (err, respuesta) {
        if (respuesta.rows[0] == undefined)
            res.send({ valor: true });
        else
            res.send({ valor: false });
    });
});
app.post('/addArtista', jsonParser, function (req, res) {
    var nombres = req.body.nombres;
    client.query("insert into \"artista\" (nombre, email, clave, biografia)\n  values ($1,$2,$3,$4) RETURNING *", [req.body.nombre, req.body.email, req.body.clave, req.body.biografia], function (err, respuesta) {
        res.send({ valor: respuesta.rows[0]._id });
    });
});
app.get('/isLoginArtista/:email/:clave', function (req, res) {
    client.query("select * from \"artista\" where \"email\"=$1 and \"clave\"=$2", [req.params.email, req.params.clave], function (err, respuesta) {
        if (respuesta.rows[0] == undefined)
            res.send({ valor: false });
        else
            res.send({ valor: true, _id: respuesta.rows[0]._id });
    });
});
app.get('/getAllNoticias', function (req, res) {
    client.query("select * from \"noticia\" ", function (err, respuesta) {
        res.send(respuesta.rows);
    });
});
app.get('/getImgNoticia/:_idImg', function (req, res) {
    client.query("select \"dir\" from \"imagen\"\n  where \"_id\"=$1 ", [req.params._idImg], function (err, respuesta) {
        res.send({ valor: respuesta.rows[0] });
    });
});
app.get('/getAllArtistas', function (req, res) {
    client.query("select * from \"artista\"", function (err, respuesta) {
        res.send(respuesta.rows);
    });
});
app.get('/getNoticia/:_id', function (req, res) {
    client.query("select * from \"noticia\" where \"_id\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta.rows[0]);
    });
});
app.get('/getArtista/:_id', function (req, res) {
    client.query("select * from \"artista\" where \"_id\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta.rows[0]);
    });
});
app.get('/getGaleriaArtista/:_id', function (req, res) {
    client.query("select * from \"img_galeria_artista\" where \"fk_artista\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta.rows);
    });
});
app.get('/getImagendeImagen/:_id', function (req, res) {
    client.query("select \"dir\" from \"imagen\" where \"_id\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta.rows[0]);
    });
});
//---------------
app.post('/subirImg', jsonParser, function (req, res) {
    client.query("insert into \"imagen\" (dir) values($1) RETURNING *", [req.body.dir], function (err, respuesta) {
        res.send({ valor: respuesta.rows[0]._id });
    });
});
app.post('/subirNoticia', jsonParser, function (req, res) {
    client.query("insert into \"noticia\" (img, titulo, contenido, fecha, fk_artista)\n  values ($1,$2,$3,$4,$5) RETURNING *", [req.body.img, req.body.titulo, req.body.contenido, req.body.fecha, req.body.fk_artista], function (err, respuesta) {
        res.send({ valor: respuesta });
    });
});
app.post('/subirImgGaleria', jsonParser, function (req, res) {
    client.query("insert into \"img_galeria_artista\" (titulo, fecha, fk_artista, img, descripcion)\n  values ($1,$2,$3,$4,$5) RETURNING *", [req.body.titulo, req.body.fecha, req.body.fk_artista, req.body.img, req.body.descripcion], function (err, respuesta) {
        res.send({ valor: respuesta });
    });
});
app.get('/getImagenInfo/:_id', function (req, res) {
    client.query("select * from \"img_galeria_artista\" where \"_id\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta.rows[0]);
    });
});
app.delete('/eliminarImg/:_id', function (req, res) {
    client.query("delete from \"img_galeria_artista\" where \"_id\"=$1", [req.params._id], function (err, respuesta) {
        res.send(respuesta);
    });
});
app.put('/updateInfo/:_id', jsonParser, function (req, res, next) {
    var _id = req.params._id;
    var nombre = req.body.nombre;
    var clave = req.body.clave;
    var biografia = req.body.biografia;
    client.query("update \"artista\" set \"nombre\" = $2, \"clave\" = $3, \"biografia\"=$4 where \"_id\" = $1 RETURNING *", [_id, nombre, clave, biografia], function (err, respuesta) {
        res.setHeader('X-Foo', 'bar');
        res.setHeader('Content-Type', 'text/plain');
        res.write('Modificacion ok');
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
