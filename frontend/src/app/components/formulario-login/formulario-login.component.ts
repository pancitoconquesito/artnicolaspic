import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.scss']
})
export class FormularioLoginComponent implements OnInit {

  formulario:FormGroup;
  registro:boolean=false;
  constructor(private fb:FormBuilder, private artistaServicio:ArtistaService, private router:Router) {
    this.formulario=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      clave:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  validar(){

    this.artistaServicio.isLoginArtista(this.formulario.controls['email'].value,this.formulario.controls['clave'].value).subscribe(dato=>{
      if(dato.valor==true){
        this.artistaServicio.saveArtistaLocalStorage(dato._id);
        this.artistaServicio.sendLoginData(true);
        this.router.navigate(['/noticias']);
      }else alert("email o clave invalida");
    });
  }
}
