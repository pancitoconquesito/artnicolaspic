import { Component, OnInit } from '@angular/core';
import { artista } from 'src/app/models/artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-artistas-screen',
  templateUrl: './artistas-screen.component.html',
  styleUrls: ['./artistas-screen.component.scss']
})
export class ArtistasScreenComponent implements OnInit {

  listaArtistas:Array<artista>=[];
  constructor(private artistaServicio:ArtistaService) { }

  ngOnInit(): void {
    this.artistaServicio.getAllArtistas().subscribe(datos=>{
      console.log(datos);
      for(let artista of datos){
        this.listaArtistas.push(artista);
      }
    });
  }

}
