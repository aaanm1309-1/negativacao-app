import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class NegativarService {
  apiURL: string = "http://localhost:5000" + '/negativacao';

  constructor( private http: HttpClient) { 
    
  }

  negativar() : Observable<any> {

    return this.http.get(`${this.apiURL}`);

  }


  
}
