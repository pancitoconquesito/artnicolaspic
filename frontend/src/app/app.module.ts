import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { ArtistasScreenComponent } from './screens/artistas-screen/artistas-screen.component';
import { AcercaScreenComponent } from './screens/acerca-screen/acerca-screen.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import {HttpClientModule} from '@angular/common/http';
import { CardNoticiaComponent } from './components/card-noticia/card-noticia.component';
import { CardArtistaComponent } from './components/card-artista/card-artista.component';
import { ArtistaDetalleComponent } from './screens/artista-detalle/artista-detalle.component';
import { NoticiaDetalleScreensComponent } from './screens/noticia-detalle-screens/noticia-detalle-screens.component';
import { CardImagenGaleriaComponent } from './components/card-imagen-galeria/card-imagen-galeria.component';
import { SubirNoticiaScreenComponent } from './screens/subir-noticia-screen/subir-noticia-screen.component';
import { MiGaleriaScreenComponent } from './screens/mi-galeria-screen/mi-galeria-screen.component';
import { FotoDetalleScreenComponent } from './screens/foto-detalle-screen/foto-detalle-screen.component';
import { ConfigurarScreenComponent } from './screens/configurar-screen/configurar-screen.component';
import { SubirImgScreensComponent } from './screens/subir-img-screens/subir-img-screens.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginScreenComponent,
    NoticiasScreenComponent,
    ArtistasScreenComponent,
    AcercaScreenComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent,
    CardNoticiaComponent,
    CardArtistaComponent,
    ArtistaDetalleComponent,
    NoticiaDetalleScreensComponent,
    CardImagenGaleriaComponent,
    SubirNoticiaScreenComponent,
    MiGaleriaScreenComponent,
    FotoDetalleScreenComponent,
    ConfigurarScreenComponent,
    SubirImgScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    // NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
