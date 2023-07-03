import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Welcome to Angular';
  appData ='Parent Data'
  parentData ='Coming from Parent'

ngOnInit(){

}

getNamewer(address:string){
  alert('at Parent Component and address is '+ address)
  console.log('getName called ')
}

}
