import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { artista } from 'src/app/models/artista.models';
import { noticia } from 'src/app/models/noticia.model';
import { ArtistaService } from 'src/app/services/artista.service';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-noticia-detalle-screens',
  templateUrl: './noticia-detalle-screens.component.html',
  styleUrls: ['./noticia-detalle-screens.component.scss']
})
export class NoticiaDetalleScreensComponent implements OnInit {

  noticiaActual:noticia={_id:0,img: 0,titulo: '',contenido:'',fecha:'',fk_artista:0};
  idParamNoticia:number=0;
  imgNoticia:string='';
  artistaPublicador:artista={_id :0,nombre:'',email:'',clave:'',biografia:''};
  constructor(private noticiaServicio:NoticiaService, private rutaActiva:ActivatedRoute, private artistaServicio:ArtistaService, private router:Router) {
    this.rutaActiva.params.subscribe( param=>{
      this.idParamNoticia=param['_id'];
    });
   }

  ngOnInit(): void {
    this.noticiaServicio.getNoticia(this.idParamNoticia).subscribe(dato=>{
      // console.log(dato);
      this.noticiaActual=dato;
      this.noticiaServicio.getImgNoticia(this.noticiaActual.img).subscribe(dato=>{
        this.imgNoticia=dato.valor.dir;
      });
      this.artistaServicio.getArtista(this.noticiaActual.fk_artista).subscribe(dato=>{
        // console.log(dato);
        this.artistaPublicador=dato;
      });
    });
  }
  VerArtista(){
    this.router.navigate(['./artistas/artista_detalle/'+this.artistaPublicador._id]);
  }
}
