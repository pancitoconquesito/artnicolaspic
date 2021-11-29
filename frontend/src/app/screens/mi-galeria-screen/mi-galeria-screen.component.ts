import { Component, OnInit } from '@angular/core';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-mi-galeria-screen',
  templateUrl: './mi-galeria-screen.component.html',
  styleUrls: ['./mi-galeria-screen.component.scss']
})
export class MiGaleriaScreenComponent implements OnInit {

  listaFotos:Array<img_galeria_artista>=[];
  idArtista:number=0;
  constructor(private artistaServicio:ArtistaService) { 
    
    this.idArtista=this.artistaServicio.getArtistaLocalStorage();
  }

  ngOnInit(): void {
    this.artistaServicio.getGaleriaArtista(this.idArtista).subscribe(dato=>{
      for(let foto of dato){
        this.listaFotos.push(foto);
      }
    });
  }

}
