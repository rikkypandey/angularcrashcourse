import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  postUserData(data: any){

    return this.http.post('http://localhost:3000/userData',data)

  }
}
