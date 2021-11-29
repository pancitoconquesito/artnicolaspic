const express = require('express');
const app = express();
const port = 3000;
app.use((req:any, res:any, next:any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
const bodyParser = require('body-parser');
var  jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
app.use(cors());
const {Client}=require('pg');
const client = new Client({
  user     : 'postgres',
  host     : 'localhost',
  database : 'artnicolaspic',
  password : 'Zelda',
  port : 5432
});
client.connect();

app.get('/isArtista/:email',(req:any, res:any)=>{
  client.query(`select * from "artista" where "email"=$1`,[req.params.email], (err:any, respuesta:any)=>{
    if(respuesta.rows[0]==undefined) res.send({valor:true});
    else res.send({valor:false});
  });
});

app.post('/addArtista',jsonParser,(req:any, res:any)=>{
  let nombres=req.body.nombres;
  client.query(`insert into "artista" (nombre, email, clave, biografia)
  values ($1,$2,$3,$4) RETURNING *`,[req.body.nombre, req.body.email, req.body.clave, req.body.biografia] ,(err:any, respuesta:any)=>{
    res.send({valor:respuesta.rows[0]._id});
  });
});
app.get('/isLoginArtista/:email/:clave',(req:any, res:any)=>{
  client.query(`select * from "artista" where "email"=$1 and "clave"=$2`,[req.params.email, req.params.clave], (err:any, respuesta:any)=>{
    if(respuesta.rows[0]==undefined) res.send({valor:false});
    else res.send({valor:true, _id:respuesta.rows[0]._id});
  });
});
app.get('/getAllNoticias',(req:any, res:any)=>{
  client.query(`select * from "noticia" `, (err:any, respuesta:any)=>{
    res.send(respuesta.rows);
  });
});

app.get('/getImgNoticia/:_idImg',(req:any, res:any)=>{
  client.query(`select "dir" from "imagen"
  where "_id"=$1 `,[req.params._idImg], (err:any, respuesta:any)=>{
    res.send({valor:respuesta.rows[0]});
  });
});
app.get('/getAllArtistas',(req:any, res:any)=>{
  client.query(`select * from "artista"`, (err:any, respuesta:any)=>{
    res.send(respuesta.rows);
  });
});
app.get('/getNoticia/:_id',(req:any, res:any)=>{
  client.query(`select * from "noticia" where "_id"=$1`,[req.params._id], (err:any, respuesta:any)=>{
    res.send(respuesta.rows[0]);
  });
});
app.get('/getArtista/:_id',(req:any, res:any)=>{
  client.query(`select * from "artista" where "_id"=$1`,[req.params._id], (err:any, respuesta:any)=>{
    res.send(respuesta.rows[0]);
  });
});
app.get('/getGaleriaArtista/:_id',(req:any, res:any)=>{
  client.query(`select * from "img_galeria_artista" where "fk_artista"=$1`,[req.params._id], (err:any, respuesta:any)=>{
    res.send(respuesta.rows);
  });
});
app.get('/getImagendeImagen/:_id',(req:any, res:any)=>{
  client.query(`select "dir" from "imagen" where "_id"=$1`,[req.params._id], (err:any, respuesta:any)=>{
    res.send(respuesta.rows[0]);
  });
});


//---------------
app.post('/subirImg',jsonParser,(req:any, res:any)=>{
  client.query(`insert into "imagen" (dir) values($1) RETURNING *`,[req.body.dir] ,(err:any, respuesta:any)=>{
    res.send({valor:respuesta.rows[0]._id});
  });
});
app.post('/subirNoticia',jsonParser,(req:any, res:any)=>{
  client.query(`insert into "noticia" (img, titulo, contenido, fecha, fk_artista)
  values ($1,$2,$3,$4,$5) RETURNING *`,[req.body.img, req.body.titulo, req.body.contenido, req.body.fecha, req.body.fk_artista] ,(err:any, respuesta:any)=>{
    res.send({valor:respuesta});
  });
});
app.post('/subirImgGaleria',jsonParser,(req:any, res:any)=>{
  client.query(`insert into "img_galeria_artista" (titulo, fecha, fk_artista, img, descripcion)
  values ($1,$2,$3,$4,$5) RETURNING *`,[req.body.titulo, req.body.fecha, req.body.fk_artista, req.body.img, req.body.descripcion] ,(err:any, respuesta:any)=>{
    res.send({valor:respuesta});
  });
});

app.get('/getImagenInfo/:_id',(req:any, res:any)=>{
  client.query(`select * from "img_galeria_artista" where "_id"=$1`,[req.params._id], (err:any, respuesta:any)=>{
    res.send(respuesta.rows[0]);
  });
});


app.delete('/eliminarImg/:_id',(req:any, res:any)=>{
  client.query(`delete from "img_galeria_artista" where "_id"=$1`,[req.params._id],(err:any, respuesta:any)=>{
    res.send(respuesta);
  });
});

app.put('/updateInfo/:_id',jsonParser, (req:any, res:any, next:any)=>{
  let _id=req.params._id;
  let nombre=req.body.nombre;
  let clave=req.body.clave;
  let biografia=req.body.biografia;
  client.query(`update "artista" set "nombre" = $2, "clave" = $3, "biografia"=$4 where "_id" = $1 RETURNING *`,[_id, nombre, clave, biografia],(err:any, respuesta:any)=>{
    res.setHeader('X-Foo', 'bar');
    res.setHeader('Content-Type', 'text/plain');
    res.write('Modificacion ok');
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});