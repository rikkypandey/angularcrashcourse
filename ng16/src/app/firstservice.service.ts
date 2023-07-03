import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }

  getUserData() {

    return [
      {
        name: 'Asok', id: 1, age: 23
      },
      {
        name: 'John', id: 2, age: 25
      }
    ]
  }
}
