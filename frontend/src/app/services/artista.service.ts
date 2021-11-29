import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { artista } from '../models/artista.models';
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private loginSubject = new Subject<boolean>();
  setLoginObservable = this.loginSubject.asObservable();
  sendLoginData(estado:boolean){
    this.loginSubject.next(estado);
  }

  constructor(private httpcliente:HttpClient) { }
  HttpUploadOptions = {
		headers: new HttpHeaders({ Accept: 'application/json' }),
	};
  public isArtista(email:string):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/isArtista/'+email); 
  }
  public addArtista(newArtista:artista):Observable<any>{
    return this.httpcliente.post(environment.connHttp+'/addArtista', newArtista, this.HttpUploadOptions); 
  }
  public saveArtistaLocalStorage(_id:number){
    localStorage.setItem("_idArtista", String(_id));
  }
  public getArtistaLocalStorage(){
    return Number(localStorage.getItem("_idArtista"));
  }
  public isLoginArtista(email:string, clave:string):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/isLoginArtista/'+email+'/'+clave); 
  }
  public logOut(){
    localStorage.removeItem("_idArtista");
    localStorage.clear();
  }
  public getAllArtistas():Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getAllArtistas'); 
  }
  // public getTotalCorazones()
  public getArtista(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getArtista/'+_id); 
  }
  public getGaleriaArtista(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getGaleriaArtista/'+_id); 
  }
  public getImagendeImagen(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getImagendeImagen/'+_id); 
  }

  public updateInfo(UpdateArtista:artista):Observable<any>{
    // console.log(UpdateArtista);
    return this.httpcliente.put(environment.connHttp+'/updateInfo/'+UpdateArtista._id, UpdateArtista);
  }
}
