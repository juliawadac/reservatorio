import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl: string = 'https://esp32-mongodb-idev3.onrender.com';
  

  constructor (private http:HttpClient) {}

  getSensores (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/api/leituras/Dezan");
  }
  
}
