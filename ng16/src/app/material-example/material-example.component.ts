import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';



@Component({
  selector: 'app-material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.css']
})
export class MaterialExampleComponent implements OnInit{
constructor(){

}

loginForm: any;

ngOnInit(){
  this.loginForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    address: new FormControl('',Validators.required),
    age: new FormControl('', [Validators.required,Validators.min(10)]),
    gender: new FormControl(['Male','Female'])
  })
}

onSubmit(){
console.log(this.loginForm.get('firstName').value)
}


}
