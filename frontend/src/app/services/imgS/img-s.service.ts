import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { img_galeria_artista } from 'src/app/models/img_galeria_artista.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgSService {

  constructor(private httpcliente:HttpClient) { }
  HttpUploadOptions = {
		headers: new HttpHeaders({ Accept: 'application/json' }),
	};

  public subirImg(dir:string):Observable<any>{
    let obj:any={dir:dir};
    return this.httpcliente.post(environment.connHttp+'/subirImg', obj, this.HttpUploadOptions); 
  }
  public subirImgGaleria(newImgGaleria:img_galeria_artista):Observable<any>{
    return this.httpcliente.post(environment.connHttp+'/subirImgGaleria', newImgGaleria, this.HttpUploadOptions); 
  }
  
  public getImagenInfo(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getImagenInfo/'+_id); 
  }
  public getImagendeImagen(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getImagendeImagen/'+_id); 
  }

  public eliminarImg(_id:number){
    return this.httpcliente.delete(environment.connHttp+'/eliminarImg/'+_id);
  }
  
  
}
