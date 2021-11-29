import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistaService } from 'src/app/services/artista.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  login:boolean=false;
  constructor(private artistaService:ArtistaService, private router:Router) { }

  ngOnInit(): void {
    // let valor=this.artistaService.getArtistaLocalStorage();
    // this.login=(valor!=undefined && valor!=null);
    this.artistaService.setLoginObservable.subscribe(respuesta=>{
      this.login=respuesta;
    });
  }


  logOut(){
    this.artistaService.logOut();
    this.login=false;
    this.artistaService.sendLoginData(false);
    this.router.navigate(['/login']);
  }
}
