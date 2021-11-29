import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { artista } from 'src/app/models/artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-configurar-screen',
  templateUrl: './configurar-screen.component.html',
  styleUrls: ['./configurar-screen.component.scss']
})
export class ConfigurarScreenComponent implements OnInit {

  formulario:FormGroup;
  infoArtista:artista={_id :0,nombre:'',email:'',clave:'',biografia:''};
  formularioTerminado:boolean=false;
  constructor(private fb:FormBuilder, private artistaServicio:ArtistaService) { 
    this.artistaServicio.getArtista(this.artistaServicio.getArtistaLocalStorage()).subscribe(dato=>{
      this.infoArtista=dato;
      this.formulario.controls['nombre'].setValue(this.infoArtista.nombre);
      this.formulario.controls['email'].setValue(this.infoArtista.email);
      this.formulario.controls['clave'].setValue(this.infoArtista.clave);
      this.formulario.controls['biografia'].setValue(this.infoArtista.biografia);
    });
    this.formulario=this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email:['',],
      clave:['', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
      biografia:['',[Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {
    
    
  }
  validar(){
    let UpdateArtista:artista={
      _id:this.infoArtista._id,
      nombre:this.formulario.controls['nombre'].value,
      email:'',
      clave:this.formulario.controls['clave'].value,
      biografia:this.formulario.controls['biografia'].value
    };
    this.artistaServicio.updateInfo(UpdateArtista).subscribe(dato=>{
    console.log("ok");});this.formularioTerminado=true;
  }
}
