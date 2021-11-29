import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaScreenComponent } from './screens/acerca-screen/acerca-screen.component';
import { ArtistaDetalleComponent } from './screens/artista-detalle/artista-detalle.component';
import { ArtistasScreenComponent } from './screens/artistas-screen/artistas-screen.component';
import { ConfigurarScreenComponent } from './screens/configurar-screen/configurar-screen.component';
import { FotoDetalleScreenComponent } from './screens/foto-detalle-screen/foto-detalle-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { MiGaleriaScreenComponent } from './screens/mi-galeria-screen/mi-galeria-screen.component';
import { NoticiaDetalleScreensComponent } from './screens/noticia-detalle-screens/noticia-detalle-screens.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { SubirImgScreensComponent } from './screens/subir-img-screens/subir-img-screens.component';
import { SubirNoticiaScreenComponent } from './screens/subir-noticia-screen/subir-noticia-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginScreenComponent},
  // {path:'noticias', component:LoginScreenComponent},
  {path:'noticias', component:NoticiasScreenComponent},
  {path:'noticias/noticia_detalle/:_id', component:NoticiaDetalleScreensComponent},
  {path:'artistas', component:ArtistasScreenComponent},
  {path:'artistas/artista_detalle/:_id', component:ArtistaDetalleComponent},
  {path:'acerca', component:AcercaScreenComponent},
  {path:'subirnoticia', component:SubirNoticiaScreenComponent},
  {path:'migaleria', component:MiGaleriaScreenComponent},
  {path:'fotodetalle/:_idFoto', component:FotoDetalleScreenComponent},
  {path:'subirimg', component:SubirImgScreensComponent},
  {path:'configurar', component:ConfigurarScreenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
