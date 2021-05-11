import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegativarService {
  apiURL: string = "http://localhost:5000" + '/negativacao';
  apiURL2: string = "http://localhost:5000" + '/clientes';

  constructor( private http: HttpClient) { 
    
  }

  negativar() : Observable<any> {

    return this.http.get(`${this.apiURL}`);

  }

  listar() : Observable<any> {

    return this.http.get(`${this.apiURL2}`);

  }

  
}
