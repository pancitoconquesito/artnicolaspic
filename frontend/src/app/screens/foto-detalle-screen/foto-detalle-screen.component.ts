import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { ArtistaService } from 'src/app/services/artista.service';
import { ImgSService } from 'src/app/services/imgS/img-s.service';

@Component({
  selector: 'app-foto-detalle-screen',
  templateUrl: './foto-detalle-screen.component.html',
  styleUrls: ['./foto-detalle-screen.component.scss']
})
export class FotoDetalleScreenComponent implements OnInit {

  foto:img_galeria_artista={_id:0, titulo:'', fecha:'', fk_artista :0, img :0, descripcion:''};
  idFoto:number=0;
  fotoFoto:string='';
  artista:boolean=false;
  constructor(private artistaServicio:ArtistaService, private imagenServicio:ImgSService, private rutaActiva:ActivatedRoute, private router:Router) {
    this.rutaActiva.params.subscribe(params=>{
      this.idFoto=params['_idFoto'];
    })

   }

  ngOnInit(): void {
    //obtener imagen
    this.imagenServicio.getImagenInfo(this.idFoto).subscribe(datos=>{
      // console.log(datos);
      this.foto=datos;
      //obtener imagen de imagen
      this.imagenServicio.getImagendeImagen(this.foto.img).subscribe(dato=>{
        this.fotoFoto=dato.dir;
        this.artista=this.artistaServicio.getArtistaLocalStorage()==this.foto.fk_artista;
      });
    });
    
  }
  eliminar(){
    this.imagenServicio.eliminarImg(this.idFoto).subscribe(dato=>{
      alert("eliminado exitosamente!");
      this.router.navigate(['/artistas']);
    });
  }
}
