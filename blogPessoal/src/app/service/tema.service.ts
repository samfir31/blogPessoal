import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllTema(){
    return this.http.get('http://localhost:9000/Tema', this.token)
  }
}
