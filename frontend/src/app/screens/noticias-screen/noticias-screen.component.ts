import { Component, OnInit } from '@angular/core';
import { noticia } from 'src/app/models/noticia.model';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.scss']
})
export class NoticiasScreenComponent implements OnInit {

  listaNoticias:Array<noticia>=[];
  constructor(private noticiaServicio:NoticiaService) { }

  ngOnInit(): void {
    this.noticiaServicio.getAllNoticias().subscribe(datos=>{
      // console.log(datos);
      for(let noticia of datos){
        this.listaNoticias.push(noticia);
      }
    });
  }

}
