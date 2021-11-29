import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artista } from 'src/app/models/artista.models';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { ArtistaService } from 'src/app/services/artista.service';


@Component({
  selector: 'app-artista-detalle',
  templateUrl: './artista-detalle.component.html',
  styleUrls: ['./artista-detalle.component.scss']
})
export class ArtistaDetalleComponent implements OnInit {

  artistaActual:artista={_id :0,nombre:'',email:'',clave:'',biografia:''};
  idArtista:number=0;
  galeria:Array<img_galeria_artista>=[];
  //pasarlas con for a una card

  //dentro de la card
  // consultar dir de imagen
  constructor(private artistaServicio:ArtistaService, private rutaActiva:ActivatedRoute) {
    this.rutaActiva.params.subscribe(param=>{
      this.idArtista=param['_id'];
    });
   }

  ngOnInit(): void {
    this.artistaServicio.getArtista(this.idArtista).subscribe(datos=>{
      this.artistaActual=datos;
      this.artistaServicio.getGaleriaArtista(this.artistaActual._id).subscribe(datos=>{
        console.log(datos);
        for(let imagen_ of datos){
          this.galeria.push(imagen_);
        }
      });
    });
  }

}
