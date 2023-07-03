import { Component } from '@angular/core';

@Component({
  selector: 'app-lazymodule1',
  templateUrl: './lazymodule1.component.html',
  styleUrls: ['./lazymodule1.component.css']
})
export class Lazymodule1Component {
constructor(){
  console.log('Inside lazy1')
}
}
