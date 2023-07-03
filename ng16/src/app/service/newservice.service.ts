import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  constructor(private http: HttpClient) { }
  addData(data: any) {

    return this.http.post('http://localhost:3000/userData', data)

  }

  getData() {
    return this.http.get('http://localhost:3000/userData')
  }

  updateData(data: any, id: number) {
    return this.http.put('http://localhost:3000/userData/' + id, data)
  }

  deleteData(id: number) {
    return this.http.delete('http://localhost:3000/userData/' + id)

  }

}
