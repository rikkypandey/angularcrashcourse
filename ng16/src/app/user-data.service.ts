import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataInterface } from './userdatainterface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  json_URL = '/assets/staticdata/httpdata.json';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserDataInterface[]> {

    return this.http.get<UserDataInterface[]>(this.json_URL)

  //   return [
  //   { name: 'RP1', id: 1, age: 23 },
  //   { name: 'SP1', id: 2, age: 25 },
  //   { name: 'DP1', id: 3, age: 22 }
  // ]
  }

  getUserDBData(){
   return  this.http.get('http://localhost:3000/userData');
  }

}


