import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { UserService } from '../service/user.service';
import { NewserviceService } from '../service/newservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.css']
})
export class MaterialExampleComponent implements OnInit{
constructor( private userService: UserService, 
  private newService : NewserviceService,
  @Inject(MAT_DIALOG_DATA) public data: any
 ){
}

loginForm: any;

ngOnInit(){
  this.loginForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    address: new FormControl('',[Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required,Validators.min(10)]),
    gender: new FormControl([])
  })  

  console.log('Data from Dashboard',this.data);

  if(this.data){
    this.loginForm.get('firstName').setValue(this.data.firstName)
    this.loginForm.get('lastName').setValue(this.data.lastName)
    this.loginForm.get('address').setValue(this.data.address)
    this.loginForm.get('age').setValue(this.data.age)
    this.loginForm.get('gender').setValue(this.data.gender)
  }

}

getUserData(){
  this.newService.getData().subscribe((val)=> {
    console.log(val)
  })
}


onSubmit(){
// console.log(this.loginForm.get('firstName').value)
// console.log(this.loginForm.value)
const userData = this.loginForm.value;

if(this.data){
// update
this.newService.updateData(userData, this.data.id).subscribe({
next(value) {
  alert('Data Updated Successfully!')
},error(err) {
  alert('Error Occurred...try Again')
},

})
}else{
  //add data
  this.newService.addData(userData).subscribe( { 
    next(value) {
      alert('Data Added Successfully!')
    },error(err) {
      alert('Error Occurred...try Again')
    },
})
}
}


get firstName(){ return this.loginForm.get('firstName')}
get lastName(){ return this.loginForm.get('lastName') }
get address(){ return this.loginForm.get('address') }

}
