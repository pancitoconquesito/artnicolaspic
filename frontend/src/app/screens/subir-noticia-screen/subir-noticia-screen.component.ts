import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { noticia } from 'src/app/models/noticia.model';
import { ArtistaService } from 'src/app/services/artista.service';
import { ImgSService } from 'src/app/services/imgS/img-s.service';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-subir-noticia-screen',
  templateUrl: './subir-noticia-screen.component.html',
  styleUrls: ['./subir-noticia-screen.component.scss']
})
export class SubirNoticiaScreenComponent implements OnInit {

  formulario:FormGroup;
  idImagenSubida:number=0;
  noticiaCreada:boolean=false;
  constructor(private fb:FormBuilder, private imgagenService:ImgSService, private noticiaServicio:NoticiaService, private artistaServicio:ArtistaService) {
    this.formulario=this.fb.group({
      img:['', [Validators.required, Validators.maxLength(1000)]],
      titulo:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      contenido:['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
   }

  ngOnInit(): void {
    console.log(this.artistaServicio.getArtistaLocalStorage());
  }
  validar(){
    this.imgagenService.subirImg(this.formulario.controls['img'].value).subscribe(dato=>{
      // console.log(dato);
      this.idImagenSubida=dato.valor;
      console.log(dato);
      let idArtista=this.artistaServicio.getArtistaLocalStorage();
      let nuevaNoticia:noticia={
        _id:0,
        img: this.idImagenSubida,
        titulo: this.formulario.controls['titulo'].value,
        contenido:this.formulario.controls['contenido'].value,
        fecha:new Date(Date.now()).toUTCString(),
        fk_artista:idArtista};
      // console.log(nuevaNoticia);
      this.noticiaServicio.subirNoticia(nuevaNoticia).subscribe(datoNoticia=>{
        // console.log(datoNoticia);
        this.noticiaCreada=true;
      });
    });

  }

  addOtraNoticia(){
    this.formulario.reset();
    this.noticiaCreada=false;
  }
}
