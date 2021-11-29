import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { ArtistaService } from 'src/app/services/artista.service';
import { ImgSService } from 'src/app/services/imgS/img-s.service';

@Component({
  selector: 'app-subir-img-screens',
  templateUrl: './subir-img-screens.component.html',
  styleUrls: ['./subir-img-screens.component.scss']
})
export class SubirImgScreensComponent implements OnInit {

  formulario:FormGroup;
  registro:boolean=false;
  noticiaCreada:boolean=false;
  constructor(private fb:FormBuilder, private imagenServicio:ImgSService, private artistaServicio:ArtistaService) {
    this.formulario=this.fb.group({
      titulo:['',[Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
      //fecha
      //fk_artista
      img:['',[Validators.required, Validators.maxLength(1000)]],
      descripcion:['',[Validators.required,Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {
  }
  validar(){
    //subir imagen y pobtener id
    this.imagenServicio.subirImg(this.formulario.controls['img'].value).subscribe(dato=>{
      //subir imggfaleria
      let idImg=dato.valor;
      let newImg:img_galeria_artista={
        _id:0, 
        titulo:this.formulario.controls['titulo'].value, 
        fecha:new Date(Date.now()).toUTCString(),
        fk_artista :this.artistaServicio.getArtistaLocalStorage(), 
        img :idImg, 
        descripcion:this.formulario.controls['descripcion'].value};
      this.imagenServicio.subirImgGaleria(newImg).subscribe(dato=>{
        console.log(dato);
        this.noticiaCreada=true;
      });
    });
  }
  addOtraNoticia(){
    this.formulario.reset();
    this.noticiaCreada=false;
  }
}
