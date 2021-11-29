import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { artista } from 'src/app/models/artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-card-artista',
  templateUrl: './card-artista.component.html',
  styleUrls: ['./card-artista.component.scss']
})
export class CardArtistaComponent implements OnInit {

  @Input() artista:artista={_id :0,nombre:'',email:'',clave:'',biografia:''};
  totalCorazones:number=0;
  constructor(private artistaServicio:ArtistaService, private ruta:Router) { }

  ngOnInit(): void {
    // this.artistaServicio.getTotalCorazones(this.artista._id).subscribe(dato=>{
    //   this.totalCorazones=dato.valor;
    // });
  }
  verPerfilArtista(){
    this.ruta.navigate(['./artistas/artista_detalle/'+this.artista._id]);
  }

}
