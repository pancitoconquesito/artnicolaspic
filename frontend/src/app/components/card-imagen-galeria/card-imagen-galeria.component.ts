import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-card-imagen-galeria',
  templateUrl: './card-imagen-galeria.component.html',
  styleUrls: ['./card-imagen-galeria.component.scss']
})
export class CardImagenGaleriaComponent implements OnInit {

  @Input() imagenActual:img_galeria_artista={_id:0, titulo:'', fecha:'', fk_artista :0, img :0, descripcion:''};
  imagenImagen:string='';
  constructor(private artistaServicio:ArtistaService, private router:Router) { }

  ngOnInit(): void {
    console.log("id_;"+this.imagenActual.img);
    this.artistaServicio.getImagendeImagen(this.imagenActual.img).subscribe(dato=>{
      console.log(dato);
      this.imagenImagen=dato.dir;
    });
  }
  verDetalle(){
    this.router.navigate(['fotodetalle/'+this.imagenActual._id]);
  }
}
