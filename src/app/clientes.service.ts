import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiURL: string = "http://localhost:5000" + '/clientes';


  constructor( private http: HttpClient) { 
    
  }

  listar() : Observable<any> {

    return this.http.get(`${this.apiURL}`);

  }

  
}
