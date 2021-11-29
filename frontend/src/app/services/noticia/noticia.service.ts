import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { noticia } from 'src/app/models/noticia.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpcliente:HttpClient) { }
  HttpUploadOptions = {
		headers: new HttpHeaders({ Accept: 'application/json' }),
	};

  public getAllNoticias():Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getAllNoticias'); 
  }
  public getImgNoticia(_idImg:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getImgNoticia/'+_idImg); 
  }
  public getNoticia(_id:number):Observable<any>{
    return this.httpcliente.get(environment.connHttp+'/getNoticia/'+_id); 
  }
  
  public subirNoticia(nuevaNoticia:noticia):Observable<any>{
    return this.httpcliente.post(environment.connHttp+'/subirNoticia', nuevaNoticia, this.HttpUploadOptions); 
  }
  
  
}
