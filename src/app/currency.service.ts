
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insert } from './insert';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string = "http://localhost:17948/api/Home";
  constructor(private _http:HttpClient) { }

  Create(insert:Insert):Observable<Insert>{
    let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
    let options = {
      headers: httpHeaders
    };
    return this._http.post<Insert>(this.url,insert,options);
  }

  GetCurrency():Observable<any>{
    return this._http.get<any>(this.url);
  }

 


  

}