import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http/';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor( private httpClient: HttpClient ) { }

  public getShipList(): Observable<any> {
    return this.httpClient.get('https://swapi.co/api/starships');
  }
}
