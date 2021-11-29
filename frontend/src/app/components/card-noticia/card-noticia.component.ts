import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noticia } from 'src/app/models/noticia.model';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.scss']
})
export class CardNoticiaComponent implements OnInit {

  @Input() noticia:noticia={_id:0,img: 0,titulo: '',contenido:'',fecha:'',fk_artista:0};
  imagenNoticia:string='';
  constructor(private noticiaServicio:NoticiaService, private router:Router) { }

  ngOnInit(): void {
    // console.log("id img : "+this.noticia.img);
    this.noticiaServicio.getImgNoticia(this.noticia.img).subscribe(dato=>{
      // console.log(dato.valor.dir);
      this.imagenNoticia=dato.valor.dir;
    })
  }
  verDetalleNoticia(){
    this.router.navigate(['./noticias/noticia_detalle/'+this.noticia._id])
  }
}
