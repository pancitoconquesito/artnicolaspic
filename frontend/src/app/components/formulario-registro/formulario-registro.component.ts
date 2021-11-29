import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { artista } from 'src/app/models/artista.models';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  formulario:FormGroup;
  registro:boolean=false;
  constructor(private fb:FormBuilder, private artistaService:ArtistaService, private router:Router, private artistaServicio:ArtistaService) {
    this.formulario=this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email:['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      clave:['', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
      biografia:['',[Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {
  }
  validar(){
    //validar
    this.artistaService.isArtista(this.formulario.controls['email'].value).subscribe(dato=>{
      if(dato.valor==true){
        let newArtista:artista={
          _id:0, nombre:this.formulario.controls['nombre'].value,
          email:this.formulario.controls['email'].value,
          clave:this.formulario.controls['clave'].value,
          biografia:this.formulario.controls['biografia'].value
        }
        this.artistaService.addArtista(newArtista).subscribe(dato=>{
          this.artistaService.saveArtistaLocalStorage(dato.valor);
          alert("registro completado!");
          this.artistaServicio.sendLoginData(true);
          this.router.navigate(['/noticias']);
        });
      }else alert("email ya registrado")
    });
  }
}
